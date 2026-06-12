// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mosteirodelandim.com",
  trailingSlash: "never",
  integrations: [sitemap()],
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    // sharp is the default service; allow large source images
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: "always",
  },
});
