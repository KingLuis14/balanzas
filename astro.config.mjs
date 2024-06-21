import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [icon(), purgecss()]
});