<template>
    <div class="content-block container-fluid my-5">
      <div class="row" :class="{ 'flex-row-reverse': position === 'right' }">
        <!-- Image Column -->
        <div class="col-lg-6 image-column">
            <div class="image-container" :class="{
            'image-right': position === 'right',
            'image-left': position === 'left'
            }">

            <img :src="image" :alt="title" class="img-fluid">
          </div>
        </div>
        
        <!-- Text Column -->
        <div class="col-lg-6 d-flex align-items-center">
          <div class="text-container p-4" :class="{ 'text-right': position === 'right', 'text-left': position === 'left' }">
            <h2 class="script-heading mb-2">{{ title }}</h2>
            <p class="subtitle mb-3">{{ subtitle }}</p>
            <p class="description">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    position: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value)
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  });
  </script>
  
  <style scoped>
  .content-block {
    margin: 5rem 0;
    overflow: hidden;
    padding:10px;
  }
  
  .image-container {
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image-container img {
    max-width: 90%;
    height: auto;
    transition: transform 0.5s ease;
  }
  
  
  .text-container {
    max-width: 80%;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    box-shadow: 3px 10px 10px 1px rgba(0, 0, 0, 0.113);
    padding:40px !important;
  }
  
  .script-heading {
    font-family: 'Corinthia', serif;
    color: #b39573;
    font-size: 4.8rem;
    font-weight: 400;
  }
  
  .subtitle {
    font-family: var(--font-primary);
    font-size: 1rem;
    position: relative;
    bottom:30px;
    left:20px;
  }
  
  .description {
    font-family: var(--font-primary);
    font-size: 0.7rem;
    line-height: 1.6;
    padding-left:10px;
    padding-right: 10px;
  }
  
  .text-left {
    position: relative;
    right:120px;
    z-index: -1;
  }
  
  .text-right {
    position: relative;
    left: 130px;
    z-index: -1;
  }
  @media (min-width: 1400px) {
    .text-left {
    position: relative;
    right:150px;
    z-index: -1;
  }
  
  .text-right {
    position: relative;
    left: 150px;
    z-index: -1;
  }
  }

  @media (max-width: 990px) {
    .text-left {
    right:0px;
  }
 
  
  .text-right {
    left: 0px;
  }
  }
  @media (max-width: 767px) {
    .text-container {
      padding: 2rem 1rem;
      max-width: 100%;
      text-align: center;
    }
    
    .image-container {
      margin-bottom: 1.5rem;
    }
      
  }
  </style>