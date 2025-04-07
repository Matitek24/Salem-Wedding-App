<script setup>
const props = defineProps({
  logoImage: {
    type: String,
    default: "../public/images/SalemWedding.png"
  },
  leftImage: {
    type: String,
    default: "../public/images/SalemWedding.png"
  },
  primaryButtonText: {
    type: String,
    default: "Wesele na głowie"
  },
  mainOfferText: {
    type: String,
    default: "Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznani Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się"
  },
  ctaButtonText: {
    type: String,
    default: "TEL: 555 123 321"
  },
  imagePosition: {
    type: String,
    default: "left",
    validator: (value) => ['left', 'right'].includes(value)
  }
});
</script>

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
        <img 
          :src="leftImage" 
          alt="Eleganckie buty" 
          class="img-fluid w-100"
          :class="imagePosition === 'left' ? 'image-left' : 'image-right'"
        >
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

<style scoped>
.obiekt{
    margin-top:200px;
}
.card-body {
  padding-left: 30px !important;
  padding: 2rem;
}

.banner-section {
  max-width: 100vw;
  overflow: hidden;
}

.logo {
  position: relative;
  top: 60px;
  left: 10px;
  z-index: 2;
}

.logo img {
  background-color: rgb(255, 255, 255);
  padding: 5px;
  box-shadow: 4px 6px 6px 4px rgba(0, 0, 0, 0.079);
}

/* Image positioning styles */
.image-left {
  margin: 40px;
  position: relative;
  left: 100px;
  top: -100px;
  display: flex;
}

.image-right {
  margin: 40px;
  position: relative;
  right: 100px;
  top: -100px;
  display: flex;
}

.card {
  box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.122);
  border: none;
}

/* Content positioning styles */
.content-right {
  position: relative;
  right: 70px;
  top: 50px;
  margin-bottom: 3rem;
  font-size: 0.8rem;
}

.content-left {
  position: relative;
  left: 70px;
  top: 50px;
  margin-bottom: 3rem;
  font-size: 0.8rem;
}

.offer-text {
  max-width: 400px;
}

/* Button positioning styles */
.button-right {
  background-color: #b99879;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 15px !important;
  transition: all 0.3s ease;
  position: relative;
  top: 15px;
  z-index: 1;
  right: -120px;
  text-transform: uppercase;
  font-family: 'Zodiak';
}

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
  left: -120px;
  text-transform: uppercase;
  font-family: 'Zodiak';
}

.custom-button:hover {
  background-color: #a68669;
  color: white;
}

@media (max-width: 1200px) {
  .image-left, .image-right {
    margin: 40px;
    position: relative;
    left: -40px;
    display: flex;
  }
}

@media (max-width: 992px) {
  .image-left, .image-right {
    margin: 40px;
    position: relative;
    left: -40px;
    top: 0px;
    display: flex;
    
  }
  .obiekt{
    margin-top:0px;
}
  .content-right, .content-left {
    position: relative;
    right: 0px;
    left: 0px;
    top: -220px;
  }
  
  .button-right, .button-left {
    right: 0;
    left: 0;
  }
}

/* Responsywność */
@media (max-width: 768px) {
  .banner-section {
    min-height: auto;
  }
}
</style>