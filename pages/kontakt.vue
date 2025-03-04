<script setup>
import { useHead } from '#imports'
import Formularz from '~/components/Formularz.vue'
useHead({
  title: 'Kontakt - Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})
  </script>

<template>
    <div class="kontakt">
      <Formularz />
    </div>
</template>
  
  
  <style scoped>
  .kontakt {
    padding: 2rem;
    text-align: center;
  }
  </style>
  