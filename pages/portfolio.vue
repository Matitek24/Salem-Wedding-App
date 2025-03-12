<script setup>
import { useHead } from '#imports'
import gallery from '~/components/gallery.vue'

useHead({
  title: 'O nas - Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})
  </script>

<template>
  <gallery />
</template>

  
  <style scoped>
  .about {
    padding: 2rem;
    text-align: center;
  }
  </style>
  