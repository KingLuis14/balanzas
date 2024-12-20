import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import purgecss from "astro-purgecss";

import solidJs from "@astrojs/solid-js";
import path from 'path';

import sitemap from "@astrojs/sitemap";
import { SITE } from './src/constants.ts';

// https://astro.build/config
export default defineConfig({
  site : SITE,
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  devToolbar: {
    enabled: false
  },
  integrations: [icon(), purgecss(), solidJs(), sitemap({
    filter: (page) => page !== `${SITE}carrito/`,
  })],

 

});