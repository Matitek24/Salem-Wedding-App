<script setup>
import Menu from '~/components/Menu.vue'
import Baner from '~/components/banners.vue'
import Preloader from '~/components/Preloder.vue'

const leftMenu = [
 { text: 'O Nas', link: '/onas' },
 { text: 'Portfolio', link: '/portfolio' },
 { text: 'Testimonials', link: '/testimonials' },
 { text: 'Oferta', link: '/oferta' },
]
const rightMenu = [
 { text: 'Wasze Historie', link: '/historie' },
 { text: 'Polecamy', link: '/polecamy' },
 { text: 'Blog', link: '/blogMain' },
 { text: 'Kontakt', link: '/kontakt' },
]
</script>

<template>
  <div class="wrapper">
    <Preloader :minDuration="800" :fadeOutDuration="500" />
    <Menu
      :leftItems="leftMenu"
      :rightItems="rightMenu"
      logoSrc="/images/SalemWedding.png"
    />
    <Baner />
    <NuxtPage />
  </div>
</template>

<style>
.wrapper {
  position: relative;
  overflow-x: hidden;
  background-image: url('../public/images/tloliscie.png');
  background-repeat: repeat-y;
  background-position: center top;
  background-size: auto;
  background-size: 1920px 1080px;
}
</style>