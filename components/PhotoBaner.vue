<template>
    <div class="banner" :style="{ backgroundImage: `url(${image})` }">
      <div class="banner-content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "Tytuł bannera"
    },

    subtitle: {
      type: String,
      default: "Tutaj możesz umieścić dodatkowy opis lub informację."
    }
  });
  </script>
  
  <style scoped>
  .banner {
    position: relative;
    height: 60vh;
    max-width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    margin-bottom:6rem;
    margin-top:6rem;
  }
  .banner-content {
    margin-left: 8rem;
    background-color: rgba(0, 0, 0, 0); /* półprzezroczyste tło dla lepszej czytelności tekstu */
    padding: 0rem;
    border-radius: 4px;
    color: #fff;
    max-width: 40%;
    font-family: 'Zodiak';
  }
  @media (max-width: 1000px) { 
    .banner-content { margin-left: 3rem;}
}
  
  </style>
  