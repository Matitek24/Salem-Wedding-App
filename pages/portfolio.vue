<script setup>
import { useHead } from '#imports'
import gallery from '~/components/gallery.vue'
import Slogan from '~/components/Slogan.vue'

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
    <div class="mb-3 pt-5">
      <Slogan
        greeting="Witaj"
        teamTitle="To kadry pełne emocji"
        teamName=""
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
    </div>
    <div class="container">
      <gallery />
    </div>
</template>

  
  <style scoped>
  .about {
    padding: 2rem;
    text-align: center;
  }
  </style>
  