import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',
  
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/style/style.css'
  ],

  vue: {
    config: {
      performance: true
    }
  },

  runtimeConfig: {
    public: {
      baseURL: 'http://127.0.0.1:8000',
      ApiKey: process.env.API_KEY,
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000/api',
      backendUrl: process.env.BACKEND_URL || 'http://localhost:8000'
    }
  },

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js',
          defer: true
        }
      ]
    }
  }
});
