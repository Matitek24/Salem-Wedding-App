<script setup>
import { useHead } from '#imports'
import WST from '~/components/WeddingStoriesList.vue'

useHead({
  title: 'O nas - Salem Wedding',
  meta: [
    { name: 'description', content: 'Poznaj historie par, które nam zaufały.' },
    { property: 'og:title', content: 'O nas - Salem Wedding' },
    { property: 'og:description', content: 'Sprawdź piękne historie miłosne.' }
  ]
})
</script>

<template>
  <div class="historie">
    <WST />
  </div>
</template>

<style scoped>
.historie {
  padding: 2rem;
  text-align: center;
}
</style>
