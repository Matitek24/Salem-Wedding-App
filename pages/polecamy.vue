<script setup>
import { useHead } from '#imports'
import Slogan from '~/components/Slogan.vue';
import { ref, computed } from 'vue';
import PolecamyBlok from '~/components/PolecamyBlok.vue';
import Footer from '~/components/footer.vue';
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
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})

const categories = ref(['Barmani', 'Atrakcje', 'Suknie/DJ']);
const selectedCategory = ref(null);

// Your PolecamyBlok items with category information
const polecamyItems = ref([
  {
    id: 1,
    category: 'Barmani',
    leftImage: "/_nuxt/public/images/wesele_fot1.jpg",
    logoImage: "/_nuxt/public/images/SalemWedding.png",
    primaryButtonText: "Fotograf ślubny",
    mainOfferText: "Zapraszamy do zapoznania się z naszą ofertą fotografa ślubnego. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą.",
    ctaButtonText: "TEL: 555 123 321"
  },
  {
    id: 2,
    category: 'Barmani',
    leftImage: "/_nuxt/public/images/wesele_fot3.jpg",
    logoImage: "/_nuxt/public/images/SalemWedding.png",
    primaryButtonText: "Kamerzysta ślubny",
    mainOfferText: "Zapraszamy do zapoznania się z naszą ofertą kamerzysty ślubnego. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko.",
    ctaButtonText: "TEL: 555 456 789"
  },
  {
    id: 3,
    category: 'Atrakcje',
    leftImage: "/_nuxt/public/images/wesele_fot1.jpg",
    logoImage: "/_nuxt/public/images/SalemWedding.png",
    primaryButtonText: "Fotobudka",
    mainOfferText: "Zapraszamy do zapoznania się z naszą ofertą fotobudki na wesele. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą.",
    ctaButtonText: "TEL: 555 987 654"
  },
  {
    id: 4,
    category: 'Suknie/DJ',
    leftImage: "/_nuxt/public/images/wesele_fot3.jpg",
    logoImage: "/_nuxt/public/images/SalemWedding.png",
    primaryButtonText: "DJ weselny",
    mainOfferText: "Zapraszamy do zapoznania się z naszą ofertą DJ-a na wesele. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą.",
    ctaButtonText: "TEL: 555 111 222"
  }
]);

// Filter items based on selected category
const filteredPolecamyItems = computed(() => {
  return selectedCategory.value
    ? polecamyItems.value.filter(item => item.category === selectedCategory.value)
    : polecamyItems.value;
});

// Create a list of unique categories with items
const categoriesWithItems = computed(() => {
  const filteredItems = filteredPolecamyItems.value;
  const uniqueCategories = [...new Set(filteredItems.map(item => item.category))];
  
  return uniqueCategories.map(category => {
    return {
      name: category,
      items: filteredItems.filter(item => item.category === category)
    };
  });
});
</script>

<template>
  <div class="container">
  <div data-aos="fade-down"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
  <Slogan
      greeting="Polecamy"
      teamTitle="Profesjonalistów"
      rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
    /></div>

    
    <!-- Categories filter -->
    <div class="categories position-relative">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </button>
      <button
        @click="selectedCategory = null"
        :class="{ active: selectedCategory === null }"
        class="reset"
      >
        Profesjonaliści
      </button>
    </div>
    <div class="line-break">
      <hr>
    </div>
    
    <!-- Display PolecamyBlok components grouped by category -->
    <div v-for="categoryGroup in categoriesWithItems" :key="categoryGroup.name" class="category-section pt-4">
      <!-- Category title -->
      <h1 class="category-title">{{ categoryGroup.name }}</h1>
      
      <!-- PolecamyBlok components for this category -->
      <div v-for="item in categoryGroup.items" :key="item.id">
        <PolecamyBlok
          :leftImage="item.leftImage"
          :logoImage="item.logoImage"
          :primaryButtonText="item.primaryButtonText"
          :mainOfferText="item.mainOfferText"
          :ctaButtonText="item.ctaButtonText"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.categories {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  margin-top: 70px;
  justify-content: center;
}

.categories button:hover {
  cursor: pointer;
  color: var(--color-fourth-click);
}

.categories button {
  padding: 0px 12px;
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-family: var(--font-primary);
  color: var(--color-fourth);
  transition: 0.3s ease-in-out;
  position: relative;
}

.categories button.active {
  color: var(--color-fourth-click);
  border-bottom: 2px solid var(--color-fourth-click);
}

.categories button.active::after {
  content: "";
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%) scaleX(-1);
  z-index: 3;
  width: 50px;
  height: 50px;
  background-image: url(../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 1;
}

.line {
  position: absolute;
  height: 10px;
  width: 100%;
  left: 0px;
  margin-top: -40px;
}

.category-section {
  margin-bottom: 60px;
}

.category-title {
  text-align: center;
  color: var(--color-fourth);
  font-family: 'Corinthia';
  font-size: 6rem;
  margin: 50px 0 30px;
  position: relative;
}

.category-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background-color: var(--color-fourth-click);
}
</style>