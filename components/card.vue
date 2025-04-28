<template>
    <div class="product-card">
      <!-- Kontener na zdjęcie z etykietą Album -->
      <div class="image-container">
       
        <NuxtImg
          :src="imageUrl"
          :alt="title"
          class="product-image"
          format="webp"          
          loading="lazy"   
        />
        <span class="product-label">{{ label }}</span>
      </div>
      
      <!-- Prostokąt z informacjami o produkcie -->
      <div class="product-info">
        <h3 class="product-title">{{ title }}</h3>
        <p class="product-description">{{ description }}</p>
        <p class="old-price">{{ oldPrice }} zł</p>
        <p class="current-price">{{ currentPrice }} zł</p>
        <p class="price-info">{{ priceInfo }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      imageUrl: {
        type: String,
        required: true
      },
      label: {
        type: String,
        default: 'ALBUM'
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: 'welurowa okładka 5 kolorów do wyboru'
      },
      oldPrice: {
        type: [Number, String],
        default: 300
      },
      currentPrice: {
        type: [Number, String],
        default: 200
      },
      priceInfo: {
        type: String,
        default: 'miska płacy zadruku jelitego i dodatków'
      }
    }
  }
  </script>
  
  <style scoped>
  .product-card {
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    font-family: 'Zodiak';
  }
  
  .image-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* Tworzy kwadrat */
    overflow: hidden;
  }
  
  .product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-label {
    position: absolute;
    bottom: 5px;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-first); 
    color: white;
    padding: 5px 25px;
    font-size: 14px;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .product-info {
    background-color: white;
    max-width: 280px;
    padding: 35px 20px 30px 20px;
    margin-top: -20px;
    text-align: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.142);
    position: relative;
    z-index: 2;
  }
  
  .product-title {
    font-size: 16px;
    margin: 0 0 5px 0;
    font-weight: bold;
  }
  
  .product-description {
    font-size: 14px;
    margin: 0 0 10px 0;
    color: #333;
  }
  
  .old-price {
    text-decoration: line-through;
    color: var(--color-first);
    margin: 0;
    font-size: 16px;
    font-family: var(--font-primary);
  }
  
  .current-price {
    font-size: 2.5rem;
    font-weight: 100;
    margin: 5px 0;
    color: var(--color-second); /* Brązowy kolor */
    font-family: var(--font-primary);
  }
  
  .price-info {
    font-size: 12px;
    color: #212121;
    margin: 0;
    font-style: italic;
  }
  </style>