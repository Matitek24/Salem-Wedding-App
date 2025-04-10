<script setup>
import { useHead } from '#imports'
import gallery from '~/components/gallery.vue'
import Slogan from '~/components/Slogan.vue'
import Footer from '~/components/footer.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  const initAOS = () => {
    setTimeout(() => {
      AOS.init({
        offset: 100,
        delay: 200,
        easing: 'ease-in-out',
        once: true,
        mirror: true
      });
    }, 1000);
  };

  if (document.readyState === 'complete') {
    // Strona już załadowana, inicjuj AOS od razu
    initAOS();
  } else {
    // Czekaj na pełne załadowanie strony
    window.addEventListener('load', initAOS);
  }
});
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

  <div  data-aos="fade-down"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
    <Slogan
        greeting="Witaj"
        teamTitle="To kadry pełne emocji"
        teamName=""
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
  </div>
     
    </div>
    <div class="container">
      <gallery />
    </div>
    <Footer />
</template>

  
  <style scoped>
  .about {
    padding: 2rem;
    text-align: center;
  }
  </style>
  