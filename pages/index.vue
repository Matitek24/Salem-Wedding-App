<script setup>
import { useHead } from '#imports'

useHead({
  title: 'Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})
  </script>

<template>
    <div class="home">
      <h1>Witamy na stronie głównej</h1>
      <p>Treść strony głównej...</p>
    </div>
  </template>
  
  <style scoped>
  .home {
    padding: 3rem;
    text-align: center;
  }
  </style>
  