<script setup>
import { useHead } from '#imports'
import Slogan from '~/components/Slogan.vue';
import { ref, computed } from 'vue';
import Testimonials from '~/components/Testimonials.vue';
import Footer from '~/components/footer.vue';
import Odnosnik from '~/components/Odnosnik.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'


useHead({
  title: 'Opinie klientów – Salem Wedding',
  link: [
    { rel: 'canonical', href: 'https://salemtest2.you2.pl/opinie' }
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content:
        'Przeczytaj opinie naszych klientów – zobacz, jak Salem Wedding uwiecznia emocje i wspomnienia z Waszych wyjątkowych chwil.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Opinie klientów – Salem Wedding' },
    {
      property: 'og:description',
      content:
        'Przeczytaj opinie naszych klientów – zobacz, jak Salem Wedding uwiecznia emocje i wspomnienia z Waszych wyjątkowych chwil.'
    },
    { property: 'og:url', content: 'https://salemtest2.you2.pl/opinie' },
    { property: 'og:image', content: 'https://salemtest2.you2.pl/images/testimonials-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Opinie klientów – Salem Wedding' },
    {
      name: 'twitter:description',
      content:
        'Przeczytaj opinie naszych klientów – zobacz, jak Salem Wedding uwiecznia emocje i wspomnienia z Waszych wyjątkowych chwil.'
    },
    { name: 'twitter:image', content: 'https://salemtest2.you2.pl/images/testimonials-og.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Opinie klientów – Salem Wedding",
        "description":
          "Przeczytaj opinie naszych klientów – zobacz, jak Salem Wedding uwiecznia emocje i wspomnienia z Waszych wyjątkowych chwil.",
        "url": "https://salemtest2.you2.pl/opinie",
        "mainEntity": {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Aleksandra & Łukasz"
          },
          "reviewBody":
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form…",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        }
      })
    }
  ]
})


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
   <div   data-aos="fade-left"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
    <Testimonials
        class="testimonials"
    leftImage="/images/wesele_fot1.jpg"
    primaryButtonText="Aleksandra & Łukasz"
    mainOfferText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc . There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected "
    imagePosition="left" 
    />
    </div>

    <div   data-aos="fade-right"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
    <Testimonials
        class="testimonials"
    leftImage="/images/wesele_fot1.jpg"
    primaryButtonText="Aleksandra & Łukasz"
    mainOfferText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    imagePosition="right" 
    />
    </div>

    <div   data-aos="fade-left"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
    <Testimonials
        class="testimonials"
    leftImage="/images/wesele_fot1.jpg"
    primaryButtonText="Aleksandra & Łukasz"
    mainOfferText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    imagePosition="left" 
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
