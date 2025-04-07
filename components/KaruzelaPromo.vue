<template>
    <div class="carousel-container my-5">
      <Carousel
        :itemsToShow="3"
        :wrapAround="true"
        :autoplay="true"
        :pauseAutoplayOnHover="false"
        :mouseDrag="false"
      >
        <Slide v-for="(video, index) in videos" :key="index">
          <div class="video-container">
            <iframe
              :src="`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=0&rel=0&loop=1&playlist=${video.id}&mute=1&modestbranding=1&playsinline=1`"
              frameborder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p class="video-caption text-center mt-2">{{ video.title }}</p>
        </Slide>
      </Carousel>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  
  const videos = ref([])
  
  // Wstaw tutaj swój klucz API
  const API_KEY = 'YOUR_API_KEY'
  const PLAYLIST_ID = 'PLPl3arwTNCWSUeM4qXCJgyaLtZJQ6xw8U'
  const MAX_RESULTS = 8
  
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
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Zapewnia responsywny odtwarzacz 16:9 */
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* proporcja 16:9 */
    height: 0;
    overflow: hidden;
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* blokuje interakcje użytkownika */
  }
  
  .video-caption {
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    padding-top: 10px;
  }
  </style>
  