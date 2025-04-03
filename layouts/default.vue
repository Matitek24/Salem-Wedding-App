<script setup>
import Menu from '~/components/Menu.vue'
import Baner from '~/components/banners.vue'
import DynamicLeaves from '~/components/DynamicLeaves.vue' // Zaimportuj nowy komponent

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
  <div class="wrapper">
    <Menu
      :leftItems="leftMenu"
      :rightItems="rightMenu"
      logoSrc="/images/SalemWedding.png"
    />
    <Baner />
    <NuxtPage />
    <!-- Używamy nowego komponentu zamiast statycznych dekoracji -->
    <DynamicLeaves />
  </div>
</template>

<style>
.wrapper {
  position: relative;
  overflow-x: hidden;
}
</style>