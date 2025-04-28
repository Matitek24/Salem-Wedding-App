<script setup>
import { useHead, useRuntimeConfig, onMounted, ref } from '#imports'
import axios from 'axios'
import Slogan from '~/components/Slogan.vue';
import Testimonials from '~/components/Testimonials.vue';
import Footer from '~/components/footer.vue';
import Odnosnik from '~/components/Odnosnik.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'

// SEO
useHead({
  title: 'Opinie klientów – Salem Wedding',
  link: [{ rel: 'canonical', href: 'https://salemtest2.you2.pl/opinie' }],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Przeczytaj opinie naszych klientów – zobacz, jak Salem Wedding uwiecznia emocje i wspomnienia z Waszych wyjątkowych chwil.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Opinie klientów – Salem Wedding' },
    {
      property: 'og:description',
      content: 'Przeczytaj opinie naszych klientów – zobacz, jak Salem Wedding uwiecznia emocje i wspomnienia z Waszych wyjątkowych chwil.'
    },
    { property: 'og:url', content: 'https://salemtest2.you2.pl/opinie' },
    { property: 'og:image', content: 'https://salemtest2.you2.pl/images/testimonials-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Opinie klientów – Salem Wedding' },
    {
      name: 'twitter:description',
      content: 'Przeczytaj opinie naszych klientów – zobacz, jak Salem Wedding uwiecznia emocje i wspomnienia z Waszych wyjątkowych chwil.'
    },
    { name: 'twitter:image', content: 'https://salemtest2.you2.pl/images/testimonials-og.jpg' }
  ]
})

// Runtime config wykorzystywany do pobierania danych
const config = useRuntimeConfig()
const testimonials = ref([])

// Pobierz opinie z API
onMounted(async () => {
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/testimonials`)
    // jeśli zasób jest opakowany w data, dostosuj poniżej
    testimonials.value = Array.isArray(response.data) ? response.data : response.data.data
  } catch (error) {
    console.error('Błąd podczas pobierania opinii:', error)
  }
})

// AOS init
onMounted(() => {
  const initAOS = () => {
    setTimeout(() => {
      AOS.init({ offset: 100, delay: 200, easing: 'ease-in-out', once: true, mirror: true })
    }, 1000)
  }
  if (document.readyState === 'complete') {
    initAOS()
  } else {
    window.addEventListener('load', initAOS)
  }
})
</script>
<template>
  <div class="container" >
   <div class="pt-4 mt-4"   data-aos="fade-down"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
    <Slogan
    class="slogan"
      greeting="Dziękujem"
      teamTitle="za wasze zaufanie"
      rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
    />
   </div>

   <div class="line-break">
    <hr>
   </div>
   <div
      v-for="item in testimonials"
      :key="item.id"
      :data-aos="item.image_position === 'left' ? 'fade-left' : 'fade-right'"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <Testimonials
        class="testimonials"
        :leftImage="config.public.backendUrl + '/storage/' + item.image"
        :primaryButtonText="item.name"
        :mainOfferText="item.content"
        :imagePosition="item.image_position"
      />
    </div>
    <div class="line mt-5">
          <hr>
    </div>
    <div  data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
      <Odnosnik 
  
        leftImage="/images/wesele_fot1.jpg"
      text2="Poznaj"
       primaryButtonLink="/historie"
      text3="par które nam zaufały"
      scriptTitle="historie"
      cardText="here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected "
      buttonText="SPRAWDŹ NASZE HISTROIE"
      containerMarginTop="200px"/>
    </div>
    
  </div>
  <Footer />
</template>

<style scoped>


.line {
  position: absolute;
  height: 10px;
  width: 100%;
  left: 0;
  margin-top: -20px;
}

/* na ekranach mniejszych niż 1000px */
@media (max-width: 900px) {
  .slogan{
  margin-bottom:300px !important;
}
  /* pierwszy .testimonials */
  .testimonials{
    margin-top: -200px;
  }

}
</style>





