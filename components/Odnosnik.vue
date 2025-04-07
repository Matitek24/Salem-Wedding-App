<script setup>
const props = defineProps({
  leftImage: {
    type: String,
    default: "../public/images/wesele_fot1.jpg"
  },
  text2: {
    type: String,
    default: "Sprawdź naszą"
  },
  text3: {
    type: String,
    default: ""
  },
  scriptTitle: {
    type: String,
    default: "ofertę"
  },
  cardText: {
    type: String,
    default: "Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko."
  },
  buttonText: {
    type: String,
    default: "SPRAWDŹ NASZĄ OFERTĘ"
  },
  containerMarginTop: {
    type: String,
    default: "200px"
  }
  
});
</script>

<template>
  <div class="container-fluid p-0" :style="{ marginTop: containerMarginTop }">
    <div class="row banner-section align-items-center m-0">
      <!-- Lewa kolumna ze zdjęciem -->
      <div class="col-lg-6 p-0 justify-content-end">
        <img :src="leftImage" alt="Eleganckie buty" class="img-fluid w-100">
      </div>
      <!-- Prawa kolumna z tekstem oferty -->
      <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center p-4 right">
        <div class="offer-text position-relative">
          <p class="text-dark mb-2 text_2">{{ text2 }}</p>
          <h2 class="script-font mb-4">{{ scriptTitle }}</h2>
          <p class="text-dark mb-2 text_3">{{ text3 }} </p>
          
          <!-- Biała karta z tekstem -->
          <div class="card p-3 mb-4 bg-white rounded-1">
            <div class="card-body">
              <p class="mb-0 text-start left-border ps-3">{{ cardText }}</p>
            </div>
          </div>
          
          <!-- Przycisk CTA -->
          <button class="btn custom-button px-4 py-2">{{ buttonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text_3{
  position: absolute;
  font-size: 0.9rem;
  top:7rem;
  left:12rem;
}
.text_2{
  position: relative;
  top: 50px;
  left:-2rem;
  font-family: var(--font-primary);
}
.banner-section img{
  margin:40px;
  position: relative;
  left:100px;
  display: flex;
}
.card{
  box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.122);
  border: none;
}
.right{
  position: relative;
  right: 70px;
}
.line {
  position: absolute;
  height: 10px;
  width: 100%;
  left: 0px;
  margin-top: -20px;
}
.offer-text {
  max-width: 400px;
  font-size: 0.9rem;
  font-family: var(--font-primary);
}
.script-font {
  font-family: 'Corinthia', serif;
  color: #b99879;
  font-size: 6.5rem;
  font-style: italic;
}
.custom-button {
  background-color: #b99879;
  color: white;
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;
  top:-45px;
  left: 130px;
  font-family: 'Zodiak';
}
.custom-button:hover {
  background-color: #a68669;
  color: white;
}
@media (max-width: 1400px) {
  .text_2{
    left:2rem;
  }
  .script-font {
    position: relative;
    left:20px;
  }
}
@media (max-width: 1200px) {
  .text_2{
    left:4rem;
  }
  .script-font {
    position: relative;
    left:100px;
  }
  .banner-section img{
    margin:40px;
    position: relative;
    left:-40px;
    display: flex;
  }
}
/* Responsywność */
@media (max-width: 768px) {
  .banner-section {
    min-height: auto;
  }
  .right{
    position: relative;
    right: 40px;
  }
  .text_2{
    left:2rem;
  }
  .script-font {
    position: relative;
    left:50px;
  }
  .banner-section img{
    margin:40px;
    position: relative;
    left:-40px;
    display: flex;
  }
}
</style>
