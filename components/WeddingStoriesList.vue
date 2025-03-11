<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000';

const weddingStories = ref([]);
const selectedStory = ref(null);
const accessCode = ref('');
const errorMessage = ref('');
const showModal = ref(false);
const router = useRouter();
const publicStories = ref([]);
const privateStories = ref([]);
const searchQuery = ref(''); 

// Pobieranie historii z API
const fetchWeddingStories = async () => {
  try {
    const response = await $fetch(`${apiUrl}/api/wedding-stories`);
    publicStories.value = response.public_stories;
    privateStories.value = response.private_stories;
  } catch (error) {
    console.error('Błąd pobierania historii:', error);
  }
};

// Filtracja historii na podstawie wpisanej frazy
const filteredPublicStories = computed(() => {
  if (!searchQuery.value) return publicStories.value;
  return publicStories.value.filter(story =>
    story.couple_names.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const filteredPrivateStories = computed(() => {
  if (!searchQuery.value) return privateStories.value;
  return privateStories.value.filter(story =>
    story.couple_names.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Pokazanie modala
const openModal = (story) => {
  selectedStory.value = story;
  accessCode.value = '';
  errorMessage.value = '';
  showModal.value = true;
};

// Sprawdzenie kodu dostępu
const checkAccess = async () => {
  if (!selectedStory.value) return;

  try {
    const response = await $fetch(`${apiUrl}/api/wedding-stories/${selectedStory.value.id}/check-access`, {
      method: 'POST',
      body: { access_code: accessCode.value },
    });

    if (response.success) {
      showModal.value = false;
      router.push(`/wedding-stories/${selectedStory.value.id}`);
    } else {
      errorMessage.value = response.message;
    }
  } catch (error) {
    errorMessage.value = 'Wystąpił błąd';
  }
};

// Pobranie danych po zamontowaniu komponentu
fetchWeddingStories();
</script>

<template>
  <div class="container wedding-stories">
    <h2 class="text-center my-4">Historie Ślubne</h2>

    <!-- Pole wyszukiwania -->


    <!-- Publiczne historie -->
    <div v-if="!filteredPublicStories.length" class="text-center">Brak pasujących publicznych historii.</div>
    <div class="row">
      <div v-for="story in filteredPublicStories" :key="story.id" class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="card wedding-story-card" @click="router.push(`/wedding-stories/${story.id}`)">
          <img :src="story.thumbnail" alt="Miniatura" class="card-img-top story-thumbnail" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ story.couple_names }}</h5>
            <hr />
            <p class="card-text">{{ story.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Prywatne historie -->
    <h3 class="text-center mt-4">Prywatne historie</h3>
    
    <div class="d-flex justify-content-center mb-4 mt-4">
        <div class="search-container w-50">
        <input v-model="searchQuery" type="text" placeholder="Wyszukaj parę..." class="form-control" />
        </div>
    </div>

    <div v-if="!filteredPrivateStories.length" class="text-center">Brak pasujących prywatnych historii.</div>
    <div class="row">
      <div v-for="story in filteredPrivateStories" :key="story.id" class="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div class="card wedding-story-card" @click="openModal(story)">
          <img :src="story.thumbnail" alt="Miniatura" class="card-img-top story-thumbnail" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ story.couple_names }}</h5>
            <hr />
            <p class="card-text">{{ story.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal do wpisania kodu -->
    <div v-if="showModal" class="modal-backdrop">
      <div class="modal-content">
        <h3>Podaj kod dostępu</h3>
        <input v-model="accessCode" type="text" placeholder="Wpisz kod" class="form-control" />
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <div class="modal-buttons d-flex justify-content-center p-2">
          <button @click="checkAccess" class="btn btn-success m-2">Wejdź</button>
          <button @click="showModal = false" class="btn btn-secondary m-2">Anuluj</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  margin-bottom: 20px;
  text-align: center;
}

.wedding-story-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.wedding-story-card:hover {
  transform: scale(1.05);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
