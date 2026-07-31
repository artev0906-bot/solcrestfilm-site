import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    host: true,
  },
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
        ourwork: 'our-work.html',
        privacy: 'privacy-policy.html',
        terms: 'terms-and-conditions.html',
        admin: 'admin.html',
      },
    },
  },
})
