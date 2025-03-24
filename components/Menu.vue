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
  position: absolute;
  width: 100%;
  background-color: transparent !important;
  z-index: 10;
}

.navbar-collapse {
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  overflow: hidden;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.nav-item {
  margin: 0 8px;
  font-size: 14px;
  font-weight: lighter !important;
  line-height: 12px;
}

.nav-link {
  color: rgb(255, 255, 255) !important;
  height: auto;
  font-size: 11px;
  text-align: left;
  font-weight: lighter;
  font-family: 'Zodiak', Times, serif;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
}

.nav-link:hover {
  color: #ddd !important; 
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
  background: rgba(255, 255, 255, 0); /* Przezroczyste tło przycisku */
  padding: 8px;
  border-radius: 5px;
}

.navbar-toggler-icon {
  filter: brightness(0) invert(1); /* Biały kolor ikonki burgera */
}

@media screen and (max-width: 991px) {
  .navbar {
    background-color: #B19780 !important;
    backdrop-filter: blur(10px);
    position: absolute;
  }

  .navbar-collapse.show {
    max-height: 100vh;
    overflow-y: auto;
    padding: 20px 0;
    transition: max-height 1s ease-in-out, padding 0.5s ease-in-out;
  }

  .logo-item-mobile {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .mobile-nav-item {
    width: 100%;
    text-align: center;
    margin: 10px 0;
    animation: fadeInDown 0.4s ease forwards;
    opacity: 0;
  }

  .mobile-nav-item {
    width: 100%;
    text-align: center;
    margin: 10px 0;
    animation: fadeInDown 0.4s ease-out forwards;
    opacity: 0;
    transform: translateY(-20px);
  }

  .mobile-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .nav-link {
    font-size: 14px;
    padding: 16px 0;
    position: relative;
    transition: color 0.3s ease-in-out;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  .nav-link:hover {
    color: #ddd !important;
  }
  .nav-link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
