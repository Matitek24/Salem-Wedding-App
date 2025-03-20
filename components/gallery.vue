<script setup>
import { ref, computed } from 'vue';
import { useRuntimeConfig } from '#app';
import VueEasyLightbox from 'vue-easy-lightbox';
import MacyGallery from '~/components/MasonryGallery.vue';

const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000';

const images = ref([]);
const categories = ref([]);
const selectedCategory = ref(null);
const errorMessage = ref('');
const searchQuery = ref('');

// Stan dla lightboxa
const visible = ref(false);
const currentIndex = ref(0);

// Pobieranie zdjęć z API
const fetchGallery = async () => {
  try {
    const response = await $fetch(`${apiUrl}/api/gallery`);
    images.value = response.map(img => ({
      ...img,
      image_path: img.image_path.startsWith('http')
        ? img.image_path
        : `${apiUrl}/${img.image_path.replace(/^\/+/, '')}`
    }));
    categories.value = [...new Set(response.map(img => img.category.name))];
  } catch (error) {
    console.error('Błąd pobierania galerii:', error);
    errorMessage.value = 'Nie udało się załadować zdjęć';
  }
};

const filteredImages = computed(() => {
  let filtered = selectedCategory.value
    ? images.value.filter(img => img.category.name === selectedCategory.value)
    : images.value;

  if (searchQuery.value) {
    filtered = filtered.filter(img =>
      img.category.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return filtered;
});

// Lista ścieżek do zdjęć dla lightboxa
const lightboxImages = computed(() => filteredImages.value.map(img => img.image_path));

const openLightbox = (idx) => {
  currentIndex.value = idx;
  visible.value = true;
};

const closeLightbox = () => {
  visible.value = false;
};

fetchGallery();
</script>

<template>
  <div>
    <!-- Filtr kategorii -->
    <div class="categories">
      <button 
        v-for="category in categories" 
        :key="category" 
        @click="selectedCategory = category"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </button>
      <button @click="selectedCategory = null" class="reset">Wszystkie</button>
    </div>

    <!-- Błąd -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <!-- Układ Macy -->
    <client-only>
      <MacyGallery :images="filteredImages" :openLightbox="openLightbox" />
    </client-only>

    <!-- Lightbox -->
    <client-only>
  <VueEasyLightbox
    :visible="visible"
    :imgs="lightboxImages"
    :index="currentIndex"
    :moveDisabled="true"
    :zoomDisabled="true"
    :rotateDisabled="true"
    :dblclickDisabled="true"
    @hide="closeLightbox"
  />
</client-only>

  </div>
</template>

<style scoped>

.categories {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.categories button {
  padding: 8px 12px;
  border: none;
  background: #ddd;
  cursor: pointer;
}

.categories .active {
  background: #555;
  color: white;
}

.error {
  color: red;
  text-align: center;
  margin-bottom: 15px;
}
</style>
