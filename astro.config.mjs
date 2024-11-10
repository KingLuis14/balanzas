import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import purgecss from "astro-purgecss";

import solidJs from "@astrojs/solid-js";
import path from 'path';

import sitemap from "@astrojs/sitemap";
import { SITE } from '@/constants';

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

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'), // Asegúrate de que `src` es la carpeta donde está `constants`
      },
    },
  },


});