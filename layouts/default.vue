<script setup>
import Menu from '~/components/Menu.vue'

const leftMenu = [
  { text: 'Home', link: '/' },
  { text: 'Oferta', link: '/' },
  { text: 'Historie', link: '/historie' },
  { text: 'Zakladka', link: '/' }
]
const rightMenu = [
  { text: 'O nas', link: '/onas' },
  { text: 'Kontakt', link: '/kontakt' },
  { text: 'Blog', link: '/' },
  { text: 'Portfolio', link: '/portfolio' }
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
  