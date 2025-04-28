<script setup>
import { useHead } from '#imports'
import { onMounted } from 'vue'
import PhotographyLayout from '~/components/Main_Page/PhotographyLayoutMain.vue'
import VideoLayoutMain from '~/components/Main_Page/VideoLayoutMain.vue'
import Banner from '~/components/PhotoBaner.vue'
import GalleryGrid from '~/components/Main_Page/PhotoNavigation.vue'
import Footer from '~/components/footer.vue'
// plugins/aos.client.js
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
  title: 'Salem Wedding – Twoja Ślubna Historia',
  link: [
    { rel: 'canonical', href: 'https://salemtest2.you2.pl/' }
  ],
  meta: [
    { name: 'description', content: 'Salem Wedding – fotograf ślubny. Uchwyć swoją wyjątkową historię w najpiękniejszych kadrach.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Salem Wedding – Twoja Ślubna Historia' },
    { property: 'og:description', content: 'Salem Wedding – fotograf ślubny. Uchwyć swoją wyjątkową historię w najpiękniejszych kadrach.' },
    { property: 'og:image', content: 'https://salemtest2.you2.pl/images/SalemWedding.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Salem Wedding – Twoja Ślubna Historia' },
    { name: 'twitter:description', content: 'Salem Wedding – fotograf ślubny. Uchwyć swoją wyjątkową historię w najpiękniejszych kadrach.' },
    { name: 'twitter:image', content: 'https://salemtest2.you2.pl/images/SalemWedding.png' }
  ],
  script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://salemtest2.you2.pl/",
          "name": "Salem Wedding",
          "publisher": {
            "@type": "Organization",
            "name": "Salem Wedding",
            "logo": { "@type": "ImageObject", "url": "https://salemtest2.you2.pl/logo.png" }
          }
        })
      }
    ]
})

const galleryItems = [
  { image: '/images/wesele_fot3.jpg', title: 'PORTFOLIO' },
  { image: '/images/wesele_fot3.jpg', title: 'HISTORIE' },
  { image: '/images/wesele_fot3.jpg', title: 'BLOG' },
  { image: '/images/wesele_fot3.jpg', title: 'OFERTA' },
  { image: '/images/wesele_fot3.jpg', title: 'ONAS' },
  { image: '/images/wesele_fot3.jpg', title: 'KONTAKT' },
]
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-centere align-items-center flex-column tittle" >
       
      <h1>Twoja Ślubna Historia</h1>
      <p>To chwile zamknięte w naszych kadrach</p>
      <hr>
    </div>
    <div data-aos="fade-down"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
      <Slogan
        greeting="Witaj!"
        teamTitle="Jesteśmy ekipę"
        teamName="Salem Wedding"
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
    </div>
  </div>
  
  <div data-aos="fade-left"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
    <PhotographyLayout>
      <template #description>
        <p class="left-border ps-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impedit dicta eaque iusto fuga quidem quod sequi fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore, animi eum consequatur fugit quae labore voluptas laborum facere omnis. In consectetur sit earum esse velit ex asperiores quam. Facere.</p>
      </template>
      <template #mainImage>
        <img src="../public/images/wesele_fot1.jpg" style="width:100%;" alt="Main Image" loading="lazy">
      </template>
    </PhotographyLayout>
  </div>
  
  <div data-aos="fade-right"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
    <VideoLayoutMain>
      <template #description>
        <p class="left-border ps-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impedit dicta eaque iusto fuga quidem quod sequi fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore, animi eum consequatur fugit quae labore voluptas laborum facere omnis. In consectetur sit earum esse velit ex asperiores quam. Facere.</p>
      </template>
      <template #mainImage>
        <img src="../public/images/wesele_fot1.jpg" style="width:100%;" alt="Main Image" loading="lazy">
      </template>
    </VideoLayoutMain>
  </div>
  
  <div>
    <Banner
      image="/images/wesele_fot3.jpg"
      title="Lorem ipsum Lorem ipsum"
      subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    />
  </div>
  
  <div class="container">
    <div data-aos="fade-down"   
        data-aos-duration="500"      
        data-aos-easing="ease-in-out">
      <Slogan
        greeting="Piękna"
        teamTitle="Uroczystoś zaślubin"
        teamName=""
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
    </div>
    
    <div>
      <GalleryGrid :items="galleryItems" />
    </div>
  </div>
  
  <div>
    <Footer />
  </div>
</template>

<style scoped>
.tittle {
  padding: 4rem;
  text-align: center;
}
.tittle h1{
  font-family: 'Zodiak', Times, serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2.1rem;
}
.tittle p{
  font-family: 'Zodiak', Times, serif;
  font-weight: 300;
  letter-spacing: 2px;
  font-size:0.9rem;
  margin-top:-8px;
}
.tittle hr {
  margin-top: 3rem;
  width: 100vw;
  border: 1px solid;
  border-radius: 100px;
  border-color: var(--color-first); /* Użycie zmiennej */
}
</style>