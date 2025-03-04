<script setup>
import Menu from '~/components/Menu.vue'

const leftMenu = [
  { text: 'Home', link: '/' },
  { text: 'Oferta', link: '/oferta' }
]
const rightMenu = [
  { text: 'O nas', link: '/onas' },
  { text: 'Kontakt', link: '/kontakt' }
]
</script>

<template>
    <div>
      <Menu
        :leftItems="leftMenu"
        :rightItems="rightMenu"
        logoSrc="/images/SalemWedding.png"
      />
        <NuxtPage />
    </div>
  </template>
  
  
  <style>
  </style>
  