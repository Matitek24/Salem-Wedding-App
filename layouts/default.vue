<script setup>
import Menu from '~/components/Menu.vue'
import Baner from '~/components/banners.vue'
import DynamicLeaves from '~/components/DynamicLeaves.vue' // Zaimportuj nowy komponent

const leftMenu = [
 { text: 'O Nas', link: '/onas' },
 { text: 'Portfolio', link: '/portfolio' },
 { text: 'Testimonials', link: '/testimonials' },
 { text: 'Polecamy', link: '/polecamy' },
]
const rightMenu = [
 { text: 'Wasze Historie', link: '/historie' },
 { text: 'Oferta', link: '/oferta' },
 { text: 'Blog', link: '/blogMain' },
 { text: 'Kontakt', link: '/kontakt' },
 { text: 'film', link: '/film' }
]
</script>

<template>
  <div class="wrapper">
    <Menu
      :leftItems="leftMenu"
      :rightItems="rightMenu"
      logoSrc="/images/SalemWedding.png"
    />
    <Baner />
    <NuxtPage />
    <!-- <DynamicLeaves /> -->
  </div>
</template>

<style>
.wrapper {
  position: relative;
  overflow-x: hidden;
}
</style>