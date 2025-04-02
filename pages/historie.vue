<script setup>
import { useHead } from '#imports'
import WST from '~/components/WeddingStoriesList.vue'
import Footer from '~/components/footer.vue'

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
    <Slogan
        greeting="Obejrzyj"
        teamTitle="Pelną historię"
        teamName=""
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
    <WST />
    <Footer />
  </div>
</template>

<style scoped>
.historie {
  padding: 2rem;
}
</style>
