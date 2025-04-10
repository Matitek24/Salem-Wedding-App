<template>
    <div class="preloader" v-if="isVisible" :class="{ 'fade-out': !isLoading }">
      <div class="spinner" :style="{ borderTopColor: 'var(--color-first)' }"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const props = defineProps({
    minDuration: {
      type: Number,
      default: 800
    },
    fadeOutDuration: {
      type: Number,
      default: 500
    }
  });
  
  const isLoading = ref(true);
  const isVisible = ref(true);
  const startTime = ref(Date.now());
  
  onMounted(() => {
    // Nasłuchiwanie na załadowanie całej strony
    window.onload = () => {
      const loadTime = Date.now() - startTime.value;
      const remainingTime = Math.max(0, props.minDuration - loadTime);
      
      // Zapewnia minimalny czas wyświetlania preloadera
      setTimeout(() => {
        isLoading.value = false;
        
        // Czas potrzebny na animację fade-out
        setTimeout(() => {
          isVisible.value = false;
        }, props.fadeOutDuration);
      }, remainingTime);
    };
    
    // Dodatkowe zabezpieczenie na wypadek, gdyby event onload nie został wywołany
    setTimeout(() => {
      if (isLoading.value) {
        isLoading.value = false;
        setTimeout(() => {
          isVisible.value = false;
        }, props.fadeOutDuration);
      }
    }, 1000); // Maksymalny czas oczekiwania (5 sekund)
  });
  </script>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 1;
    transition: opacity v-bind('props.fadeOutDuration + "ms"') ease;
  }
  
  .preloader.fade-out {
    opacity: 0;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: var(--color-first);
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>