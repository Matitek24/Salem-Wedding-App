<script setup>
import { useHead } from '#imports'
import WST from '~/components/WeddingStoriesList.vue'
import Footer from '~/components/footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

useHead({
  title: 'Historie weselne – Salem Wedding',
  link: [
    { rel: 'canonical', href: 'https://salemtest2.you2.pl/historie' }
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content:
        'Poznaj historie reportaży weselnych uwiecznione przez Salem Wedding – emocje i chwile, które przetrwają na zawsze.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Historie weselne – Salem Wedding' },
    {
      property: 'og:description',
      content:
        'Poznaj historie reportaży weselnych uwiecznione przez Salem Wedding – emocje i chwile, które przetrwają na zawsze.'
    },
    { property: 'og:url', content: 'https://salemtest2.you2.pl/historie' },
    {
      property: 'og:image',
      content: 'https://salemtest2.you2.pl/images/historie-og.jpg'
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Historie weselne – Salem Wedding' },
    {
      name: 'twitter:description',
      content:
        'Poznaj historie reportaży weselnych uwiecznione przez Salem Wedding – emocje i chwile, które przetrwają na zawsze.'
    },
    {
      name: 'twitter:image',
      content: 'https://salemtest2.you2.pl/images/historie-og.jpg'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Historie weselne – Salem Wedding",
        "description":
          "Poznaj historie reportaży weselnych uwiecznione przez Salem Wedding – emocje i chwile, które przetrwają na zawsze.",
        "url": "https://salemtest2.you2.pl/historie",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Strona główna",
              "item": "https://salemtest2.you2.pl/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Historie",
              "item": "https://salemtest2.you2.pl/historie"
            }
          ]
        }
      })
    }
  ]
})

// --- AOS init ---
onMounted(() => {
  const initAOS = () => {
    setTimeout(() => {
      AOS.init({
        offset: 100,
        delay: 200,
        easing: 'ease-in-out',
        once: true,
        mirror: true
      })
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
  <div class="historie">
    <div
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <Slogan
        greeting="Obejrzyj"
        teamTitle="Pełną historię"
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
