<script setup>
import { useHead } from '#imports'
import Slogan from '~/components/Slogan.vue'
import Card from '~/components/card.vue'
import Footer from '~/components/footer.vue'
import OfertaCard from '~/components/OfertaCard.vue'
import Odnosnik from '~/components/Odnosnik.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  const initAOS = () => {
    setTimeout(() => {
      AOS.init({
        offset: 100,
        delay: 200,
        easing: 'ease-in-out',
        once: true,
        mirror: true
      });
    }, 1000);
  };

  if (document.readyState === 'complete') {
    // Strona już załadowana, inicjuj AOS od razu
    initAOS();
  } else {
    // Czekaj na pełne załadowanie strony
    window.addEventListener('load', initAOS);
  }
});


useHead({
  title: 'Oferta - Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})



  </script>

<template>
    <div class="container">
     <div class="pt-4 mt-2">
        <div class="pt-4 mt-4" data-aos="fade-down"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
            <Slogan
        greeting="Dbamy"
        teamTitle="o wysoką jakośc"
        teamName="naszych usług"
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi impLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus rerum impedit inventore sequi. Rem, facere nostrum iure in neque, excepturi imp"
      />
        </div>


        <div class="row pt-4 mt-4">
            <div class="col-lg-4 col-md-12" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <OfertaCard 
                imageUrl="/images/A&K plener-7_websize.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                currentPrice="2500"
                label="Fotoreportaz"
                :showPackageButton="true"
                />
            </div>
            <div class="col-lg-4 col-md-12" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <OfertaCard 
                imageUrl="/images/A&M plener-198_websize.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                label="Fotoreportaz + Fotoplener"
                currentPrice="6500"
                :showPackageButton="true"
                />
            </div>
            <div class="col-lg-4 col-md-12" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <OfertaCard 
                imageUrl="/images/wesele_fot1.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                label="Film"
                currentPrice="9000"
                :showPackageButton="true"
                />
            </div>
        </div>


        <div class="row pt-4 mt-4" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
            <div class="col-lg-4 col-md-12">
                <OfertaCard 
                imageUrl="/images/K&S reportaz-463_websize.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                oldPrice="9000"
                label="Fotoreportaz + fotoplener"
                pakiet="PAKIET FOTO"
                currentPrice="7500"
                :showPackageButton="true"
                />
            </div>
            <div class="col-lg-4 col-md-12" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <OfertaCard 
                imageUrl="/images/M&K plener-75_websize.jpg"
                description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow welurowa okładka 5 kolorów do wyboru welurowe"
                oldPrice="15500"
                pakiet="PAKIET MINI"
                label="Fotoreportaz + Film"
                currentPrice="13000"
                :showPackageButton="true"
                />
            </div>
            <div class="col-lg-4 col-md-12" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <OfertaCard 
                imageUrl="/images/wesele_fot2.jpg"
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
            <div class="col-lg-4 col-md-12" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <Card 
        imageUrl="/images/wesele_fot1.jpg"
        label="ODBITKI"
        description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow"
        :oldPrice="300"
        :currentPrice="200"/>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <Card 
        imageUrl="/images/wesele_fot1.jpg"
        label="ODBITKI"
        description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow"
        :oldPrice="300"
        :currentPrice="200"/>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
                <Card 
        imageUrl="/images/wesele_fot1.jpg"
        label="ODBITKI"
        description="welurowa okładka 5 kolorów do wyboru welurowe kladka 5 kolorow kolorow kolorow"
        :oldPrice="300"
        :currentPrice="200"/>
            </div>
        </div>
    
     </div>
        <div class="line-break mt-5">
            <hr>
        </div>
        <div data-aos="zoom-in-up"   
  data-aos-duration="500"      
  data-aos-easing="ease-in-out">
        <Odnosnik 
        leftImage="/images/K&K plener-92_websize.jpg"
        text2=""
      text3="o waszym ślubie"
      scriptTitle="Opowiedz"
      cardText="here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected here are many variations of passages of Lorem Ipsum available, but the majority have sufered alteration in some form, by injected "
      buttonText="ZAPYTAJ O OFERTĘ"
      containerMarginTop="200px"/>
      </div>
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
  