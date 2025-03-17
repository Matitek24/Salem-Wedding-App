<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Przycisk burger menu -->
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Treść, która się zwija -->
      <div :class="['collapse navbar-collapse', { show: isNavbarOpen }]" id="navbarContent">
        <ul class="navbar-nav mx-auto align-items-center">
       
          <template v-if="isSmallScreen && isNavbarOpen">
            <li v-for="(item, index) in leftItems" :key="'left-' + index" class="nav-item">
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
            <li v-for="(item, index) in rightItems" :key="'right-' + index" class="nav-item">
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
            <!-- <li class="nav-item logo-item">
              <a class="nav-link" href="#">
                <img :src="logoSrc" alt="Logo" class="logo-img" />
              </a>
            </li> -->

          </template>
          
          <template v-else>       
            <li v-for="(item, index) in leftItems" :key="'left-' + index" class="nav-item">
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
   
            <li class="nav-item logo-item">
              <a class="nav-link" href="/">
                <img :src="logoSrc" alt="Logo" class="logo-img" />
              </a>
            </li>
            <!-- Renderuj prawe elementy -->
            <li v-for="(item, index) in rightItems" :key="'right-' + index" class="nav-item">
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
            
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  leftItems: {
    type: Array,
    default: () => []
  },
  rightItems: {
    type: Array,
    default: () => []
  },
  logoSrc: {
    type: String,
    default: '/image/logo.png'
  },
});


const isNavbarOpen = ref(false);
const windowWidth = ref(1024);

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth);
  }
});

const isSmallScreen = computed(() => windowWidth.value < 1000);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>

<style scoped>
.navbar {
  position: absolute; /* Ustawia navbar nad banerem */
  width: 100%;
  background-color: transparent !important;
  z-index: 10; /* Zapewnia, że navbar jest nad banerem */
}

.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.nav-item {
  margin: 0 8px;
  font-size: 14px; /* Rozmiar czcionki */
  font-weight: lighter !important;
  line-height: 12px;
}

.nav-link {
  color: rgb(255, 255, 255) !important;
  height: auto;
  font-size: 12px;
  text-align: left;
  font-weight: lighter;
  font-family: 'Times New Roman', Times, serif;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2.1px; /* lub inna wartość pasująca do Twojego projektu */
}


.nav-link:hover {
  color: #ddd !important; /* Lekko szary kolor po najechaniu */
}

.logo-item {
  margin: 0 20px;
}

.logo-img {
  width: 120px;
  transition: width 0.3s ease;
  filter: invert(1);
}

.navbar-toggler {
  border: none;
  margin: 10px;
  background: rgba(255, 255, 255, 0.2); /* Przezroczyste tło przycisku */
  padding: 8px;
  border-radius: 5px;
}

.navbar-toggler-icon {
  filter: brightness(0) invert(1); /* Biały kolor ikonki burgera */
}
</style>
