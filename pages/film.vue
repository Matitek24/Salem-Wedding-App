<script setup>
import { useHead } from '#imports'
import Footer from '~/components/footer.vue'
import Slogan from '~/components/Slogan.vue'

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
        <Slogan
        greeting="Kadry"
        teamTitle="To wspomnienia"
        teamName="Zapisane na zawsze"
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
    <div class="container-sm my-5">
      <div class="row">
        <div class="col-lg-4 mb-4" v-for="(video, index) in videos" :key="index">
          <div class="video-container">
            <iframe
              :src="video.embedUrl"
              frameborder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p class="video-caption text-center mt-2">ANNA &amp; SEBASTIAN</p>
        </div>
      </div>
    </div>
    <Slogan
        greeting="Pozostałę"
        teamTitle="Realizacje filmowe"
        teamName=""
        rightText=""
      />
  </template>
  
  <script>
  export default {
    data() {
      return {

        videos: [
          {
            embedUrl:
              'https://www.youtube.com/embed/dFzZdjoxiOw?autoplay=1&controls=0&rel=0&loop=1&playlist=dFzZdjoxiOw&mute=1&modestbranding=1&playsinline=1&showinfo=0'
          },
          {
            embedUrl:
              'https://www.youtube.com/embed/dFzZdjoxiOw?autoplay=1&controls=0&rel=0&loop=1&playlist=dFzZdjoxiOw&mute=1&modestbranding=1&playsinline=1&showinfo=0'
          },
          {
            embedUrl:
              'https://www.youtube.com/embed/dFzZdjoxiOw?autoplay=1&controls=0&rel=0&loop=1&playlist=dFzZdjoxiOw&mute=1&modestbranding=1&playsinline=1&showinfo=0'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Zapewnia responsywny odtwarzacz 16:9 */
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* proporcja 16:9 */
    height: 0;
    margin-top:5rem;
    overflow: hidden;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* blokuje interakcje użytkownika */
  }
  
  /* Styl podpisu */
  .video-caption {
    text-transform: uppercase;
    font-family: var(--font-primary);
    color: var(--color-first);
    font-size: 2rem;
    margin: 0;
    padding-top: 10px;
  }
  </style>
  