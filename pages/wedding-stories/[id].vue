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
  <div class="wedding-story-detail">
    <div v-if="loading">Ładowanie szczegółów...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-if="!loading && !error && weddingStory">
      <!-- Miniatura -->
      <img :src="weddingStory.thumbnail" alt="Miniatura" class="detail-thumbnail" style="width:500px;"/>
      <!-- Nazwa pary -->
      <h1>{{ weddingStory.couple_names }}</h1>
      <hr />
      <!-- Opis -->
      <p>{{ weddingStory.description }}</p>
      <!-- Dodatkowe linki -->
      <div v-if="weddingStory.youtube_link">
        <p>
          <strong>YouTube:</strong>
          <a :href="weddingStory.youtube_link" target="_blank">{{ weddingStory.youtube_link }}</a>
        </p>
      </div>
      <div v-if="weddingStory.gallery_link">
        <p>
          <strong>Galeria:</strong>
          <a :href="weddingStory.gallery_link" target="_blank">{{ weddingStory.gallery_link }}</a>
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.wedding-story-detail {
  padding: 20px;
}
.detail-thumbnail {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
}
/* Przykładowe style dla dynamicznej sekcji */
.special-style {
  background-color: #f0e68c;
  padding: 10px;
  border-radius: 4px;
}
.normal-style {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 4px;
}
</style>
