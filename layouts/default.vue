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
    background-color: rgba(251, 211, 148, 0.023);
}
body::after{
  content: "";
  position: absolute;
  top: 400px;
  right:-200px; 
  z-index: -1;
  width: 1000px; 
  height: 1000px; 
  transform: rotate(140deg);
  background-image: url(../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.1;
}
  </style>
  