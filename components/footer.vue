<template>
  <div class="footer-component">
    <hr class="footer-hr" data-aos="width-grow" data-aos-duration="1000" />
    <div class="footer-content">
      <div class="row align-items-center position-relative">
        <!-- Lewy liść – bez inline transform -->
        <div class="col-lg-5 col-md-12 d-flex justify-content-end leaf-container">
          <img 
            src="../public/images/Icon/ozdobnik_brown.png" 
            alt="Ozdobnik" 
            class="left-leaf"
            data-aos="fade-right" 
            data-aos-duration="1500"
            style="width:200px;">
        </div>
        <div class="col-lg-2 col-md-12 text-center" data-aos="fade-up" data-aos-duration="1200">
          <h3>Znajdź</h3>
          <p>Zobserwuj</p>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" data-aos="zoom-in" data-aos-delay="100">
              <img src="../public/images/Icon/iconicon-YT.png" alt="youtube">
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" data-aos="zoom-in" data-aos-delay="200">
              <img src="../public/images/Icon/iconicon-IG.png" alt="instagram">
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" data-aos="zoom-in" data-aos-delay="300">
              <img src="../public/images/Icon/iconicon-FB.png" alt="facebook">
            </a>
          </div>
        </div>
        <!-- Prawy liść -->
        <div class="col-lg-5 col-md-12 d-flex justify-content-start leaf-container">
          <img 
            src="../public/images/Icon/ozdobnik_brown.png" 
            alt="Ozdobnik" 
            class="right-leaf"
            data-aos="fade-left" 
            data-aos-duration="1500"
            style="width:200px;">
        </div>
      </div>
      <!-- Dane kontaktowe -->
      <div class="row mt-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
        <div class="col-md-4 text-center text-md-end">
          <p>tel. 509 150 763</p>
        </div>
        <div class="col-md-4 text-center">
          <p>Wyszków, ul. Spacerowa 17</p>
        </div>
        <div class="col-md-4 text-center text-md-start">
          <p>tel. 608 681 689</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (typeof AOS !== 'undefined') {
    // Odśwież AOS, żeby upewnić się, że wszystkie elementy są gotowe
    AOS.refresh();

    // Pobierz oba elementy liści
    const leftLeaf = document.querySelector('.left-leaf');
    const rightLeaf = document.querySelector('.right-leaf');

    if (leftLeaf && rightLeaf) {
      // Utwórz IntersectionObserver z niższym threshold, żeby działał od razu
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // (opcjonalnie) sprawdź w konsoli
          console.log('Obserwowany element:', entry.target, 'isIntersecting:', entry.isIntersecting);
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('left-leaf')) {
              setTimeout(() => {
                entry.target.classList.add('swaying-left');
              }, 1500);
            } else if (entry.target.classList.contains('right-leaf')) {
              setTimeout(() => {
                entry.target.classList.add('swaying-right');
              }, 1500);
            }
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      observer.observe(leftLeaf);
      observer.observe(rightLeaf);
    }
  }
});
</script>

<style scoped>
.footer-component p {
  font-family: 'HedvigLetterSerif';
}
.footer-component {
  text-align: center;
  padding: 3rem 0;
  font-family: 'Zodiak';
  overflow: hidden;
}
.footer-component h3 {
  font-family: 'Corinthia';
  font-size: 4rem;
  color: var(--color-first);
}
.footer-hr {
  border: 1.5px solid var(--color-first);
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
}
.footer-content {
  margin-top: 1rem;
}
.footer-content h3 {
  margin: 0;
  letter-spacing: 0.3rem;
}
.footer-content p {
  position: relative;
  top: -20px;
  font-weight: 500;
  font-family: HedvigLettersSerif;
}
.social-icons {
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.social-icons img {
  width: 2rem;
  margin: 0.5rem;
  transition: transform 0.3s;
}
.social-icons a:hover img {
  transform: scale(1.1);
}
.leaf-container {
  overflow: visible;
  position: relative;
  /* Upewnij się, że kontenery liści nie ograniczają animacji */
}

/* Animacje kołysania (sway) dla lewego i prawego liścia */
@keyframes sway-left {
  0% { transform: translateX(0) scaleX(-1) rotate(0deg); }
  25% { transform: translateX(-10px) scaleX(-1) rotate(-2deg) translateY(-3px); }
  50% { transform: translateX(0) scaleX(-1) rotate(0deg); }
  75% { transform: translateX(10px) scaleX(-1) rotate(2deg) translateY(3px); }
  100% { transform: translateX(0) scaleX(-1) rotate(0deg); }
}
@keyframes sway-right {
  0% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(5px) rotate(2deg) translateY(-3px); }
  50% { transform: translateX(0) rotate(0deg); }
  75% { transform: translateX(-5px) rotate(-2deg) translateY(3px); }
  100% { transform: translateX(0) rotate(0deg); }
}

/* Styl dla liści */
.left-leaf,
.right-leaf {
  position: relative;
  z-index: 1;
  transform-origin: center;
}

/* Klasy animacji kołysania */
.swaying-left {
  animation: sway-left 5s ease-in-out infinite;
}
.swaying-right {
  animation: sway-right 5s ease-in-out infinite;
}

/* Niestandardowe animacje AOS */
[data-aos="width-grow"] {
  width: 0;
  transition-property: width;
}
[data-aos="width-grow"].aos-animate {
  width: 100%;
}

/* Animacje fade dla liści ustawione przez AOS */
[data-aos="fade-right"].left-leaf {
  transform: translateX(80px) rotate(-10deg) scaleX(-1);
  opacity: 0;
}
[data-aos="fade-right"].left-leaf.aos-animate {
  transform: translateX(0) rotate(0deg) scaleX(-1);
  opacity: 1;
}
[data-aos="fade-left"].right-leaf {
  transform: translateX(-80px) rotate(10deg);
  opacity: 0;
}
[data-aos="fade-left"].right-leaf.aos-animate {
  transform: translateX(0) rotate(0deg);
  opacity: 1;
}
</style>
