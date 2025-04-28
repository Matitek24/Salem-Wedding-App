<script setup>
import { useHead } from '#imports'
import gallery from '~/components/gallery.vue'
import Slogan from '~/components/Slogan.vue'
import Footer from '~/components/footer.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

useHead({
  title: 'Portfolio – Salem Wedding',
  link: [
    { rel: 'canonical', href: 'https://salemtest2.you2.pl/portfolio' }
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Zobacz portfolio naszego fotografa – wyjątkowe kadry pełne emocji uwiecznione przez Salem Wedding.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Portfolio Fotograf – Salem Wedding' },
    { property: 'og:description', content: 'Zobacz portfolio naszego fotografa – wyjątkowe kadry pełne emocji uwiecznione przez Salem Wedding.' },
    { property: 'og:url', content: 'https://salemtest2.you2.pl/portfolio' },
    { property: 'og:image', content: 'https://salemtest2.you2.pl/images/portfolio-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Portfolio Fotograf – Salem Wedding' },
    { name: 'twitter:description', content: 'Zobacz portfolio naszego fotografa – wyjątkowe kadry pełne emocji uwiecznione przez Salem Wedding.' },
    { name: 'twitter:image', content: 'https://salemtest2.you2.pl/images/portfolio-og.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ImageGallery",                        
        "name": "Portfolio Fotograf – Salem Wedding",
        "description": "Zobacz portfolio naszego fotografa – wyjątkowe kadry pełne emocji uwiecznione przez Salem Wedding.",
        "url": "https://salemtest2.you2.pl/portfolio",
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

// --- AOS init jak wcześniej ---
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
    initAOS();
  } else {
    window.addEventListener('load', initAOS);
  }
});
</script>

<template>
  <div class="mb-3 pt-5">
    <div
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
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
