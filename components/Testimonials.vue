<template>
  <div class="container-fluid p-0 obiekt">
    <div class="row banner-section align-items-center m-0">
      <!-- Image column -->
      <div
        :class="[
          'col-lg-6 p-0',
          imagePosition === 'left' ? 'order-lg-1' : 'order-lg-2'
        ]"
      >
        <!-- NuxtImg zamiast <img> -->
        <NuxtImg
          :src="leftImage"
          :alt="primaryButtonText"
          class="img-fluid w-100"
          :class="imagePosition === 'left' ? 'image-left' : 'image-right'"
          format="webp"          
          loading="lazy" 
          placeholder="blur"     
        />
      </div>

      <!-- Text column -->
      <div
        :class="[
          'col-lg-6 d-flex flex-column justify-content-center align-items-center text-center p-4',
          imagePosition === 'left' ? 'order-lg-2 content-right' : 'order-lg-1 content-left'
        ]"
      >
        <div class="offer-text">
          <button
            class="btn custom-button2 px-4 py-2"
            :class="imagePosition === 'left' ? 'button-right' : 'button-left'"
          >
            {{ primaryButtonText }}
          </button>
          <div class="card p-3 mb-4 bg-white rounded-1">
            <div class="card-body">
              <p class="mb-0 text-start left-border ps-3">
                {{ mainOfferText }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importujemy NuxtImg
import { NuxtImg } from '#components'

const props = defineProps({
  logoImage: {
    type: String,
    default: '/images/SalemWedding.png'
  },
  leftImage: {
    type: String,
    default: '/images/SalemWedding.png'
  },
  primaryButtonText: {
    type: String,
    default: 'Wesele na głowie'
  },
  mainOfferText: {
    type: String,
    default: 'Zapraszamy do zapoznania się z naszą ofertą...'
  },
  ctaButtonText: {
    type: String,
    default: 'TEL: 555 123 321'
  },
  imagePosition: {
    type: String,
    default: 'left',
    validator: (v: string) => ['left', 'right'].includes(v)
  }
})
</script>

<style scoped>

.obiekt {
  /* Zmniejszona odległość między kolejnymi komponentami */
  margin-top: 80px;
}
.card-body {
  padding-left: 30px !important;
  padding: 2rem;
}
.banner-section {
  max-width: 100vw;
  overflow: hidden;
}
.image-left,
.image-right {
  margin: 20px;
  position: relative;
  top: -100px;
}
.image-left {
  left: 50px;
}
.image-right {
  right: 50px;
}
.card {
  box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.122);
  border: none;
}
.offer-text {
  max-width: 600px;
  width: 100%;
  margin-left: 20px;
}
.content-right,
.content-left {
  position: relative;
  top: 50px;
  margin-bottom: 3rem;
  font-size: 0.8rem;
  font-family: 'Zodiak';
}
.content-right {
  right: 70px;
}
.content-left {
  left: 70px;
}
.button-right,
.button-left {
  background-color: #b99879;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 15px !important;
  transition: all 0.3s ease;
  position: relative;
  top: 15px;
  z-index: 1;
  text-transform: uppercase;
  font-family: 'Zodiak';
}
.button-right {
  right: -120px;
}
.button-left {
  left: -120px;
}
.custom-button2:hover {
  background-color: #a68669;
  color: white;
}
@media (max-width: 1200px) {
  .image-left,
  .image-right {
    margin: 20px;
    top: 0;
    left: 0;
    right: 0;
  }
}
@media (max-width: 992px) {
  .image-left,
  .image-right {
    margin: 20px;
    top: 0;
    left: 0;
    right: 0;
  }
  .obiekt {
    margin-top: 40px;
  }
  .content-right,
  .content-left {
    top: -220px;
    right: 0;
    left: 0;
  }
  .button-right,
  .button-left {
    right: 0;
    left: 0;
  }
}
@media (max-width: 768px) {
  .banner-section {
    height: auto;
  }
  .image-left {
    top: -50px;
  }
  .offer-text {
    top: 50px;
    position: relative;
  }
}
</style>
