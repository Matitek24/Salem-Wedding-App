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
          <h3 class="image-title mt-2 text-center"><span class="image-title2">{{ item.title }}</span></h3>
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
  .image-title2{
    position: relative;
  }
  .image-title2::before{
  content: "";
  position: absolute;
  top: -3px;
  right: -53px; 
  z-index: 3;
  width: 50px; /* dostosuj rozmiar wg potrzeb */
  height: 50px; /* dostosuj rozmiar wg potrzeb */
  background-image: url(../../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform-origin: bottom right;
  opacity: 1;
}
.image-title2::after{
  content: "";
  position: absolute;
  top: -3px;
  left: -105px; 
  transform: scaleX(-1);
  z-index: 3;
  width: 50px; /* dostosuj rozmiar wg potrzeb */
  height: 50px; /* dostosuj rozmiar wg potrzeb */
  background-image: url(../../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform-origin: bottom right;
  opacity: 1;
}
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
  