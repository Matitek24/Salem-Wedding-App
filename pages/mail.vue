<script setup>
import { useHead } from '#imports'
import Formularz from '~/components/Formularz.vue'
import Footer from '~/components/footer.vue'
useHead({
  title: 'Kontakt - Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})
  </script>


<template>
    <div class="booking-notification">
      <div class="notification-card">
        <img src="../public/images/SalemWedding.png" alt="Logo" class="logo" style="width: 80px;"/>
        <div class="header">
          <h3 class="greeting">SZANOWNI PAŃSTWO,</h3>
          <p class="subheading">Z PRZYKROŚCIĄ INFORMUJEMY</p>
          <div class="divider"></div>
        </div>
        
        <div class="content">
          <p class="date">14.08.2026</p>
          <h2 class="status">TERMIN ZAJĘTY!</h2>
          <img src="../public/images/Icon/ozdobnik_brown.png" alt="ozdbnik" style="width: 70px; margin-bottom:30px;">
          
          <div class="footer-message">
            <p class="services-intro">W tym dniu możemy zaoferować wyłącznie usługi:</p>
            <p class="service-type">FOTO</p>
            <p class="service-type">FOTOPLENER</p>
          </div>
          
          <div class="warning">
            <p>UWAGA! Zapytanie nie jest rezerwacją, a usługi szybko się rozchodzą!
            Skontaktujcie się z nami i umówcie na niezobowiązującą wizytę.</p>
          </div>
          
          <button class="booking-button">ZADZWOŃ</button>
          
          <div class="contact">
            <p class="phone-numbers">
              <span>+48 509 150 763</span>
              <span>+48 608 681 689</span>
            </p>
          </div>
          
          <div class="footer-message">
            <p>Wiemy, że każdy z Was pracuje, dlatego zaproponujcie nam
            termin i godzinę, a my zrobimy wszystko, aby dostosować się do Was!</p>
            
            <div class="signature">
              <p>Miłego dnia! <br>
              życzy Salon Wedding</p>
            </div>
            <img src="../public/images/Icon/ozdobnik_brown.png" alt="ozdbnik" style="width: 70px;">
          </div>
        </div>
      </div>
    </div>

    <div class="booking-notification">
      <div class="notification-card">
        <img src="../public/images/SalemWedding.png" alt="Logo" class="logo" style="width: 80px;"/>
        <div class="header">
          <h3 class="greeting">SZANOWNI PAŃSTWO,</h3>
          <p class="subheading">Z PRZYKROŚCIĄ INFORMUJEMY</p>
          <div class="divider"></div>
        </div>
        
        <div class="content">
          <p class="date">14.08.2026</p>
          <h2 class="status2">TERMIN WOLNY!</h2>
          <img src="../public/images/Icon/ozdobnik_brown.png" alt="ozdbnik" style="width: 70px; margin-bottom:30px;">
          <div class="warning">
            <p>UWAGA! Zapytanie nie jest rezerwacją, a usługi szybko się rozchodzą!
            Skontaktujcie się z nami i umówcie na niezobowiązującą wizytę.</p>
          </div>
          <div class="footer-message">
            <p class="service-type">NIE CZEKAJ!</p>
          </div>
          
    
          
          <button class="booking-button">ZADZWOŃ</button>
          
          <div class="contact">
            <p class="phone-numbers">
              <span>+48 509 150 763</span>
              <span>+48 608 681 689</span>
            </p>
          </div>
          
          <div class="footer-message">
            <p>Wiemy, że każdy z Was pracuje, dlatego zaproponujcie nam
            termin i godzinę, a my zrobimy wszystko, aby dostosować się do Was!</p>
            
            <div class="signature">
              <p>Miłego dnia! <br>
              życzy Salon Wedding</p>
            </div>
            <img src="../public/images/Icon/ozdobnik_brown.png" alt="ozdbnik" style="width: 70px">
          </div>
        </div>
      </div>
    </div>


    <div class="booking-notification">
      <div class="notification-card">
        <img src="../public/images/SalemWedding.png" alt="Logo" class="logo" style="width: 80px;"/>
        <div class="header">
          <p class="subheading mt-4">kasia@onet.pl</p>
          <p class="subheading mt-1">07-200 Wyszków</p>
          <img src="../public/images/Icon/ozdobnik_brown.png" alt="ozdbnik" style="width: 70px; margin-top:10px;">
          <p class="subheading2 mt-4">KASIA</p>
          <p class="subheading">Zapytanie o termin</p>
          <hr>
        </div>
        
        <div class="content">
          <p class="date">14.08.2026</p>
          <h2 class="status2">TERMIN WOLNY!</h2>
        
          
          <div class="footer-message">
            <p class="service-type">Zapytała się o usługi!:</p>
            <p class="subheading fs-4">foto, film</p>
            <img src="../public/images/Icon/ozdobnik_brown.png" alt="ozdbnik" style="width: 70px">
          </div>
        </div>
      </div>
    </div>
  </template>

  
  
<style scoped>
.subheading2{
    font-size: 2.5rem;
    font-family: 'Zodiak';
    font-weight: 100;
}
.booking-notification {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../public/images/wesele_fot1.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
}

.notification-card {
  background-color: white;
  max-width: 600px;
  width: 100%;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header {
  margin-bottom: 30px;
}

.greeting {
  font-family: var(--font-primary);
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 5px;
}

.subheading {
  font-family: var(--font-primary);
  font-size: 16px;
  margin-bottom: 15px;
}

.divider {
  height: 1px;
  background-color: #ccc;
  width: 60%;
  margin: 0 auto;
}

.date {
  font-family: var(--font-primary);
  color: var(--color-first);
  margin-bottom: 10px;
}

.status {
  font-family: 'Zodiak';
  color:rgb(228, 72, 72);
  font-size: 40px;
  font-weight: 100;
  margin-bottom: 30px;
  font-weight: 600;
}
.status2 {
  font-family: 'Zodiak';
  color:rgb(93, 184, 93);
  font-size: 40px;
  font-weight: 100;
  margin-bottom: 30px;
  font-weight: 600;
}



.services-intro {
  font-family: var(--font-primary);
  margin-bottom: 15px;
}

.service-type {
  font-family: var(--font-primary);
  color: #c8a97e;
  font-size: 22px;
  margin: 10px 0;
}

.warning {
  font-family: var(--font-primary);
  font-size: 14px;
  color:rgb(206, 62, 62);
  margin-bottom: 25px;
}

.booking-button {
  font-family: var(--font-primary);
  background-color: #c8a97e;
  color: white;
  border: none;
  padding: 8px 25px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 25px;
  border-radius: 4px;
}

.contact {
  margin-bottom: 30px;
}

.phone-numbers {
  font-family: var(--font-primary);
  color: #c8a97e;
  display: flex;
  justify-content: center;
  gap: 40px;
  letter-spacing: 2px;
}

.footer-message {
  font-family: var(--font-primary);
  font-size: 13px;
  line-height: 1.5;
  margin-bottom:20px;
}

.signature {
  margin-top: 20px;
  font-family: var(--font-primary);
  font-size: 11px;
}
</style>
