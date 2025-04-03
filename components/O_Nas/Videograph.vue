<template>
    <div class="photographer-section container-fluid py-5">
      <div class="row position-relative">
        <!-- Left image column -->
        <div class="col-lg-3 position-relative">
          <div class="image-container left-image">
            <picture>
              <img :src="photographer.image" alt="Fotograf" class="img-fluid">
            </picture>
          </div>
        </div>
        
        <!-- Center content column -->
        <div class="col-lg-6 position-relative">
          <div class="content-container text-center">
            <h2 class="photographer-name">{{ photographer.name }}</h2>
            <p class="photographer-title">{{ photographer.title }}</p>
            <div class="photographer-description mt-4">
              <p v-for="(paragraph, index) in photographer.description" :key="index">
                {{ paragraph }}
              </p>
            </div>
            <div class="mt-4">
              <button class="view-photos-btn">{{ photographer.buttonText }}</button>
            </div>
          </div>
        </div>
        
        <!-- Right image column -->
        <div class="col-lg-3 position-relative">
          <div class="image-container right-image">
            <picture>
              <source media="(max-width: 990px)" srcset="./../public/images/wesele_fot1.jpg">
              <img :src="photographer.secondaryImage" alt="Fotograf w akcji" class="img-fluid">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    photographer: {
      type: Object,
      default: () => ({
        name: 'Paweł',
        title: 'Fotograf',
        description: [
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet...", comes from a line in section 1.10.32'
        ],
        buttonText: 'OBEJRZYJ ZDJĘCIA'
      })
    }
  });
  </script>
  
  <style scoped>
  .photographer-section {
    overflow: hidden;
    padding: 4rem 0;
    margin-top: 10rem;
    margin-left: 3rem;
  }
  
  .image-container {
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .left-image {
    position: relative;
    z-index: 3;
    right: -15%;
  }
  
  .right-image {
    position: relative;
    z-index: -1;
    left: -23%;
    top: 15rem;
    transform: scale(1.3) rotate(5deg);
  }
  
  .content-container {
    background-color: white;
    margin-top: 6rem;
    padding: 2rem;
    position: relative;
    z-index: 1;
    box-shadow: 1px 4px 4px 1px rgba(0, 0, 0, 0.142);
  }
  
  .photographer-name {
    font-family: 'Corinthia';
    color: #b39573;
    font-size: 5.5rem;
    text-align: left;
    font-weight: 100;
    margin-bottom: 0;
    margin-left: 10px;
    line-height: 70px;
  }
  
  .photographer-title {
    font-family: var(--font-primary);
    font-size: 1.2rem;
    text-align: left;
    margin-top: 0rem;
    margin-left: 7rem;
  }
  
  .photographer-description {
    font-size: 0.8rem;
    line-height: 1.6;
    text-align: left;
    padding-left: 1rem;
    border-left: var(--color-fourth) solid 1px;
  }
  
  .view-photos-btn {
    background-color: #b39573;
    font-family: 'Zodiak';
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .view-photos-btn:hover {
    background-color: #a38463;
  }
  
  /* Responsive styles */
  @media (max-width: 990px) {
    .left-image, .right-image {
      right: 0;
      left: 0;
      margin-bottom: 1rem;
      width: 70%;
      margin: auto;
    }
    
    .content-container {
      margin-bottom: 1rem;
    }
    .photographer-section {
      margin-left: 0;
    }
  }
  </style>
  