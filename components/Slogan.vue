<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(false);

const checkScreenSize = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 997;
  }
};

onMounted(() => {
  checkScreenSize(); // Sprawdź początkowy rozmiar ekranu
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center w-100 position-relative mb-5">
      <!-- Lewa kolumna -->
      <div class="col-md-5">
        <h1 class="display-4">Witaj, </h1>
        <p class="lead mt-3">
          <span class="lead1">Jesteśmy ekipą</span> <br />
          <span class="lead2">Salem Wedding</span>
        </p>
      </div>

      <!-- Kreska dzieląca (vr na desktop, hr na mobile) -->
      <div class="col-md-1 d-flex justify-content-center">
        <div v-if="!isMobile" class="vr h-100"></div>
        <hr v-else class="hr" />
      </div>

      <!-- Prawa kolumna -->
      <div class="col-md-5">
        <p class="text">
          Tutaj możesz umieścić dowolny tekst, który ma się znajdować po prawej stronie. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vr {
  width: 1px;
  min-height: 200px;
  border: 1.2px solid var(--color-first);
}

.hr {
  width: 80%;
  border: 1.2px solid var(--color-first);
  margin-top: 1rem;
}

.display-4 {
  font-family: "Corinthia";
  font-size: 10rem;
  color: var(--color-first);
  margin-left: 40px;
}

.text {
  font-family: "Zodiak";
}

.lead {
  font-family: "Zodiak";
  text-align: right;
  position: relative;
  font-size: 1.4rem;
}

.lead1 {
  position: absolute;
  bottom: 60px;
  left: 200px;
}

.lead2 {
  position: absolute;
  bottom: 32px;
  left: 250px;
}
</style>
