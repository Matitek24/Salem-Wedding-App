<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRuntimeConfig } from '#app';
import Footer from '~/components/footer.vue';
import ProductCard from '~/components/card.vue';

const route = useRoute();
const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000';
const weddingStory = ref(null);
const loading = ref(false);
const error = ref(null);

useHead({
  title: 'Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})

const fetchWeddingStory = async () => {
  loading.value = true;
  try {
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

// Funkcja do konwersji linku YouTube na osadzony iframe
const getYouTubeEmbedUrl = (url) => {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : '';
};
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
      <!-- Hero section with image -->
      <div class="hero-section position-relative mb-4">
        <img :src="weddingStory.thumbnail" alt="Zdjęcie pary młodej" class="img-fluid hero-image w-100">
      </div>

      <!-- Couple names section - centered on white background -->
      <div class="container">
       <div class="d-flex justify-content-center">
        <img src="../../public/images/SalemWedding.png" alt="logo" style="width:180px">
       </div>
        <div class="row mb-5">
          <div class="col-12 text-center couple-names-section">
            <h1 class="display-4 fw-bold">{{ weddingStory.couple_names || 'Imiona Pary Młodej' }}</h1>
          </div>
        </div>

        <!-- Main description paragraph - centered -->
        <div class="row mb-5">
          <div class="col-12 col-lg-8 mx-auto text-center description">
            <p class="lead">{{ weddingStory.description }}</p>
          </div>
        </div>

        <Slogan
        greeting="Dziękujemy"
        teamTitle="za zaufanie"
      />

        <!-- Image left, additional text right grid section -->
        <div class="row mb-5 justify-content-center">
          <div class="col-lg-7">
  <template v-if="weddingStory.promo_link">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe 
        class="embed-responsive-item w-100" 
        :src="getYouTubeEmbedUrl(weddingStory.promo_link)" 
        frameborder="0" 
        style = "height:400px;"
        allowfullscreen>
      </iframe>
    </div>
  </template>
  <template v-else>
    <img 
      :src="weddingStory.thumbnail" 
      alt="Dodatkowe zdjęcie pary młodej" 
      class="img-fluid rounded shadow-sm w-100">
  </template>
  <p class="text-center m-3 font1"><span class="zwiastun">ZWIASTUN</span></p>
</div>

          <div v-if="weddingStory.additional_text" class="col-lg-5 p-5">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                  <div class="additional-text p-3 bg-light rounded" v-html="weddingStory.additional_text || 'Dodatkowy opis uroczystości i przyjęcia weselnego.'"></div>
              </div>
            </div>
          </div>

        </div>

        <!-- Three squares with links grid section -->
        <div class="row mb-5 mt-5 text-center d-flex justify-content-center">
          <!-- Film ze ślubu -->
          <div v-if="weddingStory.youtube_link" class="col-md-4 mb-4">
            <div class="media-box mx-auto" :class="{ 'locked': weddingStory.is_public }">
              <a 
                :href="!weddingStory.is_public ? weddingStory.youtube_link : '#'" 
                target="_blank" 
                class="btn mt-2"
                :class="{ 'disabled': weddingStory.is_public }"
              >
              <div class="icon-circle mb-3 position-relative">
                <img src="../../public/images/Icon/icon film.png" alt="icon2" style="width:110px;">
                <div v-if="weddingStory.is_public" class="lock-overlay">
                  <img src="../../public/images/Icon/klodka_white.png" alt="Zablokowane" class="lock-icon">
                </div>
              </div>
              <span class="info2">Obejrzyj film <i class="bi bi-box-arrow-up-right ms-1"></i></span>
              </a>
            </div>
          </div>
          
          <!-- Galeria zdjęć (zawsze odblokowana) -->
          <div v-if="weddingStory.gallery_link" class="col-md-4 mb-4">
            <div class="media-box mx-auto">
              <a 
                :href="weddingStory.gallery_link" 
                target="_blank" 
                class="btn mt-2"
              >
              <div class="icon-circle mb-3 position-relative">
                <img src="../../public/images/Icon/icon photo.png" alt="icon2" style="width:110px;">
              </div>
              <span class="info2">Przeglądaj galerię <i class="bi bi-box-arrow-up-right ms-1"></i></span>
              </a>
            </div>
          </div>
          
          <!-- Dodatkowa galeria -->
          <div v-if="weddingStory.extra_gallery_link" class="col-md-4 mb-4">
            <div class="media-box mx-auto" :class="{ 'locked': weddingStory.is_public }">
              <a 
                :href="!weddingStory.is_public ? weddingStory.extra_gallery_link : '#'" 
                target="_blank" 
                class="btn mt-2"
                :class="{ 'disabled': weddingStory.is_public }"
              >
              <div class="icon-circle mb-3 position-relative">
                <img src="../../public/images/Icon/icon photo+.png" alt="icon2" style="width:130px;">
                <div v-if="weddingStory.is_public" class="lock-overlay">
                  <img src="../../public/images/Icon/klodka_white.png" alt="Zablokowane" class="lock-icon">
                </div>
              </div>
              <span class="info2">Zdjecia Dodatkowe <i class="bi bi-box-arrow-up-right ms-1"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
  
     <!-- Sekcja Pamiątek - widoczna tylko dla historii prywatnych -->
      <div v-if="weddingStory && !weddingStory.is_public" class="container">
        <div class="d-flex flex-column justify-content-center text-center">
          <Slogan 
            greeting="Pamiątka?"
            teamTitle=""
          />
          <p style="margin-top:-140px" class="font1 mb-5">
            Specjalnie dla Was w podziękowaniu za zaufanie przygotowaliśmy wyjątkową ofertę
          </p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <ProductCard 
              imageUrl="/images/wesele_fot1.jpg"
              label="ALBUM"
              title="100 str. ze zdjęciami"
              description="welurowa okładka 5 kolorów do wyboru"
              :oldPrice="300"
              :currentPrice="200"
              priceInfo="miska płacy zadruku jelitego i dodatków"
            />
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <ProductCard 
              imageUrl="/images/wesele_fot1.jpg"
              label="ODBITKI"
              title="100 str. ze zdjęciami"
              description="welurowa okładka 5 kolorów do wyboru"
              :oldPrice="300"
              :currentPrice="200"
            />
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <ProductCard 
              imageUrl="/images/wesele_fot1.jpg"
              label="ODBITKI"
              title="100 str. ze zdjęciami"
              description="welurowa okładka 5 kolorów do wyboru"
              :oldPrice="300"
              :currentPrice="200"
            />
          </div>
        </div>
      </div>


    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* Nowe style dla zablokowanych elementów */
.locked {
  opacity: 0.7;
  cursor: not-allowed;
}

.disabled {
  pointer-events: none;
  border: none;
}

.lock-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(59, 59, 59, 0.558);
  border-radius: 10px;
}

.lock-icon {
  width: 50px;
  height: 50px;
  z-index: 10;
}

.info2{
  position: relative;
}
.zwiastun{
  position: relative;
}
.info2::before, .zwiastun::before{
  content: "";
  position: absolute;
  top: -10px;
  right: -60px; 
  z-index: 3;
  width: 60px;
  height: 60px;
  background-image: url(../../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform-origin: bottom right;
  opacity: 1;
}
.info2::after , .zwiastun::after{
  content: "";
  position: absolute;
  top: -10px;
  left: -125px; 
  transform: scaleX(-1);
  z-index: 3;
  width: 60px;
  height: 60px;
  background-image: url(../../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform-origin: bottom right;
  opacity: 1;
}
.media-box{
  text-transform: uppercase;
  font-family: "HedvigLetteresSerif";
  transition: 0.3s ease-in-out;
  margin-top: 8vw;
}
.media-box:hover{
  transform: scale(1.02);
}
.icon-circle{
  background-color: rgb(255, 255, 255);
  border-radius: 10px !important;
  padding: 70px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.166);
}

.card{
  position: relative;
  font-family: 'HedvigLetteresSerif';
  font-size: 1.1rem;
}
.card::after {
  content: "PODCZAS TEGO WESELA WSPÓŁPRACOWALIŚMY";
  font-family: "Zodiak";
  text-align: center;
  padding: 10px;
  color: white;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 290px;
  height: 70px;
  background-color: var(--color-first);
  background-size: contain;
  background-repeat: no-repeat;
}

.additional-text{
  margin-top:30px;
  background-color: white !important;
}
.description p{
  font-family: 'HedvigLetteresSerif';
  font-size: 1rem !important;
  margin-top:-50px;
}
.hero-section {
  height: 60vh;
  min-height: 300px;
  max-height: 500px;
  overflow: hidden;
}
.display-4{
  font-family: "Zodiak";
  font-weight: 100 !important;
}
.hero-image {
  object-fit: cover;
  height: 100%;
}

.couple-names-section {
  padding: 2rem 0;
}

.media-box {
  max-width: 250px;
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.icon-circle i {
  font-size: 2rem;
}

@media (max-width: 768px) {
  .hero-section {
    height: 40vh;
  }
}
</style>
