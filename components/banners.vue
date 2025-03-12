<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || "http://127.0.0.1:8000";

const banners = ref([]);
const currentBanner = ref(null);
const route = useRoute();

const fetchBanners = async () => {
  try {
    const response = await $fetch(`${apiUrl}/api/banners`);

    banners.value = response.map(banner => ({
      ...banner,
      image_url: banner.image_url.startsWith("http")
        ? banner.image_url
        : `${apiUrl}/${banner.image_url.replace(/^\/+/, "")}`
    }));

    // Pobieramy odpowiedni baner na podstawie aktualnej strony
    const page = route.name;
    currentBanner.value = banners.value.find(b => b.page === page) || banners.value[0]; // Fallback
  } catch (error) {
    console.error("Błąd pobierania banerów:", error);
  }
};

onMounted(fetchBanners);
</script>

<template>
  <div v-if="currentBanner" class="banner">
    <img :src="currentBanner.image_url" :alt="currentBanner.page" class="banner-image" />
  </div>
</template>

<style scoped>
.banner {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
