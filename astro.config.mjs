import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import purgecss from "astro-purgecss";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  devToolbar: {
    enabled: false
  },
  integrations: [icon(), purgecss(), solidJs()]
});