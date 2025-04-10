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
const consentMarketing = ref(false);
const consentRODO = ref(false);

// Dodana referencja dla e-maila
const mail = ref('');

// Funkcja pomocnicza – pobranie bieżącej daty w formacie YYYY-MM-DD
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

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
  // Zawsze zwraca wszystkie publiczne historie
  return publicStories.value;
});

const filteredPrivateStories = computed(() => {
  if (!searchQuery.value) return privateStories.value;
  return privateStories.value.filter(story =>
    story.couple_names.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const openModal = (story) => {
  selectedStory.value = story;
  accessCode.value = '';
  errorMessage.value = '';
  showModal.value = true;
};

const resetModalData = () => {
  showModal.value = false;
  selectedStory.value = null;
  accessCode.value = '';
  errorMessage.value = '';
  consentMarketing.value = false;
  consentRODO.value = false;
};
// Sprawdzenie kodu dostępu z dodatkowym wysłaniem e-maila
const checkAccess = async () => {
  if (!selectedStory.value) return;
  if (!consentMarketing.value || !consentRODO.value) {
    errorMessage.value = 'Musisz zaakceptować wszystkie zgody.';
    return;
  }
  try {
    // Dodana funkcjonalność: wysłanie rekordu z e-mailem do API (domyślne wartości)
    await $fetch(`${apiUrl}/api/submit-form`, {
      method: 'POST',
      body: {
        firstName: 'Historie',
        email: mail.value,
        weddingDate: getCurrentDate(),
        services: 'historie',
        miejscowosc: 'Historie',
      },
    });

    // Obecna logika sprawdzania kodu dostępu
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

fetchWeddingStories();
</script>

<template>
  <div class="container wedding-stories">

    <!-- Publiczne historie -->
    <div v-if="!filteredPublicStories.length" class="text-center">Brak pasujących publicznych historii.</div>
    <div class="row d-flex align-items-stretch justify-content-center pb-5">
      <div v-for="story in filteredPublicStories" :key="story.id" class="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-down"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
        <div class="card wedding-story-card h-100"  @click="router.push(`/wedding-stories/${story.id}`)">
          <img :src="story.thumbnail" alt="Miniatura" class="card-img-top story-thumbnail" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center">{{ story.couple_names }}</h5>
            <div class="d-flex justify-content-center mt-1">
              <img src="../public/images/Icon/ozdobnik black.png" alt="icon" style="width: 50px; transform: scaleX(-1);">
              <img src="../public/images/Icon/ozdobnik black.png" alt="icon" style="width: 50px;">
            </div>
            <p class="card-text">{{ story.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="full-width">
    <!-- Prywatne historie -->
    <div class="row justify-content-center mt-5 mb-5 tytul">
      <img src="../public/images/Icon/ozdobnik black.png" alt="icon" style="width: 100px;">
      <h3 class="text-center mt-3">Znajdz Swoją Historię</h3>
      <p class="text-center"> Wyszkuja Reportaz</p>
    </div>
        
    <div class="d-flex justify-content-center mb-4 mt-4">
        <div class="search-container w-50">
        <input v-model="searchQuery" type="text" placeholder="Wyszukaj parę..." class="form-control" />
        </div>
    </div>

    <div v-if="!filteredPrivateStories.length" class="text-center">Brak pasujących prywatnych historii.</div>
    <div class="row d-flex align-items-stretch priv">
      <div v-for="story in filteredPrivateStories"  :key="story.id" class="col-lg-3 col-md-6 col-sm-12 mb-4" data-aos="fade-down"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
        <div class="card wedding-story-card h-100" @click="openModal(story)">
          <img src="../public/images/Icon/kłódka_white.png" alt="kłódka" class="klodka">
          <img :src="story.thumbnail" alt="Miniatura" class="card-img-top story-thumbnail" />
          <div class="card-body">
            <h5 class="card-title text-center">{{ story.couple_names }}</h5>
           <div class="text-center">
              <img src="../public/images/Icon/ozdobnik black.png" alt="icon" style="width: 50px; transform: scaleX(-1);">
              <img src="../public/images/Icon/ozdobnik black.png" alt="icon" style="width: 50px;">
           </div>
            <p class="card-text text-left">{{ story.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal-backdrop" @click.self="resetModalData">
      <div class="modal-content">
        <div class="modal-header text-center flex-column">
          <img
            v-if="selectedStory"
            :src="selectedStory.thumbnail"
            alt="Miniatura pary"
            class="modal-thumbnail"
          />
          <img src="../public/images/Icon/ozdobnik_brown.png" alt="icon" class="icon">
          <h5 class="modal-title" v-if="selectedStory">
            {{ selectedStory.couple_names }}
          </h5>
        </div>
        <div class="modal-body d-flex flex-column align-items-center">
          <img src="../public/images/Icon/kłódka_brown.png" style="width:20px; margin-top:10px;" alt="klodka">
          <h6>Galeria Prywatna</h6>
          <span>e-mail</span>
          <!-- Zmieniono v-model z "mail" dla pola e-mail -->
          <input
            v-model="mail"
            type="text"
            class="form-control w-50"
          />
          <span>kod</span>
          <input
            v-model="accessCode"
            type="text"
            class="form-control w-50"
          />
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
        <!-- Dodane checkboxy -->
        <div class="modal-checkboxes text-center mb-3">
          <div class="form-check">
            <input 
              class="form-check-input" 
              type="checkbox" 
              id="consentMarketing" 
              v-model="consentMarketing"
            >
            <label class="form-check-label" for="consentMarketing">
              Wyrażam zgodę na otrzymywanie informacji handlowej.
            </label>
          </div>
          <div class="form-check mt-2">
            <input 
              class="form-check-input" 
              type="checkbox" 
              id="consentRODO" 
              v-model="consentRODO"
            >
            <label class="form-check-label" for="consentRODO">
              *Zapoznałem/am się z informacjami o administratorze oraz przetwarzaniu moich danych osobowych i akceptuje regulamin RODO.
            </label>
          </div>
        </div>
        <div class="modal-buttons d-flex justify-content-center p-2">
          <button @click="checkAccess" class="btn btn-success m-2">Wejdź</button>
          <button @click="resetModalData" class="btn btn-secondary m-2">Anuluj</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.icon{
  margin-top: 20px;
  width: 70px !important;
}
.modal-header img{
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  z-index: 4;
}
.modal-body{
  color: var(--color-first);
  z-index: 3;
}
.modal-body input{
  border: 1px solid var(--color-first);
}
.modal-checkboxes{
  margin-left:30px;
  text-align: left !important;
  z-index: 4;
}
.modal-checkboxes input{
  border: 1px solid var(--color-first);
}
.form-check-label{
  color: var(--color-first);
  font-size: 0.7rem;
  padding-left:10px;
  padding-right: 10px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.417);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content::after {
  content: "";
  position: absolute;
  top: -600px;
  right: 150px; 
  z-index: 1;
  width: 700px; /* dostosuj rozmiar wg potrzeb */
  height: 700px; /* dostosuj rozmiar wg potrzeb */
  background-image: url(../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(40deg) scale(-1);
  transform-origin: bottom right;
  opacity: 0.20;
}

.modal-content {
  position: relative;
  background: white;
  overflow: hidden;
  border-radius: 8px;
  text-align: center;
  width: 450px;
  padding-bottom:30px;
}
button{
  z-index: 4;
}
.btn-success{
  background-color: var(--color-first);
  border: none;
}
.btn-success:hover{
  background-color: var(--color-fourth-click);
}
.modal-title{
  padding:0px 20px 5px 20px;
  font-family: "HedvigLettersSerif";
  text-transform: uppercase;
}
.modal-body h6{
  font-family: "HedvigLetteresSerif";
  color: var(--color-first);
  margin:0px 10px 10px 10px;
  letter-spacing: 1px;
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
/* MODAL MODAL UP UP */
.search-container {
  margin-bottom: 20px;
  text-align: center;
}
.tytul h3{
  text-transform: uppercase;
  font-family: "HedvigLettersSerif";
}
.tytul p{
  font-family: 'Zodiak';
  color: var(--color-first);
  font-size: 1.3rem;
  margin-top:-5px;
}

.form-control{
  border: 1px solid rgba(0, 0, 0, 0.26);
  margin-bottom:20px;
}
.klodka{
  position: absolute;
  width: 20px;
  margin:10px;
}

.wedding-story-card {
  cursor: pointer;
  transition: transform 0.2s;
  padding: 40px 18px 20px 18px;
}

hr.full-width {
    position: absolute;
    left: 0;
    width: 100%;
}

.wedding-story-card:hover {
  transform: scale(1.05);
}
.wedding-story-card img{
  border-radius: 6px;
}
.wedding-story-card .card-title{
  margin-top:10px;
  font-family: "HedvigLettersSerif";
  text-transform: uppercase;
  letter-spacing: 2px;
}
.card-body img{
  margin: 12px 6px 15px 6px;
}

</style>
