<script setup>
import Menu from '~/components/Menu.vue'
import baner from '~/components/banners.vue'

const leftMenu = [
  { text: 'O Nas', link: '/onas' },
  { text: 'Portfolio', link: '/portfolio' },
  { text: 'Oferta', link: '/oferta' },
  { text: 'Testimonials', link: '/testimonials' }
]
const rightMenu = [
  { text: 'Wasze Historie', link: '/historie' },
  { text: 'Zakładka', link: '/' },
  { text: 'Blog', link: '/blog' },
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
      

      <baner />
        <NuxtPage />
    </div>
  </template>
  
  
  <style>
  body{
    margin:0px;
    overflow-x: hidden;
    max-width: 100%;
}
  </style>
  