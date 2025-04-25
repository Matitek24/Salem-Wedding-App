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
const isTransitioning = ref(false); // Track transition state

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

// New method to change category with animation
const changeCategory = async (category) => {
  if (selectedCategory.value === category) return;
  
  isTransitioning.value = true;
  
  // Wait for fade-out animation to complete
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Change category
  selectedCategory.value = category;
  
  // Allow fade-in animation to begin
  await new Promise(resolve => setTimeout(resolve, 50));
  
  // End transition state to trigger fade-in
  isTransitioning.value = false;
};

fetchGallery();
</script>

<template>
  <div>
    <!-- Filtr kategorii -->
    <div class="categories position-relative">
      <button 
        v-for="category in categories" 
        :key="category" 
        @click="changeCategory(category)"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </button>
      <button 
        @click="changeCategory(null)" 
        :class="{ active: selectedCategory === null }"
        class="reset"
      >
        Wszystkie
      </button>
      <button>
        <NuxtLink to="/film" style="text-decoration: none; color:var(--color-first)">
          Film
        </NuxtLink>
      </button>
    </div> 
    <div class="line">
      <hr>
    </div>

    <!-- Błąd -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <!-- Gallery container with transition -->
    <transition-group 
      tag="div"
      name="gallery-transition"
      class="gallery-container"
      :class="{ 'is-transitioning': isTransitioning }"
    >
      <!-- Układ Macy -->
      <client-only>
        <MacyGallery 
          :key="selectedCategory" 
          :images="filteredImages" 
          :openLightbox="openLightbox"
          :class="{ 'fade-out': isTransitioning, 'fade-in': !isTransitioning }"
        />
      </client-only>
    </transition-group>

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
.macy-container {
  margin-top: 70px;
}
.line {
  position: absolute;
  height: 10px;
  width: 100%;
  left: 0px;
  margin-top: -40px;
}
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

.error {
  color: red;
  text-align: center;
  margin-bottom: 15px;
}

/* Animation styles */
.gallery-container {
  position: relative;
  min-height: 300px;
}

/* Fade transition for the gallery */
.fade-in {
  animation: fadeIn 0.8s ease forwards;
}

.fade-out {
  animation: fadeOut 0.5s ease forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* Individual item animations */
.gallery-transition-enter-active {
  transition: all 0.8s ease-out;
}

.gallery-transition-leave-active {
  transition: all 0.5s ease-in;
  position: absolute;
}

.gallery-transition-enter-from,
.gallery-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.gallery-transition-move {
  transition: transform 0.8s ease;
}
.categories {
  display: flex;
  flex-wrap: wrap; /* Pozwala elementom zawijać się na nowy wiersz */
  gap: 10px;
  margin-bottom: 40px;
  margin-top: 70px;
  justify-content: center;
  padding: 0 15px; /* Dodaje padding po bokach dla lepszego wyglądu */
}

/* Media query dla mniejszych ekranów */
@media screen and (max-width: 768px) {
  .categories {
    gap: 8px; /* Zmniejsz odstęp między przyciskami */
  }
  
  .categories button {
    padding: 5px 10px;
    margin-bottom: 5px; /* Dodaj margin na dole każdego przycisku */
    font-size: 0.9rem; /* Zmniejsz czcionkę */
  }
  
  .categories button.active::after {
    top: -20px; /* Dostosuj pozycję ozdobnika */
    width: 40px;
    height: 40px;
  }
  
  .line {
    margin-top: -20px; /* Dostosuj pozycję linii */
  }
}

/* Dla jeszcze mniejszych ekranów (telefony) */
@media screen and (max-width: 480px) {
  .categories {
    gap: 5px;
  }
  
  .categories button {
    padding: 4px 8px;
    font-size: 0.8rem;
  }
  
  .categories button.active::after {
    top: -15px;
    width: 30px;
    height: 30px;
  }
}
</style>