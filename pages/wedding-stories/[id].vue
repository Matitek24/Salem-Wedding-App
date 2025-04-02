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
            <img :src="weddingStory.thumbnail" alt="Dodatkowe zdjęcie pary młodej" class="img-fluid rounded shadow-sm w-100">
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
            <div class="media-box mx-auto">
              <a :href="weddingStory.youtube_link" target="_blank" class="btn mt-2">
              <div class="icon-circle mb-3">
                <img src="../../public/images/Icon/icon film.png" alt="icon2" style="width:110px;">
              </div>
              <span class="info2">   Obejrzyj film <i class="bi bi-box-arrow-up-right ms-1"></i> </span>
              </a>
            </div>
          </div>
          
          <!-- Galeria zdjęć -->
          <div v-if="weddingStory.gallery_link" class="col-md-4 mb-4">
            <div class="media-box mx-auto">
              <a :href="weddingStory.gallery_link" target="_blank" class="btn mt-2">
              <div class="icon-circle mb-3">
              <img src="../../public/images/Icon/icon photo.png" alt="icon2" style="width:110px;">
              </div>
              <span class="info2">  Przeglądaj galerię <i class="bi bi-box-arrow-up-right ms-1"></i></span>
              </a>
            </div>
          </div>
          
          <!-- Dodatkowa galeria -->
          <div v-if="weddingStory.extra_gallery_link" class="col-md-4 mb-4">
            <div class="media-box mx-auto">
              <a :href="weddingStory.extra_gallery_link" target="_blank" class="btn mt-2">
              <div class="icon-circle mb-3">
                <img src="../../public/images/Icon/icon photo+.png" alt="icon2" style="width:130px;">
              </div>
              <span class="info2">  Zdjecia Dodatkowe <i class="bi bi-box-arrow-up-right ms-1"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center text-center">
        <Slogan 
         greeting="Pamiątka?"
         teamTitle=""
        />
        <p style="margin-top:-140px" class="font1">Specjalnie dla Was w podziękowaniu za zaufanie przygotowaliśmy wyjątkową ofertę</p>
      </div>
      <div class="container">
        <div class="d-flex justify-content-center">
        <ProductCard 
      imageUrl=""
      label="ALBUM"
      title="100 str. ze zdjęciami"
      description="welurowa okładka 5 kolorów do wyboru"
      :oldPrice="300"
      :currentPrice="200"
      priceInfo="miska płacy zadruku jelitego i dodatków"
    />
    
    <!-- Możesz dodać więcej kart produktów -->
    <ProductCard 
      imageUrl="/images/odbitki.jpg"
      label="ODBITKI"
      title="100 str. ze zdjęciami"
      description="welurowa okładka 5 kolorów do wyboru"
      :oldPrice="300"
      :currentPrice="200"
    />
    <ProductCard 
      imageUrl="/images/odbitki.jpg"
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
  <Footer />
</template>

<style scoped>

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
  width: 60px; /* dostosuj rozmiar wg potrzeb */
  height: 60px; /* dostosuj rozmiar wg potrzeb */
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
  width: 60px; /* dostosuj rozmiar wg potrzeb */
  height: 60px; /* dostosuj rozmiar wg potrzeb */
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
  padding-top: 10px;
  padding-bottom:20px;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 290px; /* dostosuj rozmiar wg potrzeb */
  height: 70px; /* dostosuj rozmiar wg potrzeb */
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