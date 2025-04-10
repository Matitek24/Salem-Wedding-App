<script setup>
import { useHead } from '#imports'
import WST from '~/components/WeddingStoriesList.vue'
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
    { name: 'description', content: 'Poznaj historie par, które nam zaufały.' },
    { property: 'og:title', content: 'O nas - Salem Wedding' },
    { property: 'og:description', content: 'Sprawdź piękne historie miłosne.' }
  ]
})
</script>

<template>
  <div class="historie">
<div data-aos="fade-down"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
  <Slogan
        greeting="Obejrzyj"
        teamTitle="Pelną historię"
        teamName=""
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
</div>
    <WST />
  </div>
  <Footer />
</template>

<style scoped>
.historie {
  padding: 2rem;
}
</style>
