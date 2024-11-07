import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import purgecss from "astro-purgecss";

import solidJs from "@astrojs/solid-js";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site : 'https://balorien.com/',
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  devToolbar: {
    enabled: false
  },
  integrations: [icon(), purgecss(), solidJs(), sitemap({
    filter: (page) => page !== 'https://balorien.com/carrito/',
  })]
});