<script setup>
import { useHead } from '#imports'
import Slogan from '~/components/Slogan.vue';
import { ref, computed, onMounted } from 'vue';
import PolecamyBlok from '~/components/PolecamyBlok.vue';
import Footer from '~/components/footer.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios';

// Get API base URL from runtime config
const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl;

// State variables
const categories = ref([]);
const selectedCategory = ref(null);
const recommendations = ref([]);
const loading = ref(true);
const error = ref(null);

// Fetch recommendations and categories data
onMounted(async () => {
  try {
    // Fetch all categories
    const categoriesResponse = await axios.get(`${apiBaseUrl}/recommendations/categories`);
    categories.value = categoriesResponse.data;
    
    // Fetch all recommendations
    const recommendationsResponse = await axios.get(`${apiBaseUrl}/recommendations`);
    recommendations.value = recommendationsResponse.data.data;
    
    loading.value = false;
    
    // Initialize AOS after data is loaded
    initAOS();
  } catch (err) {
    console.error('Error fetching data:', err);
    error.value = 'Failed to load recommendations. Please try again later.';
    loading.value = false;
  }
});

// Initialize AOS animation
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

// Filter recommendations by category
const filteredRecommendations = computed(() => {
  return selectedCategory.value
    ? recommendations.value.filter(item => item.category === selectedCategory.value)
    : recommendations.value;
});

// Group recommendations by category
const categoriesWithItems = computed(() => {
  const filtered = filteredRecommendations.value;
  const unique = [...new Set(filtered.map(item => item.category))];
  return unique.map(name => ({ name, items: filtered.filter(i => i.category === name) }));
});

useHead({
  title: 'Polecamy - Salem Wedding',
  meta: [
    { name: 'description', content: 'Polecamy sprawdzone marki i usługi weselne: fotobudki, DJ-ów, dekoracje i atrakcje dla niezapomnianego dnia.' },
    { property: 'og:title', content: 'Polecamy - Salem Wedding' },
    { property: 'og:description', content: 'Polecamy sprawdzone marki i usługi weselne: fotobudki, DJ-ów, dekoracje i atrakcje dla niezapomnianego dnia.' }
  ]
})

// Function to get full image URL
const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${config.public.backendUrl}/storage/${path}`;
}
</script>

<template>
  <div class="container">
    <div data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out">
      <Slogan
        greeting="Polecamy"
        teamTitle="Profesjonalistów"
        rightText="Polecamy najlepsze marki i usługi weselne – od fotobudek czy DJ-ów, po dekoracje i atrakcje. Zaufaj naszym rekomendacjom, by uczynić swój dzień niezapomnianym."
      />
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-3">Ładowanie polecanych profesjonalistów...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>

    <!-- Content when loaded -->
    <div v-else>
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
      <div class="line-break"><hr /></div>

      <!-- Display PolecamyBlok components grouped by category -->
      <div
        v-for="group in categoriesWithItems"
        :key="group.name"
        class="category-section pt-4"
      >
        <h1 class="category-title">{{ group.name }}</h1>
        <div v-for="item in group.items" :key="item.id">
          <PolecamyBlok
            :leftImage="getImageUrl(item.left_image)"
            :logoImage="getImageUrl(item.logo_image)"
            :primaryButtonText="item.primary_button_text"
            :mainOfferText="item.main_offer_text"
            :ctaButtonText="item.cta_button_text"
            :websiteUrl="item.website_url"
            :instagramUrl="item.instagram_url"
            :youtubeUrl="item.youtube_url"
            :facebookUrl="item.facebook_url"
          />
        </div>
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
.categories {
  display: flex;
  flex-wrap: wrap; /* Pozwala elementom zawijać się */
  gap: 10px;
  margin-bottom: 40px;
  margin-top: 70px;
  justify-content: center;
  padding: 0 15px; /* Dodaje padding po bokach */
}

/* Media query dla urządzeń mobilnych */
@media screen and (max-width: 768px) {
  .categories {
    gap: 8px; /* Mniejsze odstępy na małych ekranach */
  }
  
  .categories button {
    padding: 5px 10px;
    margin-bottom: 10px; /* Margines na dole każdego przycisku */
    font-size: 0.9rem;
  }
  
  .categories button.active::after {
    top: -20px; /* Dostosowanie pozycji ozdobnika */
    width: 40px;
    height: 40px;
  }
  
  .category-title {
    font-size: 4rem; /* Mniejszy tytuł kategorii na mobilnych */
  }
}

/* Dla bardzo małych ekranów */
@media screen and (max-width: 480px) {
  .categories {
    gap: 5px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  
  .categories button {
    padding: 4px 8px;
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
  
  .categories button.active::after {
    top: -15px;
    width: 30px;
    height: 30px;
  }
  
  .category-title {
    font-size: 3.5rem;
    margin: 30px 0 20px;
  }
}
</style>