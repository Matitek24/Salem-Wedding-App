<script setup lang="ts">
import { useHead } from '#imports'
import Footer from '~/components/footer.vue'
import Slogan from '~/components/Slogan.vue'
import KaruzelaPromo from '~/components/KaruzelaPromo.vue'
import Odnosnik from '~/components/Odnosnik.vue'

// --- SEO: zoptymalizowany head dla strony wideo ---
useHead({
  title: 'Film - Salem Wedding',
  link: [
    { rel: 'canonical', href: 'https://salemtest2.you2.pl/film' }
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // podstawowy opis
    { name: 'description', content: 'Poznaj historie par, które nam zaufały.' },

    // Open Graph
    { property: 'og:type', content: 'video.other' },
    { property: 'og:title', content: 'Film - Salem Wedding' },
    { property: 'og:description', content: 'Poznaj historie par, które nam zaufały.' },
    { property: 'og:url', content: 'https://salemtest2.you2.pl/film' },
    { property: 'og:image', content: 'https://salemtest2.you2.pl/images/video-og.jpg' },

    // Twitter Card with player
    { name: 'twitter:card', content: 'player' },
    { name: 'twitter:title', content: 'Film - Salem Wedding' },
    { name: 'twitter:description', content: 'Poznaj historie par, które nam zaufały.' },
    { name: 'twitter:image', content: 'https://salemtest2.you2.pl/images/video-og.jpg' },
    { name: 'twitter:player', content: 'https://www.youtube.com/embed/dFzZdjoxiOw?autoplay=1&mute=1' },
    { name: 'twitter:player:width', content: '1280' },
    { name: 'twitter:player:height', content: '720' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Film - Salem Wedding",
        "description": "Poznaj historie par, które nam zaufały.",
        "thumbnailUrl": [
          "https://salemtest2.you2.pl/images/video-og.jpg"
        ],
        "uploadDate": "2025-04-01",
        "contentUrl": "https://www.youtube.com/embed/dFzZdjoxiOw",
        "embedUrl": "https://www.youtube.com/embed/dFzZdjoxiOw",
        "publisher": {
          "@type": "Organization",
          "name": "Salem Wedding",
          "logo": {
            "@type": "ImageObject",
            "url": "https://salemtest2.you2.pl/logo.png"
          }
        }
      })
    }
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
      <div
        class="col-lg-4 mb-4"
        v-for="(video, index) in videos"
        :key="index"
      >
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
  <div class="mt-3 pt-3">
    <Slogan
      greeting="Pozostałę"
      teamTitle="Realizacje filmowe"
      teamName=""
      rightText=""
    />
  </div>
  <KaruzelaPromo />

  <div class="line mt-5">
    <hr />
  </div>

  <div class="container">
    <Odnosnik
      leftImage="/images/wesele_fot1.jpg"
      text2=""
      text3="3 kroki do podpisania"
      scriptTitle="Umowa"
       primaryButtonLink="/blog"
      cardText="here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected "
      buttonText="SPRAWDZ NASZEGO BLOGA"
      containerMarginTop="200px"
    />
  </div>

  <Footer />
</template>

<script lang="ts">
export default {
  data() {
    return {
      videos: [
        {
          embedUrl:
            'https://www.youtube.com/embed/dFzZdjoxiOw?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1'
        },
        {
          embedUrl:
            'https://www.youtube.com/embed/dFzZdjoxiOw?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1'
        },
        {
          embedUrl:
            'https://www.youtube.com/embed/dFzZdjoxiOw?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1'
        }
      ]
    }
  }
}
</script>

<style scoped>
.line {
  position: absolute;
  height: 10px;
  width: 100%;
  left: 0;
  margin-top: -20px;
}
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin-top: 5rem;
  overflow: hidden;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-caption {
  text-transform: uppercase;
  font-family: var(--font-primary);
  color: var(--color-first);
  font-size: 2rem;
  margin: 0;
  padding-top: 10px;
}
</style>
