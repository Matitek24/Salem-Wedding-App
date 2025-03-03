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
            <!-- Elementy menu z lewej strony -->
            <li 
              v-for="(item, index) in leftItems" 
              :key="'left-' + index" 
              class="nav-item">
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
  
            <!-- Logo jako element listy -->
            <li class="nav-item logo-item">
              <a class="nav-link" href="#">
                <img :src="logoSrc" alt="Logo" class="logo-img" />
              </a>
            </li>
  
            <!-- Elementy menu z prawej strony -->
            <li 
              v-for="(item, index) in rightItems" 
              :key="'right-' + index" 
              class="nav-item">
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
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
      default: '/image/logo.png',
    }
  });
  
  const isNavbarOpen = ref(false);
  
  const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
  };
  </script>
  
  <style scoped>
  .navbar-nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo-item {
    margin: 0 20px !important; 
  }
  
  .logo-img {
    width: 150px; 
    transition: width 0.3s ease;
  }
  
  .nav-item {
    margin: 0 4px;
    font-size: 90%;
  }
  @media (max-width: 768px) {
    .logo-img {
      width: 120px;
    }
  }
  </style>
  