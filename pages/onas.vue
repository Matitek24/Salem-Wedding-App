<script setup>
import { useHead } from '#imports'
import Slogan from '~/components/Slogan.vue'
import PhotographerSection from '~/components/O_Nas/Photograph.vue'
import Videograph from '~/components/O_Nas/Videograph.vue'
import ContentBlock from '~/components/O_Nas/Info_Block.vue'
import Footer from '~/components/footer.vue'
import Odnosnik from '~/components/Odnosnik.vue'

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
  secondaryImage: '/_nuxt/public/images/video1.png',
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
      title="Tego dnia"
      subtitle="jesteśmy w pełnie dla was"
      description="Pracujemy w branży od ponad 10 lat, co daje nam pewność w każdej sytuacji."
    />
        
        <div class="line mt-5">
          <hr>
        </div>
      </div>
      <Odnosnik 
        leftImage="/_nuxt/public/images/wesele_fot1.jpg"
      text2="Sprawdź naszą"
      scriptTitle="ofertę"
      cardText="Zapraszamy do zapoznania się z naszą ofertą. Być może coś wpadnie ci w oko."
      buttonText="SPRAWDŹ NASZĄ OFERTĘ"
      containerMarginTop="200px"/>
</div>
<Footer />
</template>
  
  
  <style scoped>
.line {
  position: absolute;
  height: 10px;
  width: 100%;
  left: 0px;
  margin-top: -20px;
}

  </style>
  