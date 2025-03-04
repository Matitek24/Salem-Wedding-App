import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  vue: {
    config: {
      performance: true,
    }
  },
  runtimeConfig: {
    public: {
      baseURL: 'http://127.0.0.1:8000'
    }
  },
});
