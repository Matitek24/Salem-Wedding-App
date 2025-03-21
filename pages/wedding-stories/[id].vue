<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRuntimeConfig } from '#app';

const route = useRoute();
const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000';
const weddingStory = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchWeddingStory = async () => {
  loading.value = true;
  try {
    // Pobieramy szczegółowe dane historii na podstawie id z route params
    const data = await $fetch(`${apiUrl}/api/wedding-stories/${route.params.id}`);
    weddingStory.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchWeddingStory();
});
</script>

<template>
  <div class="wedding-story-detail" style="margin-bottom:100px;">
    <!-- Loading and error states -->
    <div v-if="loading" class="d-flex justify-content-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Ładowanie...</span>
      </div>
    </div>
    
    <div v-if="error" class="alert alert-danger my-4" role="alert">
      <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ error }}
    </div>

    <!-- Main content -->
    <div v-if="!loading && !error && weddingStory" class="wedding-content">
      <!-- Hero section with image and couple name -->
      <div class="hero-section position-relative mb-5">
        <img :src="weddingStory.thumbnail" alt="Zdjęcie pary młodej" class="img-fluid hero-image w-100">
        <div class="couple-overlay d-flex align-items-end">
          <div class="container">
            <h1 class="display-4 text-white mb-3 couple-title">{{ weddingStory.couple_names }}</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <!-- Description section -->
          <div class="col-lg-8 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h2 class="h4 mb-3 border-bottom pb-2">Historia ślubu</h2>
                <p class="lead">{{ weddingStory.description }}</p>
                
                <div v-if="weddingStory.additional_text" class="additional-text mt-4 p-3 bg-light rounded">
                  <p>{{ weddingStory.additional_text }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Sidebar with links -->
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-primary text-white">
                <h2 class="h5 mb-0">Materiały do obejrzenia</h2>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li v-if="weddingStory.youtube_link" class="list-group-item d-flex align-items-center">
                    <i class="bi bi-film me-2 text-danger fs-4"></i>
                    <div>
                      <strong>Film ze ślubu</strong>
                      <a :href="weddingStory.youtube_link" target="_blank" class="d-block text-decoration-none">
                        Obejrzyj film <i class="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </li>
                  
                  <li v-if="weddingStory.promo_link" class="list-group-item d-flex align-items-center">
                    <i class="bi bi-youtube me-2 text-danger fs-4"></i>
                    <div>
                      <strong>Promo na YouTube</strong>
                      <a :href="weddingStory.promo_link" target="_blank" class="d-block text-decoration-none">
                        Zobacz promo <i class="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </li>
                  
                  <li v-if="weddingStory.gallery_link" class="list-group-item d-flex align-items-center">
                    <i class="bi bi-images me-2 text-primary fs-4"></i>
                    <div>
                      <strong>Galeria zdjęć</strong>
                      <a :href="weddingStory.gallery_link" target="_blank" class="d-block text-decoration-none">
                        Przeglądaj galerię <i class="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </li>
                  
                  <li v-if="weddingStory.extra_gallery_link" class="list-group-item d-flex align-items-center">
                    <i class="bi bi-images me-2 text-success fs-4"></i>
                    <div>
                      <strong>Dodatkowa galeria</strong>
                      <a :href="weddingStory.extra_gallery_link" target="_blank" class="d-block text-decoration-none">
                        Zobacz więcej zdjęć <i class="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  height: 60vh;
  min-height: 300px;
  max-height: 500px;
  overflow: hidden;
}

.hero-image {
  object-fit: cover;
  height: 100%;
  filter: brightness(0.8);
}

.couple-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  padding: 2rem 0;
}

.couple-title {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.additional-text {
  border-left: 4px solid #0d6efd;
}

@media (max-width: 768px) {
  .hero-section {
    height: 40vh;
  }
  
  .couple-title {
    font-size: 1.8rem;
  }
}
</style>