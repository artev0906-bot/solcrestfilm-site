import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        residential: 'residential-window-film-los-angeles.html',
        commercial: 'commercial-window-film-los-angeles.html',
        safety: 'safety-security-window-film-los-angeles.html',
        antigraffiti: 'anti-graffiti-window-film-los-angeles.html',
        decorative: 'decorative-privacy-window-film-los-angeles.html',
        smartfilm: 'smart-film-installation-los-angeles.html',
        storefront: 'storefront-window-protection-los-angeles.html',
      },
    },
  },
})
