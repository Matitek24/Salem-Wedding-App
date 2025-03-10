<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#app'; // W Nuxt 3

// Pobieramy konfigurację API (adres backendu)
const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000';

const weddingStories = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchWeddingStories = async () => {
  loading.value = true;
  try {
    // Pobieramy wszystkie historie z API
    const data = await $fetch(`${apiUrl}/api/wedding-stories`);
    weddingStories.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchWeddingStories();
});
</script>

<template>
    <div class="container wedding-stories">
      <h2 class="text-center my-4">Historie Ślubne</h2>
  
      <div v-if="loading" class="text-center">Ładowanie danych...</div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
  
      <div v-if="!loading && !error && weddingStories.length" class="row">
        <div
          v-for="story in weddingStories"
          :key="story.id"
          class="col-lg-3 col-md-6 col-sm-12 mb-4"
        >
          <router-link :to="`/wedding-stories/${story.id}`" class="card wedding-story-card">
            <!-- Miniatura -->
            <img :src="story.thumbnail" alt="Miniatura" class="card-img-top story-thumbnail" />
  
            <div class="card-body text-center">
              <h5 class="card-title">{{ story.couple_names }}</h5>
              <hr />
              <p class="card-text">{{ story.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
  
      <div v-else-if="!loading && !error" class="text-center">
        <p>Brak historii do wyświetlenia.</p>
      </div>
    </div>
  </template>

<style scoped>
.wedding-stories {
  padding: 20px;
}

.wedding-story-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  transition: 0.6s;
}
.wedding-story-card:hover {
  transform: scale(1.05);
}
.story-thumbnail {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 12px;
}
</style>
