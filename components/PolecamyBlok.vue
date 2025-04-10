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
    default: "Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznani Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się  Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko. Zapraszamy do zapoznania się"
  },
  ctaButtonText: {
    type: String,
    default: "TEL: 555 123 321"
  }
});
</script>

<template>
  <div class="container-fluid p-0" style="margin-top:0px;">
    <div class="row banner-section align-items-center m-0" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
      <!-- Lewa kolumna ze zdjęciem butów -->
      <div class="col-lg-6 p-0 justify-content-end">
        <img :src="leftImage" alt="Eleganckie buty" class="img-fluid w-100">
      </div>
      <!-- Prawa kolumna z tekstem oferty -->
      <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center p-4 right">
        <div class="offer-text">
          <div class="logo">
            <img :src="logoImage" alt="logo" style="width:100px">
          </div>
          <button class="btn custom-button2 px-4 py-2">
            {{ primaryButtonText }}
          </button>
          <div class="card p-3 mb-4 bg-white rounded-1">
            <div class="card-body">
              <p class="mb-0 text-start left-border ps-3">
                {{ mainOfferText }}
              </p>
            </div>
            <div class="d-flex flex-column guzik">
                <button class="custom-button3">
                www
                </button>
                <div class="icons">
                <img src="../public/images/Icon/iconicon-IG.png" style="width: 20px;">
                <img src="../public/images/Icon/iconicon-YT.png" style="width: 20px;">
                <img src="../public/images/Icon/iconicon-FB.png" style="width: 20px;">
                </div>
            </div>
          </div>

          <button class="btn custom-button px-4 py-2">
            {{ ctaButtonText }}
          </button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card-body{
    padding-left:30px !important;
    padding: 2rem;
}
.icons {
  display: flex;
  justify-content: start;
  margin-top: 20px;
  position: relative;
  left: -85px

}
.icons img{
    margin:5px !important;
    
}

.custom-button3 {
  background-color: #b99879;
  color: white;
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;
  top: 15px;
  width: 100px;
  margin-left: 10px;
  font-size: 1rem;
  z-index: 1;
  font-family: 'Zodiak';
}

.banner-section{
    max-width: 100vw;
    overflow: hidden;
}
.logo{
    position: relative;
    top:60px;
    left:10px;
    z-index: 2;
}
.logo img{
    background-color: rgb(255, 255, 255);
    padding:5px;
    box-shadow: 4px 6px 6px 4px rgba(0, 0, 0, 0.079);
}
.banner-section img{
  margin:40px;
  top:0px;
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
  font-size: 0.8rem;
}
.offer-text {
  max-width: 400px;
  font-family: 'Zodiak';
}



.custom-button2 {
  background-color: #b99879;
  color: white;
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;
  top:15px;
  z-index: 1;
  text-transform: uppercase;
  font-family: 'Zodiak';
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
 
}
@media (max-width: 1200px) {

    .logo{
    position: relative;
    top:60px;
    left:150px;
    z-index: 2;
}
.icons {
  display: flex;
  justify-content: start;
  margin-top: 20px;
  position: relative;
  left: 55px
}
.banner-section img{
  margin:40px;
  position: relative;
  left:-40px;
  display: flex;
}
}
@media (max-width: 992px) {
    .banner-section img{
  margin:40px;
  position: relative;
  left:-40px;
  top:0px;
  display: flex;
}
.logo{
    position: relative;
    top:60px;
    z-index: 2;
}
.right{
  position: relative;
  right: 0px;
  top: -220px;
}
    
}
/* Responsywność */
@media (max-width: 768px) {
  .banner-section {
    min-height: auto;
  }
}
</style>
