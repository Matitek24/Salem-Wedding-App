<template>
  <div class="container p-0">
    <Slogan
      greeting="Pracujemy"
      teamTitle="na najwyzszych obrotach"
      teamName=""
      rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
    />
    
    <div v-if="loading" class="d-flex justify-content-center my-5">
      <div class="spinner"></div>
    </div>
    
    <div v-else-if="error" class="alert alert-danger mx-4 my-5">
      {{ error }}
    </div>
    
    <div v-else-if="posts.length === 0" class="text-center py-5">
      <p class="text-muted">Brak postów do wyświetlenia.</p>
    </div>
    
    <div v-else>
      <!-- Posty główne w układzie naprzemiennym -->
      <div 
        v-for="(post, index) in mainPosts" 
        :key="`main-${post.id}`" 
        class="featured-post mb-5"
      >
        <div class="row banner-section align-items-center m-0">
          <!-- Image column -->
          <div 
            :class="[
              'col-lg-6 p-0', 'blok',
              index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'
            ]"
          >
            <img 
              v-if="post.image" 
              :src="`${config.public.backendUrl}/storage/${post.image}`"
              :alt="post.title"
              class="img-fluid featured-image"
              :class="index % 2 === 0 ? 'image-left' : 'image-right'"
            />
            <div 
              v-else 
              class="featured-image-placeholder"
              :class="index % 2 === 0 ? 'image-left' : 'image-right'"
            >
              <span>Brak zdjęcia</span>
            </div>
          </div>
          
          <!-- Text column -->
          <div 
            :class="[
              'col-lg-6 d-flex flex-column justify-content-center align-items-center text-center p-4', 
              index % 2 === 0 ? 'order-lg-2 content-right' : 'order-lg-1 content-left'
            ]"
          >
            <div class="offer-text">
              <NuxtLink :to="`/blog/${post.id}`" class="text-decoration-none">
                <button 
                  class="btn custom-button px-4 py-2"
                  :class="index % 2 === 0 ? 'button-right' : 'button-left'"
                >
                  Przeczytaj więcej
                </button>
              </NuxtLink>
              <div class="card p-3 mb-4 bg-white rounded-1">
                <div class="card-body">
                  <h2 class="card-title h3 mb-3 fw-bold">{{ post.title }}</h2>
                  <p class="mb-3 text-start left-border ps-3">
                    {{ truncateText(post.short_description, 200) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Posty nie-główne w układzie grid -->
      <div class="container mt-5 pt-5 pb-5 secondary-posts-section" v-if="secondaryPosts.length > 0">
        <Slogan
      greeting="Artykuły"
      teamTitle="Pozostałe"
      teamName="Pozostałe"
      rightText=""
    />
          <div class="row">
        <div 
          v-for="post in secondaryPosts" 
          :key="`secondary-${post.id}`" 
          class="col-md-6 col-lg-4 mb-4"
        >

            <div class="image-container">
              <!-- Obrazek -->
              <img 
                v-if="post.image" 
                :src="`${config.public.backendUrl}/storage/${post.image}`"
                :alt="post.title"
                class="grid-image" 
              />
              <div 
                v-else 
                class="grid-image-placeholder"
              >
                <span>Brak zdjęcia</span>
              </div>
              
              <!-- Przycisk z tytułem – pozycjonowany absolutnie -->
              <NuxtLink :to="`/blog/${post.id}`" class="text-decoration-none">
                <div class="d-flex justify-content-center">
                  <button class="grid-button new-overlap-btn">
                  {{ post.title }}
                </button>
                </div>
              </NuxtLink>
            </div>

            <div class="d-flex justify-content-center">
              <div class="card-body2 description-container">
              <p class="grid-description">
                {{ truncateText(post.short_description, 200) }}
              <p class="czytaj-wiecej text-end">
                 <NuxtLink :to="`/blog/${post.id}`" class="text-decoration-none">
                  <a style="color: var(--color-first)"> Czytaj więcej</a>
                 </NuxtLink>
              </p>
              </p>
            </div>
          </div>
            

        </div>
      </div>

      </div>
      
      <!-- Paginacja -->
      <div v-if="totalPages > 1" class="pagination-container mb-5">
        <button 
          v-for="page in totalPages" 
          :key="page" 
          @click="changePage(page)" 
          class="pagination-button" 
          :class="currentPage === page ? 'active' : ''"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRuntimeConfig } from 'nuxt/app'
import Footer from '~/components/footer.vue'
import Slogan from '~/components/Slogan.vue'

const config = useRuntimeConfig()
const posts = ref([])
const loading = ref(true)
const error = ref(null)
const currentPage = ref(1)
const totalPages = ref(0)

// Obliczanie głównych i pozostałych postów
const mainPosts = computed(() => {
  return posts.value.filter(post => post.is_main)
})

const secondaryPosts = computed(() => {
  return posts.value.filter(post => !post.is_main)
})

const fetchPosts = async (page = 1) => {
  loading.value = true
  error.value = null
  
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/blog?page=${page}`)
    posts.value = response.data.data
    
    if (response.data.meta) {
      currentPage.value = response.data.meta.current_page
      totalPages.value = response.data.meta.last_page
    }
  } catch (err) {
    console.error('Błąd podczas pobierania postów:', err)
    error.value = 'Nie udało się załadować postów. Spróbuj ponownie później.'
  } finally {
    loading.value = false
  }
}

const changePage = (page) => {
  window.scrollTo(0, 0)
  fetchPosts(page)
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('pl-PL', options)
}

const truncateText = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.substring(0, length) + '...' : text
}

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.artykul-guzik{
  background-color: aqua;
}
.card-title{
  font-family: 'Zodiak';
  font-weight: 600;
  font-size: 2rem;
}

.section-title {
  font-family: 'Zodiak';
  font-weight: 600;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  position: relative;
}

.section-title:after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #b99879;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.blog-header {
  background-color: #f8f9fa;
  margin-bottom: 2rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(185, 152, 121, 0.2);
  border-radius: 50%;
  border-top-color: #b99879;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Featured post styling */
.featured-post {
  margin-top: 3rem;
  overflow: hidden;
  position: relative;
}

/* Image positioning styles */
.image-left {
  margin: 40px;
  position: relative;
  left: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.image-right {
  margin: 40px;
  position: relative;
  right: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.featured-image, .featured-image-placeholder {
  height: 400px;
  object-fit: cover;
}

.featured-image-placeholder {
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
}

/* Content positioning styles */
.content-right {
  position: relative;
  right: 100px;
  margin-bottom: 3rem;
}

.content-left {
  position: relative;
  left: 120px;
  margin-bottom: 3rem;
}

.card {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: none;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.card-body {
  padding: 1.5rem;
}
.card-body2 {
  padding: 1.5rem;
  width: 70%;
  top:-30px;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}
.left-border {
  border-left: 1px solid #b99879;
}

.offer-text {
  max-width: 450px;
  font-size: 0.9rem;
  color: black;
  font-family: 'Zodiak';
}

/* Button positioning styles */
.button-right {
  background-color: #b99879;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 15px !important;
  transition: all 0.3s ease;
  position: relative;
  top: 15px;
  z-index: 1;
  right: -120px;
  text-transform: uppercase;
  font-weight: 500;
}

.button-left {
  background-color: #b99879;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 15px !important;
  transition: all 0.3s ease;
  position: relative;
  top: 15px;
  z-index: 1;
  left: -120px;
  text-transform: uppercase;
  font-weight: 500;
}

.custom-button:hover {
  background-color: #a68669;
  color: white;
  transform: translateY(-3px);
}

/* Sekcja postów-grid */
.secondary-posts-section {
  border-top: 1px solid #eaeaea;
}

/* Stylowanie komponentów grid */
.grid-post-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
}

.grid-image-container {
  height: 220px;
  overflow: hidden;
  position: relative;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  z-index: -1;
}

.grid-post-card:hover .grid-image {
  transform: scale(1.05);
}

.grid-image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
}

.grid-button {
  background-color: var(--color-first);
  color: white;
  border: none;
  border-radius: 0;
  position: relative;
  top:-20px;
  z-index: 10;
  width: 80%;
  text-transform: uppercase;
  font-family: 'Zodiak';
  font-size: 0.9rem;
  padding: 12px !important;
  transition: all 0.3s ease;
}

.grid-button:hover {
  background-color: #a68669;
  color: white;
}

.grid-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
  margin-top: 0.5rem;
  font-family: 'Zodiak';
}

/* Pagination */
.pagination-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 3rem;
}

.pagination-button {
  min-width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-button:hover {
  border-color: #b99879;
  color: #b99879;
}

.pagination-button.active {
  background-color: #b99879;
  border-color: #b99879;
  color: white;
}

@media (max-width: 1200px) {
  .image-left, .image-right {
    left: 0;
    right: 0;
    margin: 20px;
  }
  
  .content-right, .content-left {
    right: 0;
    left: 0;
  }
  
  .button-right, .button-left {
    right: 0;
    left: 0;
  }
}

@media (max-width: 992px) {
  .featured-post {
    margin-top: 0;
  }
  
  .image-left, .image-right {
    margin: 20px;
    height: 300px;
  }
  
  .featured-image, .featured-image-placeholder {
    height: 300px;
  }
  
  .blok {
    display: flex;
    justify-content: center;
  }
  
  .grid-image-container {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .featured-image, .featured-image-placeholder {
    height: 250px;
    margin: 10px;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .grid-image-container {
    height: 200px;
  }
}

@media (max-width: 576px) {
  .grid-image-container {
    height: 180px;
  }
}
</style>