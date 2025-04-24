<template>
  <div class="product-card">
    <!-- Kontener na zdjęcie z etykietami -->
    <div class="image-container">
      <img :src="imageUrl" alt="Produkt" class="product-image">
      <span class="product-label" v-if="label">{{ label }}</span>
    </div>
    <span v-if="showPackageButton && pakiet" class="package-button">{{ pakiet }}</span>
    <!-- Prostokąt z informacjami o produkcie -->
    <div class="product-info" :class="{ 'has-discount': !oldPrice }">
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>
      <p v-if="oldPrice" class="old-price">{{ oldPrice }} zł</p>
      <p class="current-price">{{ currentPrice }} zł</p>
      <div
        v-if="!oldPrice"
        class="discount-overlay"
      >
        <p class="price-original">{{ currentPrice }} zł</p>
        <p class="price-discounted">{{ discountedPrice }} zł</p>
        <p class="discount-text">w pakiecie taniej</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageProductCard',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'ALBUM'
    },
    pakiet: {
      type: String,
      default: ''
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
      default: ''
    },
    currentPrice: {
      type: [Number, String],
      default: 200
    },
    showPackageButton: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    discountedPrice() {
      const price = parseFloat(this.currentPrice)
      if (isNaN(price)) return ''
      return Math.round(price * 0.8)
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
.discount-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 234, 234, 0.423); /* Zwiększona nieprzezroczystość tła */
  backdrop-filter: blur(10px); /* Zwiększony blur dla lepszej widoczności */
  z-index: 15;
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  pointer-events: none;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.product-info.has-discount:hover .discount-overlay {
  opacity: 1;
}

.discount-overlay .price-original {
  text-decoration: line-through;
  font-size: 20px; /* Powiększony rozmiar */
  margin: 2px 0;
  opacity: 0.9; /* Zwiększona widoczność */
  cursor: pointer;
  color: #333;
  font-weight: 500; /* Lekko pogrubiona */
}

.discount-overlay .price-discounted {
  font-size: 60px; /* Jeszcze większy rozmiar dla głównej ceny */
  font-weight: 200;
  margin: 5px 0;
  font-family: 'HedvigLetterSerif';
  color: var(--color-first);
  cursor: pointer;
}

.discount-overlay .discount-text {
  font-size: 16px; /* Lekko powiększony */
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 8px;
  cursor: pointer;
  color: #222; /* Ciemniejszy kolor dla lepszego kontrastu */
  font-weight: 500; /* Lekko pogrubiony */
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
  border-radius: 2px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
}

.package-button {
  position: absolute;
  bottom: 620px;
  z-index: 5;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-first);
  color: white;
  padding: 5px 25px;
  font-size: 18px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
@media (max-width: 1400px) {
  .package-button {
  bottom: 600px;
  font-size: 14px;
} 
}
@media (max-width: 1200px) {
  .package-button {
  bottom: 590px;
  font-size: 12px;
} 
}

.product-info {
  background-color: white;
  max-width: 250px;
  padding: 25px 20px 20px 20px;
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
  text-align: left;
  padding: 10px;
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
  color: var(--color-second);
  font-family: var(--font-primary);
}
</style>