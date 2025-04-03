<script setup>
import { useHead } from '#imports'
import Slogan from '~/components/Slogan.vue'
import PhotographerSection from '~/components/O_Nas/Photograph.vue'
import Videograph from '~/components/O_Nas/Videograph.vue'
import ContentBlock from '~/components/O_Nas/Info_Block.vue'
import Footer from '~/components/footer.vue'

useHead({
  title: 'O nas - Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})



const pawel = {
  name: 'Paweł',
  title: 'Fotograf',
  image: '/_nuxt/public/images/wesele_fot2.jpg',
  secondaryImage: '/_nuxt/public/images/wesele_fot3.jpg',
  description: [
         'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32'
        ],
  buttonText: 'OBEJRZYJ ZDJĘCIA'
};

const film = {
  name: 'Mariusz Mateusz Piotrek Mateusz',
  title: 'Ekipa Video',
  image: '/_nuxt/public/images/wesele_fot3.jpg',
  secondaryImage: '/_nuxt/public/images/video1.jpg',
  description: [
         'ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32 ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32'
        ],
  buttonText: 'OBEJRZYJ ZDJĘCIA'
};


  </script>

<template>
    <div class="container">
     <div class="pt-4 mt-2">
      <Slogan
        greeting="Cześć"
        teamTitle="Jesteśmy ekipę"
        teamName="Salem Wedding"
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
     </div>
     <div class="line">
      <hr>
     </div>
      <div>
        <PhotographerSection :photographer="pawel" />
      </div>
      <div>
        <Videograph :photographer="film" />
      </div>
      <div class="mt-5 pt-5">
        <ContentBlock 
      position="left"
      image="/_nuxt/public/images/wesele_fot3.jpg"
      title="Dbamy"
      subtitle="o każdy detal"
      description="Każde zdjęcie, każdy kadr wykonujemy z niezwykłą starannością."
    />
    
    <!-- Stand on Hands Section -->
    <ContentBlock 
      position="right"
      image="/_nuxt/public/images/wesele_fot3.jpg"
      title="Stajemy na głowie"
      subtitle="aby wasz reportaż był najlepszy"
      description="Dążymy do tego, aby film i zdjęcia spełniły Wasze oczekiwania. ss"
    />
    
    <!-- Additional blocks can be added as needed -->
    <ContentBlock 
      position="left"
      image="/_nuxt/public/images/wesele_fot3.jpg"
      title="Doświadczenie"
      subtitle="w każdym ujęciu"
      description="Pracujemy w branży od ponad 10 lat, co daje nam pewność w każdej sytuacji."
    />
        
        <div class="line mt-5">
          <hr>
        </div>
      </div>
      <div class="container-fluid p-0" style="margin-top:200px;">
    <div class="row banner-section align-items-center m-0">
      <!-- Lewa kolumna ze zdjęciem butów -->
      <div class="col-lg-6 p-0 justify-content-end">
        <img src="../public/images/wesele_fot1.jpg" alt="Eleganckie buty" class="img-fluid w-100">
      </div>
      
      <!-- Prawa kolumna z tekstem oferty -->
      <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center text-center p-4 right">
        <div class="offer-text">
          <p class="text-dark mb-2 text_2">Sprawdź naszą</p>
          <h2 class="script-font mb-4">ofertę</h2>
          
          <!-- Biała karta z tekstem -->
          <div class="card p-3 mb-4 bg-white rounded-1">
            <div class="card-body">
              <p class="mb-0 text-start left-border ps-3" >Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko.</p>
            </div>
          </div>
          
          <!-- Przycisk CTA -->
          <button class="btn custom-button px-4 py-2">SPRAWDŹ NASZĄ OFERTĘ</button>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
</template>
  
  
  <style scoped>

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
  