// https://astro.build/config
import { defineConfig } from 'astro/config'
import { resolve } from 'path'


const BASE_URL = 'http://localhost:3000'

export default defineConfig({
  integrations: [
  ],
  site: BASE_URL,
  base: '/ac/next',
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve('./src'),
        },
      ],
    },
  },
})
