<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRuntimeConfig } from '#app';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

// Konfiguracja API
const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || "http://127.0.0.1:8000";
const banners = ref([]);
const route = useRoute();

// Filtrujemy banery dla aktualnej strony i sortujemy według kolejności
const currentBanners = computed(() => {
  const filtered = banners.value
    .filter(banner => banner.page === route.name)
    .sort((a, b) => a.sort_order - b.sort_order);
    
  return filtered.length > 0 ? filtered : banners.value.length > 0 ? [banners.value[0]] : [];
});

// Ukrywanie banera na stronach stories
const shouldShowBanner = computed(() => {
  return !(
    route.name === 'wedding-stories-id' ||
    (route.name === 'wedding-stories' && route.params.id) ||
    route.name === 'blog-id' ||
    (route.name === 'blog' && route.params.id)
  );
});


// Pobieranie banerów z API
const fetchBanners = async () => {
  try {
    const response = await $fetch(`${apiUrl}/api/banners`);
    banners.value = response.map(banner => ({
      ...banner,
      image_url: banner.image_url.startsWith('http')
        ? banner.image_url
        : `${apiUrl}/${banner.image_url.replace(/^\/+/, '')}`
    }));
  } catch (error) {
    console.error('Błąd pobierania banerów:', error);
  }
};

// Pobranie banerów przy montowaniu komponentu
onMounted(fetchBanners);
</script>

<template>
  <div v-if="shouldShowBanner && currentBanners.length" class="banner">
    <template v-if="currentBanners.length > 1">
      <Carousel
        :autoplay="5000"
        :pauseAutoplayOnHover="true"
        :mouse-drag="true"
        :touch-drag="true"
        :wrap-around="true"
        :transition="700"
        class="banner-carousel"
      >
        <Slide v-for="(banner, index) in currentBanners" :key="index">
          <img :src="banner.image_url" :alt="banner.page" class="banner-image" />
        </Slide>
        <!-- Dodajemy nawigację i paginację jako komponenty -->
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </template>
    <!-- Jeśli jest tylko jeden obrazek -->
    <template v-else>
      <img :src="currentBanners[0].image_url" :alt="currentBanners[0].page" class="banner-image" />
    </template>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: #000;
  margin: 0;
  padding: 0;
}

.banner-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.banner-carousel {
  width: 100%;
  height: 100%;
}
/* Nawigajca  */
:deep(.carousel__prev),
:deep(.carousel__next) {
  width: 40px; /* Powiększenie strzałek */
  height: 40px;
  background-color: rgba(0, 0, 0, 0); /* Ciemne tło */
  color: rgba(255, 255, 255, 0.465); /* Kolor strzałki */
  border-radius: 50%; /* Okrągły kształt */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}
:deep(.carousel__next){
  margin-right:30px;
}
:deep(.carousel__prev){
  margin-left:30px;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: rgba(255, 255, 255, 0);
  color: rgba(218, 218, 218, 0.985); /* Zmiana koloru na hover */
}
:deep(.carousel__pagination) {
  bottom: 40px; /* Pozycja kropek */
}

:deep(.carousel__pagination-button) {
  width: 8px; /* Powiększenie kropek */
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5); /* Jasne kropki */
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.3s;
}

:deep(.carousel__pagination-button--active) {
  background-color: rgba(255, 255, 255, 0.75); /* Aktywna kropka */
  transform: scale(1.3); /* Powiększenie aktywnej kropki */
}


</style>