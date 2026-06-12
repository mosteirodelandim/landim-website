/**
 * Post-build: remove original-format images (jpg/png/jpeg) from dist/_astro
 * that no built HTML/CSS/JS/XML references. Astro emits the source file for
 * every imported image even when only AVIF/WebP variants are used.
 */
import { readdir, readFile, unlink, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const ASTRO_DIR = join(DIST, "_astro");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const all = await walk(DIST);
const textFiles = all.filter((p) => /\.(html|css|js|mjs|xml|json|webmanifest)$/.test(p));
const candidates = (await readdir(ASTRO_DIR)).filter((f) =>
  /\.(jpe?g|png)$/i.test(f),
);

let haystack = "";
for (const file of textFiles) {
  haystack += await readFile(file, "utf8");
}

let removed = 0;
let freed = 0;
for (const file of candidates) {
  if (!haystack.includes(file)) {
    const p = join(ASTRO_DIR, file);
    const { size } = await stat(p);
    await unlink(p);
    removed += 1;
    freed += size;
  }
}

console.log(
  `prune-originals: removed ${removed} unreferenced ${removed === 1 ? "file" : "files"} (${(freed / 1024 / 1024).toFixed(1)} MB)`,
);
