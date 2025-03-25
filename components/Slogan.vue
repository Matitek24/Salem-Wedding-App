<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Definiujemy propsy z domyślnymi wartościami
const props = defineProps({
  greeting: {
    type: String,
    default: "Salem"
  },
  teamTitle: {
    type: String,
    default: "Salem"
  },
  teamName: {
    type: String,
    default: "Salem"
  },
  rightText: {
    type: String,
    default: "Salem"
  }
});

const isMobile = ref(false);

const checkScreenSize = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 1007;
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
      <div class="col-lg-5">
        <h1 class="display-4">{{ greeting }}</h1>
        <p class="lead mt-3">
          <span class="lead1">{{ teamTitle }}</span> <br />
          <span class="lead2">{{ teamName }}</span>
        </p>
      </div>

      <!-- Kreska dzieląca (vr na desktop, hr na mobile) -->
      <div class="col-lg-1 d-flex justify-content-center">
        <div v-if="!isMobile" class="vr h-100"></div>
        <hr v-else class="hr" />
      </div>

      <!-- Prawa kolumna -->
      <div class="col-lg-5">
        <p class="text">
          {{ rightText }}
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
@media screen and (min-width: 996px) {
  .col-lg-1{
  width: 20px !important;
}
  
}
@media (max-width: 1200px) and (min-width: 990px) {
  .lead1 {
    bottom: 50px;
    left: 150px;
  }
  .lead2 {
    bottom: 22px;
    left: 180px;
  }
 }

</style>
