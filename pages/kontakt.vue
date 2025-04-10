<script setup>
import { useHead } from '#imports'
import Formularz from '~/components/Formularz.vue'
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
  title: 'Kontakt - Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})
  </script>

<template>
    <div class="kontakt" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
      <Formularz />
    </div>
    <div class="container-fluid col-12 col-md-8 mapa">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 p-4" data-aos="fade-right"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
              <div class="row justify-content-center mb-4">  <img src="../public/images/Icon/ozdobnik black.png" style="width:110px;" alt="ikona"></div>
                <h3 class="mb-5">JAK DOJECHAĆ?</h3>
                <p>ul. Spacerowa 17</p>
                <p>07-200 Wyszków</p>
                <p>tel. 509 150 763<br>
                tel. 608 681 689</p>
                <p><a href="mailto:biuro@salemstudio.pl">biuro@salemstudio.pl</a></p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Spacerowa+17,+07-200+Wyszk%C3%B3w" 
               class="btn ps-4 pe-4 btn-outline-secondary" target="_blank" rel="noopener">
               Wyznacz trasę
            </a>
            </div>
            
            <div class="col-lg-7 p-4" data-aos="fade-left"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.314063992059!2d21.45068267721996!3d52.59729327229157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f5123456789ab%3A0x123456789abcdef!2sSpacerowa%2017%2C%2007-200%20Wyszk%C3%B3w!5e0!3m2!1spl!2spl!4v1710000000000" 
                    width="100%" 
                    height="600" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
   
    <Footer />
</template>
  
  
  <style scoped>
  img{
    transform: scaleX(-1);
  }
  .mapa a{
    text-decoration: none;
    color: var(--color-fourth);
  }
  .mapa a:hover{
    color: var(--color-fourth-click)
  }
  .mapa{
    position: relative;
    top: -10rem;
    font-family: "HedvigLettersSerif";
    color: var(--color-fourth);
    font-size: 1.2rem;
    letter-spacing: 2px;
  }
  .mapa h3{
    color: var(--color-second);
  }
  .btn{
  background-color: var(--color-fourth);
  border: none;
  color:white !important;
  margin-top:20px;
  }
  .btn:hover{
    background-color: var(--color-fourth-click);
    border: none;
    color:white !important;
  }
  .kontakt {
    padding: 2rem;
    text-align: center;
    position: relative;
    top:-20rem;
  }
  </style>
  