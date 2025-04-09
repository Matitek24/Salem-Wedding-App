<script setup>
import { useHead } from '#imports'
import Slogan from '~/components/Slogan.vue'
import Card from '~/components/card.vue'
import Footer from '~/components/footer.vue'
import OfertaCard from '~/components/OfertaCard.vue'
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
        <div class="pt-4 mt-4">
            <Slogan
        greeting="Dbamy""
        teamTitle="o wysoką jakośc"
        teamName="naszych usług"
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
        </div>
        <div class="row pt-4 mt-4">
            <div class="col-lg-4 col-md-12">
                <OfertaCard 
                imageUrl="/_nuxt/public/images/A&K plener-7_websize.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                currentPrice="2500"
                :showPackageButton="true"
                />
            </div>
            <div class="col-lg-4 col-md-12">
                <OfertaCard 
                imageUrl="/_nuxt/public/images/A&M plener-198_websize.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                label="Fotoreportaz"
                currentPrice="6500"
                :showPackageButton="true"
                />
            </div>
            <div class="col-lg-4 col-md-12">
                <OfertaCard 
                imageUrl="/_nuxt/public/images/wesele_fot1.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                label="Film"
                currentPrice="9000"
                :showPackageButton="true"
                />
            </div>
        </div>


        <div class="row pt-4 mt-4">
            <div class="col-lg-4 col-md-12">
                <OfertaCard 
                imageUrl="/_nuxt/public/images/K&S reportaz-463_websize.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                oldPrice="9000"
                label="Fotoreportaz + fotoplener"
                pakiet="PAKIET FOTO"
                currentPrice="7500"
                :showPackageButton="true"
                />
            </div>
            <div class="col-lg-4 col-md-12">
                <OfertaCard 
                imageUrl="/_nuxt/public/images/M&K plener-75_websize.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                oldPrice="15500"
                pakiet="PAKIET MINI"
                label="Fotoreportaz + Film"
                currentPrice="13000"
                :showPackageButton="true"
                />
            </div>
            <div class="col-lg-4 col-md-12">
                <OfertaCard 
                imageUrl="/_nuxt/public/images/wesele_fot2.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                label="Fotoreportaz + Film + Fotoplener"
                pakiet="PAKIET MAX"
                oldPrice="18000"
                currentPrice="15000"
                :showPackageButton="true"
                />
            </div>
        </div>

        <div class="row pt-4 mt-4 d-none">
            <div class="col-lg-4 col-md-12">
                <Card 
        imageUrl="/_nuxt/public/images/wesele_fot1.jpg"
        label="ODBITKI"
        description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow"
        :oldPrice="300"
        :currentPrice="200"/>
            </div>

            <div class="col-lg-4 col-md-6">
                <Card 
        imageUrl="/_nuxt/public/images/wesele_fot1.jpg"
        label="ODBITKI"
        description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow"
        :oldPrice="300"
        :currentPrice="200"/>
            </div>

            <div class="col-lg-4 col-md-6">
                <Card 
        imageUrl="/_nuxt/public/images/wesele_fot1.jpg"
        label="ODBITKI"
        description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow"
        :oldPrice="300"
        :currentPrice="200"/>
            </div>
        </div>
    
     </div>
        <div class="line mt-5">
            <hr>
        </div>
        <Odnosnik 
        leftImage="/_nuxt/public/images/K&K plener-92_websize.jpg"
        text2=""
      text3="o waszym ślubie"
      scriptTitle="Opowiedz"
      cardText="here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected "
      buttonText="ZAPYTAJ O OFERTĘ"
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
  