<template>
  <div class="container">
    <div class="row">
      <div class="col-12 carousel-container my-5">
        <Carousel
          :breakpoints="{
            468: { itemsToShow: 1 },
            1200: { itemsToShow: 2},
            1400: { itemsToShow: 3 }
          }"
          :wrapAround="true"
          :autoplay="false"
          :pauseAutoplayOnHover="true"
          :mouseDrag="true"
          class="video-carousel"
        >
          <Slide v-for="(video, index) in videos" :key="index">
            <div class="video-slide">
              <iframe
                :src="`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&loop=0&modestbranding=1&playsinline=1`"
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Slide>
          
          <!-- Nawigacja -->
          <template #addons>
            <div class="custom-navigation">
              <Navigation />
              <Pagination />
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Reactive tablica filmów
const videos = ref([])

// Pobieranie klucza API z runtimeConfig
const config = useRuntimeConfig()
const API_KEY = config.public.ApiKey
const PLAYLIST_ID = 'PLPl3arwTNCWSUeM4qXCJgyaLtZJQ6xw8U'
const MAX_RESULTS = 6

// Funkcja pobierająca filmy z YouTube API
async function fetchPlaylistVideos() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
    )
    const data = await response.json()
    videos.value = data.items.map(item => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title
    }))
  } catch (error) {
    console.error('Error fetching videos:', error)
  }
}

onMounted(() => {
  fetchPlaylistVideos()
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  padding: 0 0px;
}

.video-slide {
  padding: 15px;
}

/* Zwiększona wielkość iframe */
.video-slide iframe {
  width: 135% !important;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Niestandardowa nawigacja */
.custom-navigation {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

/* Styl dla przycisków nawigacji */
:deep(.carousel__prev),
:deep(.carousel__next) {
  position: absolute;
  top: -150px; 
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
}

:deep(.carousel__prev) {
  left: -70px;
}

:deep(.carousel__next) {
  right: -70px;
}

/* Styl dla kropek paginacji */
:deep(.carousel__pagination) {
  margin-top: 20px;
}

:deep(.carousel__pagination-button) {
  background-color: #ddd;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
}

:deep(.carousel__pagination-button--active) {
  background-color: var(--color-first);
  width: 14px;
  height: 14px;
}

@media (max-width: 1400px) {
  .video-slide iframe {
  width: 115%;

}
}

@media (max-width: 1200px) {
  .video-slide iframe {
  width: 130%;
  }
  :deep(.carousel__prev) {
  left: -20px;
}

:deep(.carousel__next) {
  right: -20px;
}
}
@media (min-width: 700px) {
  .video-slide iframe {
  width: 110%;
  }
  .video-slide{
    margin-right: 0px;
  }
}
@media (max-width: 697px){
  .video-slide{
    margin-right: 100px;
  }
}
/* Responsywność dla mniejszych ekranów */
@media (max-width: 768px) {
  .carousel-container {
    padding: 0 30px;
  }
  
  :deep(.carousel__prev),
  :deep(.carousel__next) {
    width: 40px;
    height: 40px;
    top: -150px;
  }
  
  :deep(.carousel__prev) {
    left: -05px;
  }
  
  :deep(.carousel__next) {
    right: -5px;
  }
}

@media (max-width: 576px) {

  :deep(.carousel__prev),
  :deep(.carousel__next) {
    width: 25px;
    height: 25px;
  }
 
}
@media (max-width: 450px) {
  .video-slide iframe{
  width: 150% !important;
}
}

</style>