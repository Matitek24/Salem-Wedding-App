<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import Macy from 'macy';

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  openLightbox: {
    type: Function,
    required: true
  }
});

const containerRef = ref(null);
let macyInstance = null;

const initMacy = () => {
  nextTick(() => {
    if (containerRef.value) {
      // Tworzymy nową instancję, by "zresetować" poprzednią konfigurację
      macyInstance = Macy({
        container: containerRef.value,
        trueOrder: false,
        waitForImages: true,
        margin: 10,
        columns: 3,
        breakAt: {
          1200: 3,
          940: 2,
          520: 1
        }
      });
    }
  });
};

onMounted(() => {
  initMacy();
});

// Obserwujemy zmiany w liście zdjęć. Dodajemy małe opóźnienie, by dać czas na wyrenderowanie obrazów.
watch(
  () => props.images,
  () => {
    setTimeout(() => {
      initMacy();
    }, 100); // opóźnienie 100ms – dostosuj, jeśli potrzeba
  }
);
</script>

<template>
  <div ref="containerRef" class="macy-container">
    <div
      v-for="(image, idx) in props.images"
      :key="image.id"
      class="macy-item"
      @click="() => props.openLightbox(idx)"
    >
      <img :src="image.image_path" :alt="image.category.name" />
    </div>
  </div>
</template>

<style scoped>
.macy-container {
  position: relative;
}

/* Każdy element siatki */
.macy-item {
  margin-bottom: 10px;
  cursor: pointer;
  transition: filter 0.6s ease;
}

/* Upewnij się, że obrazy mają spójne wymiary */
.macy-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
  object-fit: cover;
}

.macy-item:hover {
  filter: brightness(0.8);
}
</style>
