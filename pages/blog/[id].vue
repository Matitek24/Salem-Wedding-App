<template>
  <div class="blog-detail">
    <!-- Sekcja pobierania pojedynczego posta -->
    <div v-if="loading" class="loader-container">
      <div class="loader"></div>
    </div>

    <div v-else-if="error" class="alert alert-danger mx-4 my-5">
      {{ error }}
    </div>

    <div v-else>
      <!-- Header posta -->
      <div class="post-header" :style="headerStyle">
        <div class="overlay"></div>
        <div class="container">
          <div class="header-content">
            <NuxtLink to="/blogMain" class="back-button">
              <i class="fa fa-arrow-left"></i> Powrót do listy
            </NuxtLink>
            <h1 class="post-title">{{ post.title }}</h1>
          </div>
        </div>
      </div>

      <Slogan
        greeting="Blog"
        teamTitle="Salem Wedding"
        teamName=""
        :rightText="post.short_description"
      />

      <!-- Treść posta -->
      <div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <article class="post-content">
              <!-- Główny obraz posta (jeśli nie jest użyty jako tło) -->
              <div v-if="post.image && !useImageAsHeader" class="post-main-image-container mb-4">
                <img 
                  :src="`${config.public.backendUrl}/storage/${post.image}`" 
                  :alt="post.title"
                  class="post-main-image"
                />
              </div>

              <div class="row">
                <div class="col-md-8" style="padding-right: 130px;">
                  <div class="content" v-html="post.content"></div>
                </div>

                <div class="col-md-4 right-panel ps-5">
                  <p>Dowiedz się więcej</p>
                  <h2>O Nas</h2>
                  <img class="img-fluid custom-img" src="../../public/images/wesele_fot3.jpg" alt="onas">
                  <button class="guzik1">Czytaj o nas</button>
                  <img class="img-fluid custom-img" src="../../public/images/wesele_fot2.jpg" alt="onas">
                  <button class="guzik1">Sprawdz ofertę</button>
                </div>
              </div>
              <!-- Stopka artykułu -->
              <div class="post-footer">
                
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <!-- Dodana sekcja z postami niepublicznymi (drugimi) -->
    <div class="container p-0">
      <div v-if="postsLoading" class="d-flex justify-content-center my-5">
        <div class="spinner"></div>
      </div>

      <div v-else-if="postsError" class="alert alert-danger mx-4 my-5">
        {{ postsError }}
      </div>

      <div v-else-if="posts.length === 0" class="text-center py-5">
        <p class="text-muted">Brak postów do wyświetlenia.</p>
      </div>

      <div v-else>
        <!-- Grid z postami niepublicznymi -->
        <div class="container mt-5 pt-5 pb-5 secondary-posts-section">
          <Slogan
            greeting="Artykuły"
            teamTitle="Pozostałe"
            teamName="Pozostałe"
            rightText=""
          />
          <div class="row">
            <div 
              v-for="sPost in secondaryPosts" 
              :key="`secondary-${sPost.id}`" 
              class="col-md-6 col-lg-4 mb-4"
            >
              <div class="image-container">
                <!-- Obrazek -->
                <img 
                  v-if="sPost.image" 
                  :src="`${config.public.backendUrl}/storage/${sPost.image}`"
                  :alt="sPost.title"
                  class="grid-image" 
                />
                <div 
                  v-else 
                  class="grid-image-placeholder"
                >
                  <span>Brak zdjęcia</span>
                </div>
                <!-- Przycisk z tytułem -->
                <NuxtLink :to="`/blog/${sPost.id}`" class="text-decoration-none">
                  <div class="d-flex justify-content-center">
                    <button class="grid-button new-overlap-btn">
                      {{ sPost.title }}
                    </button>
                  </div>
                </NuxtLink>
              </div>

              <div class="d-flex justify-content-center">
                <div class="card-body2 description-container">
                  <p class="grid-description czytaj-wiecej text-end">
                    {{ truncateText(sPost.short_description, 200) }}
                    <NuxtLink :to="`/blog/${sPost.id}`" class="text-decoration-none">
                      <a style="color: var(--color-first)"> Czytaj więcej</a>
                    </NuxtLink>

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
    <!-- Koniec dodanej sekcji -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useRuntimeConfig } from 'nuxt/app'
import Slogan from '~/components/Slogan.vue'
import Footer from '~/components/footer.vue'

const route = useRoute()
const config = useRuntimeConfig()

/* Logika dla posta szczegółowego */
const post = ref({})
const loading = ref(true)
const error = ref(null)
const useImageAsHeader = ref(true) 

const headerStyle = computed(() => {
  if (post.value.image && useImageAsHeader.value) {
    return {
      backgroundImage: `url(${config.public.backendUrl}/storage/${post.value.image})`
    }
  }
  return {
    backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
  }
})

