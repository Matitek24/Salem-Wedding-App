<template>
  <nav 
    class="navbar navbar-expand-lg navbar-light" 
    :class="{ 'sticky-nav': isSticky }"
    ref="navbar"
  >
    <div class="navbar-gradient"></div>
    <div class="container">
      <!-- Przycisk burger menu -->
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Logo (zawsze widoczne) -->
      <a class="navbar-brand" href="/">
        <img :src="logoSrc" alt="Logo" class="logo-img" style="width:70px"/>
      </a>
      
      <!-- Treść, która się zwija -->
      <div :class="['collapse navbar-collapse', { show: isNavbarOpen }]" id="navbarContent">
        <ul class="navbar-nav mx-auto align-items-center">
          <!-- Na małych ekranach pokaż wszystkie elementy pod sobą -->
          <template v-if="isSmallScreen && isNavbarOpen">
            <li v-for="(item, index) in leftItems" :key="'left-' + index" class="nav-item mobile-nav-item">

              <a  class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
            
            <li v-for="(item, index) in rightItems" :key="'right-' + index" class="nav-item mobile-nav-item">
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
          </template>
          
          <!-- Na dużych ekranach standardowy układ -->
          <template v-else>       
            <li v-for="(item, index) in leftItems" :key="'left-' + index" 
                :class="['nav-item', {'dropdown': item.text.toLowerCase() === 'portfolio'}]">

              <a  class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
   
            <li class="nav-item logo-item">
              <a class="nav-link" href="/">
                <img :src="logoSrc" alt="Logo" class="logo-img" />
              </a>
            </li>
            
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
const isPortfolioOpen = ref(false);
const windowWidth = ref(1024);
const isSticky = ref(false);
const navbar = ref(null);
const scrollThreshold = ref(100); // Próg przewijania do aktywacji sticky

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

const handleScroll = () => {
  if (typeof window !== 'undefined' && navbar.value) {
    isSticky.value = window.scrollY > scrollThreshold.value;
  }
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener('resize', updateWindowWidth);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth);
    window.removeEventListener('scroll', handleScroll);
  }
});

const isSmallScreen = computed(() => windowWidth.value < 1000);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

const togglePortfolioDropdown = () => {
  isPortfolioOpen.value = !isPortfolioOpen.value;
};

const openPortfolioDropdown = () => {
  isPortfolioOpen.value = true;
};

const closePortfolioDropdown = () => {
  isPortfolioOpen.value = false;
};
</script>

<style scoped>
.navbar {
  position: absolute;
  width: 100%;
  background-color: transparent !important;
  z-index: 10;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.navbar-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: -1;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.sticky-nav {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.448) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.369);
  animation: slideDown 0.5s forwards;
}

.sticky-nav .navbar-gradient {
  opacity: 0;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
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
  position: relative;
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

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-menu {
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 0;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  display: none;
  transition: all 0.3s ease;
}

.dropdown-menu.show {
  display: block;
  animation: fadeIn 0.3s ease;
}

.dropdown-item {
  color: white !important;
  font-size: 11px;
  padding: 0.5rem 1.5rem;
  font-family: 'Zodiak', Times, serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ddd !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.logo-item {
  margin: 0 20px;
}

.logo-img {
  width: 120px;
  transition: width 0.3s ease;
  filter: invert(1);
}

.navbar-brand .logo-img {
  width: 70px;
  filter: invert(1);
  transition: transform 0.3s ease, width 0.3s ease;
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

.sticky-nav .logo-item .logo-img{
  width: 100px !important;
}

.sticky-nav .logo-item .nav-link{
  margin: 0px !important;
}

@media screen and (max-width: 991px) {
  .navbar {
    background-color: #b1978063 !important;
    backdrop-filter: blur(10px);
    position: absolute;
  }

  .sticky-nav {
    position: fixed;
    top: 0;
    background-color: #b1978095 !important;
    animation: slideDown 0.5s forwards;
  }

  .navbar-collapse {
    overflow: hidden;
    max-height: 0;
  }

  .navbar-collapse.show {
    max-height: 100vh;
    padding: 20px 0;
    transition: max-height 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67), padding 0.5s ease-in-out;
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
    animation: fadeInDown 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    opacity: 0;
    transform: translateY(-20px);
    animation-delay: calc(0.05s * var(--index, 0));
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
    transform-origin: center;
  }
  
  .navbar-toggler {
    order: -1;
  }

  /* Style dla dropdown na małych ekranach */
  .dropdown-menu {
    background-color: rgba(0, 0, 0, 0.2) !important;
    border-radius: 4px;
    margin-top: 5px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  .dropdown-item {
    color: white !important;
    text-align: center;
    padding: 12px;
  }
}

.nav-link{
  text-align: center;
}
@media (max-width: 1300px) {
 .nav-link{
  font-size: 0.6rem;
  padding: 0px;
 }
  
}
@media (max-width: 997px) {
 .nav-link{
  font-size: 0.8rem;
  padding: 6px;
 }
  
}
@media screen and (min-width: 992px) {
  .navbar-brand {
    display: none;
  }

  /* Style dla dropdown na dużych ekranach */
  .dropdown .dropdown-menu {
    margin-top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .dropdown:hover .dropdown-toggle::after {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
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