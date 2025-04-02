<template>
    <div class="product-card">
      <!-- Kontener na zdjęcie z etykietą Album -->
      <div class="image-container">
        <img :src="imageUrl" alt="Produkt" class="product-image">
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
        default: '100 str. ze zdjęciami'
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
    max-width: 300px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
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
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #a67c52; /* Brązowy kolor */
    color: white;
    padding: 5px 25px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .product-info {
    background-color: white;
    padding: 15px;
    margin-top: -20px;
    text-align: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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
    color: #999;
    margin: 0;
    font-size: 14px;
  }
  
  .current-price {
    font-size: 24px;
    font-weight: bold;
    margin: 5px 0;
    color: #a67c52; /* Brązowy kolor */
  }
  
  .price-info {
    font-size: 12px;
    color: #777;
    margin: 0;
    font-style: italic;
  }
  </style>