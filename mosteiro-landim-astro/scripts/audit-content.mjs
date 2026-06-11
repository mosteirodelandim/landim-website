/**
 * Content audit: every leaf string in src/i18n/pt/*.json must appear in the
 * built HTML (tag- and whitespace-normalized). Reports misses per namespace.
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = new URL("../", import.meta.url).pathname;
const I18N = join(ROOT, "src/i18n/pt");
const DIST = join(ROOT, "dist");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const normalize = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/["\u201c\u201d]/g, "")
    .replace(/[\s\u00a0]+/g, " ")
    .trim()
    .toLowerCase();

/** data-caption/alt/aria-label attribute text would be lost to tag-stripping;
 *  extract it first so attribute-only content counts as rendered. */
const attrText = (html) => {
  const out = [];
  const re = /(?:data-caption|alt|aria-label|title)="([^"]*)"/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out.join(" ");
};

const htmlFiles = (await walk(DIST)).filter((p) => p.endsWith(".html"));
let haystack = "";
for (const f of htmlFiles) {
  const html = await readFile(f, "utf8");
  haystack += normalize(html) + " " + normalize(attrText(html));
}

function leaves(obj, path = []) {
  const out = [];
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") out.push({ path: [...path, key].join("."), value });
    else if (Array.isArray(value))
      value.forEach((v, i) => {
        if (typeof v === "string") out.push({ path: [...path, key, i].join("."), value: v });
      });
    else if (value && typeof value === "object") out.push(...leaves(value, [...path, key]));
  }
  return out;
}

let total = 0;
let missing = 0;
for (const file of (await readdir(I18N)).filter((f) => f.endsWith(".json"))) {
  const json = JSON.parse(await readFile(join(I18N, file), "utf8"));
  const strings = leaves(json.pt).filter(({ value }) => normalize(value).length >= 8);
  const misses = [];
  for (const { path, value } of strings) {
    total += 1;
    const probe = normalize(value).slice(0, 60);
    if (!haystack.includes(probe)) {
      missing += 1;
      misses.push(path);
    }
  }
  console.log(
    `${file.padEnd(24)} ${String(strings.length - misses.length).padStart(3)}/${String(strings.length).padEnd(3)} rendered${misses.length ? "  MISSING: " + misses.join(", ") : ""}`,
  );
}

console.log(`\nTotal: ${total - missing}/${total} strings present in built HTML`);
process.exitCode = missing ? 1 : 0;
