<template>
    <div class="gallery-grid container">
      <div class="row">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
        >
          <div class="image-wrapper">
            <img :src="item.image" :alt="item.title" class="img-fluid" />
          </div>
          <hr>
          <h3 class="image-title mt-2 text-center">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    items: {
      type: Array,
      default: () => []
    }
  });
  </script>
  
  <style scoped>
  .gallery-grid {
    padding: 1rem;
  }
  .image-wrapper {
    overflow: hidden;
  }
  hr{
    width: 85%;
    border-radius: 40px;
    border: 1.5px var(--color-first) solid;
    margin-left:auto;
    margin-right: auto;
  }
  .image-title {
    font-size: 1.2rem;
    font-family: 'Zodiak', sans-serif;
  }
  </style>
  