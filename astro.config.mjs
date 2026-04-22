import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  integrations: [vue()],
  redirects: {
    "/directory": "/",
    "/guide": "/",
    "/compare": "/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
