<script setup>
import { useHead } from '#imports'
import PhotographyLayout from '~/components/Main_Page/PhotographyLayoutMain.vue'
import VideoLayoutMain from '~/components/Main_Page/VideoLayoutMain.vue'
import Banner from '~/components/PhotoBaner.vue'
import GalleryGrid from '~/components/Main_Page/PhotoNavigation.vue'
import Footer from '~/components/footer.vue'
useHead({
  title: 'Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})
const galleryItems = [
  { image: '/_nuxt/public/images/wesele_fot3.jpg', title: 'PORTFOLIO' },
  { image: '/_nuxt/public/images/wesele_fot3.jpg', title: 'HISTORIE' },
  { image: '/_nuxt/public/images/wesele_fot3.jpg', title: 'BLOG' },
  { image: '/_nuxt/public/images/wesele_fot3.jpg', title: 'OFERTA' },
  { image: '/_nuxt/public/images/wesele_fot3.jpg', title: 'O NAS' },
  { image: '/_nuxt/public/images/wesele_fot3.jpg', title: 'KONTAKT' },

]
  </script>

<template>
   <div class="container">
    <div class="d-flex justify-content-centere align-items-center flex-column tittle">
      <h1>Twoja Ślubna Historia</h1>
      <p>To chwile zamknięte w naszych kadrach</p>
      <hr>
    </div>
    <Slogan
        greeting="Witaj!"
        teamTitle="Jesteśmy ekipę"
        teamName="Salem Wedding"
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
   </div>
   <PhotographyLayout>
      <template #description>
        <p class="left-border ps-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impedit dicta eaque iusto fuga quidem quod sequi fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore, animi eum consequatur fugit quae labore voluptas laborum facere omnis. In consectetur sit earum esse velit ex asperiores quam. Facere.</p>
      </template>
      
      <template #mainImage>
        <img src="../public/images/wesele_fot1.jpg" style="width:100%;"alt="Main Image">
      </template>
    </PhotographyLayout>

    <VideoLayoutMain>
      <template #description>
        <p class="left-border ps-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impedit dicta eaque iusto fuga quidem quod sequi fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore, animi eum consequatur fugit quae labore voluptas laborum facere omnis. In consectetur sit earum esse velit ex asperiores quam. Facere.</p>
      </template>
      
      <template #mainImage>
        <img src="../public/images/wesele_fot1.jpg" style="width:100%;"alt="Main Image">
      </template>
    </VideoLayoutMain>

    <Banner
    image="/_nuxt/public/images/wesele_fot3.jpg"
    title="Lorem ipsum Lorem ipsum"
    subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  />

    <div class="container">
      <Slogan
        greeting="Piękna"
        teamTitle="Uroczystoś zaślubin"
        teamName=""
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
      <GalleryGrid :items="galleryItems" />
    </div>

    <Footer />
  </template>
  
  <style scoped>

  .tittle {
    padding: 4rem;
    text-align: center;
  }
  .tittle h1{
    font-family: 'Zodiak', Times, serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2.1rem;
  }
  .tittle p{
    font-family: 'Zodiak', Times, serif;
    font-weight: 300;
    letter-spacing: 2px;
    font-size:0.9rem;
    margin-top:-8px;
  }
  .tittle hr {
  margin-top: 3rem;
  width: 100vw;
  border: 1px solid;
  border-radius: 100px;
  border-color: var(--color-first); /* Użycie zmiennej */
}

  </style>
  