const fetchPost = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/blog/${route.params.id}`)
    post.value = response.data.data || response.data
  } catch (err) {
    console.error('Błąd podczas pobierania posta:', err)
    error.value = 'Nie udało się załadować posta. Spróbuj ponownie później.'
  } finally {
    loading.value = false
  }
}

/* Logika dla pobierania listy postów (nawigacja) */
const posts = ref([])
const postsLoading = ref(true)
const postsError = ref(null)
const currentPage = ref(1)
const totalPages = ref(0)

const secondaryPosts = computed(() => {
  return posts.value.filter(p => !p.is_main)
})

const fetchPosts = async (page = 1) => {
  postsLoading.value = true
  postsError.value = null
  
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/blog?page=${page}`)
    posts.value = response.data.data
    if (response.data.meta) {
      currentPage.value = response.data.meta.current_page
      totalPages.value = response.data.meta.last_page
    }
  } catch (err) {
    console.error('Błąd podczas pobierania postów:', err)
    postsError.value = 'Nie udało się załadować postów. Spróbuj ponownie później.'
  } finally {
    postsLoading.value = false
  }
}

const changePage = (page) => {
  window.scrollTo(0, 0)
  fetchPosts(page)
}

const truncateText = (text, length) => {
  if (!text) return ''
  return text.length > length ? text.substring(0, length) + '...' : text
}

onMounted(() => {
  fetchPost()
  fetchPosts()
})
</script>

<style scoped>
/* Style dla blog-detail (pierwszy fragment) */
.guzik1 {
  padding: 12px 25px;
  border-radius: 2px;
  background-color: #b99879;
  color: white;
  font-size: 0.9rem;
  font-family: "Zodiak";
  position: relative;
  top: -20px;
  left: -20px;
  border: none;
  transition: 0.3s ease-in-out;
}

.guzik1:hover {
  background-color: #a68669;
  color: white;
  cursor: pointer;
}

.right-panel p {
  font-size: 1.2rem;
  margin-top: 0.8rem;
  text-align: center;
  position: relative;
  bottom: -20px;
  font-family: var(--font-primary);
}

.right-panel h2 {
  font-family: "Corinthia", sans-serif;
  color: var(--color-first);
  font-size: 4rem;
  text-align: center;
}

.blog-detail {
  margin-bottom: 5rem;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

.loader {
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

/* Post header */
.post-header {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: flex-end;
  color: white;
  margin-bottom: 3rem;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
  padding-bottom: 5rem;
  width: 100%;
}

.post-title {
  font-size: 3rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 3px rgba(0,0,0,0.3);
}

.post-meta {
  font-size: 1.1rem;
  opacity: 0.9;
}

.back-button {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.back-button:hover {
  background-color: white;
  color: #333;
}

/* Post content */
.post-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-top: -3rem;
  position: relative;
  z-index: 3;
}

.post-main-image-container {
  margin: -2rem -2rem 2rem -2rem;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.post-main-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.short-description {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 2rem;
  font-weight: 500;
}

.divider {
  height: 1px;
  background-color: #e5e5e5;
  margin: 2rem 0;
}

.content {
  font-size: 1.1rem;
  margin-top:50px;
  line-height: 1.8;
  color: #333;
  font-family: 'Zodiak';
}

.content :deep(h2) {
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #222;
}

.content :deep(h3) {
  font-size: 1.5rem;
  margin-top: 1.8rem;
  margin-bottom: 0.8rem;
  color: #333;
}

.content :deep(ul), .content :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.content :deep(li) {
  margin-bottom: 0.5rem;
}

.content :deep(p) {
  margin-bottom: 1.5rem;
}

.content :deep(blockquote) {
  border-left: 4px solid #b99879;
  padding-left: 1rem;
  font-style: italic;
  color: #555;
  margin: 2rem 0;
}

.post-footer {
  padding-top: 1rem;
}

.back-link {
  color: #b99879;
  text-decoration: none;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: #a68669;
  text-decoration: underline;
}

@media (max-width: 992px) {
  .post-title {
    font-size: 2.5rem;
  }
  
  .post-header {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .post-title {
    font-size: 2rem;
  }
  
  .post-header {
    height: 300px;
  }
  
  .header-content {
    padding-bottom: 3rem;
  }
  
  .post-content {
    padding: 1.5rem;
  }
  
  .short-description {
    font-size: 1.1rem;
  }
}

/* Style dla sekcji z postami (fragment z drugiego kodu) */
.artykul-guzik {
  background-color: aqua;
}

.card-title {
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
  top: -30px;
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
  top: -20px;
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
