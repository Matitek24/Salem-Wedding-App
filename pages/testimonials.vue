<script setup>
import { useHead } from '#imports'
import Slogan from '~/components/Slogan.vue';
import { ref, computed } from 'vue';
import Testimonials from '~/components/Testimonials.vue';
import Footer from '~/components/footer.vue';
import Odnosnik from '~/components/Odnosnik.vue';

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
  <div class="container">
   <div class="pt-4 mt-4">
    <Slogan
      greeting="Dziękujem"
      teamTitle="za wasze zaufanie"
      rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
    />
   </div>

    <Testimonials
    leftImage="/_nuxt/public/images/wesele_fot1.jpg"
    primaryButtonText="Aleksandra & Łukasz"
    mainOfferText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    imagePosition="left" 
    />

    <Testimonials
    leftImage="/_nuxt/public/images/wesele_fot1.jpg"
    primaryButtonText="Aleksandra & Łukasz"
    mainOfferText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    imagePosition="right" 
    />

    <Testimonials
    leftImage="/_nuxt/public/images/wesele_fot1.jpg"
    primaryButtonText="Aleksandra & Łukasz"
    mainOfferText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    imagePosition="left" 
    />
    <div class="line mt-5">
          <hr>
    </div>
    <Odnosnik 
        leftImage="/_nuxt/public/images/wesele_fot1.jpg"
      text2="Poznaj"
      text3="par które nam zaufały"
      scriptTitle="historie"
      cardText="here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected "
      buttonText="SPRAWDŹ NASZE HISTROIE"
      containerMarginTop="200px"/>
  </div>
  <Footer />
</template>

<style scoped>
.line {
  position: absolute;
  height: 10px;
  width: 100%;
  left: 0px;
  margin-top: -20px;
}
</style>