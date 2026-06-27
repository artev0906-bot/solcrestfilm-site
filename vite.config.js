import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        residential: 'residential-window-film.html',
      },
    },
  },
})
