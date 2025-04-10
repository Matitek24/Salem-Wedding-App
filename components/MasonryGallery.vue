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
const imagesLoaded = ref(false);
const mountedItems = ref(0);

const initMacy = () => {
  nextTick(() => {
    if (containerRef.value) {
      // Properly clean up previous instance
      if (macyInstance) {
        try {
          macyInstance.remove();
        } catch (e) {
          try {
            macyInstance.destroy();
          } catch (err) {
            console.error('Error cleaning up Macy instance:', err);
          }
        }
      }
      
      // Create new instance
      macyInstance = Macy({
        container: containerRef.value,
        trueOrder: false,
        waitForImages: false,
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

const recalculateMacy = () => {
  if (macyInstance && typeof macyInstance.recalculate === 'function') {
    macyInstance.recalculate(true);
  }
};

const checkImagesLoaded = () => {
  const images = containerRef.value?.querySelectorAll('img') || [];
  if (images.length === 0) return;
  
  let loadedCount = 0;
  const totalImages = images.length;
  
  images.forEach((img) => {
    if (img.complete) {
      loadedCount++;
      animateImageEntry(img.parentNode, loadedCount);
    } else {
      img.addEventListener('load', () => {
        loadedCount++;
        animateImageEntry(img.parentNode, loadedCount);
        if (loadedCount === totalImages) {
          recalculateMacy();
          imagesLoaded.value = true;
        }
      });
      
      img.addEventListener('error', () => {
        loadedCount++;
        console.error('Failed to load image:', img.src);
        if (loadedCount === totalImages) {
          recalculateMacy();
          imagesLoaded.value = true;
        }
      });
    }
  });
  
  // If all images are already loaded
  if (loadedCount === totalImages) {
    recalculateMacy();
    imagesLoaded.value = true;
  }
};

// Animate each image as it appears
const animateImageEntry = (element, index) => {
  if (!element) return;
  
  // Add a delay based on the image index for staggered animation
  const delay = Math.min(index * 50, 500);
  element.style.transitionDelay = `${delay}ms`;
  element.classList.add('visible');
};

onMounted(() => {
  initMacy();
  checkImagesLoaded(); 
});

watch(
  () => props.images,
  (newImages) => {
    if (newImages && newImages.length > 0) {
      imagesLoaded.value = false;
      mountedItems.value = 0;
      
      // Give time for DOM to update with new images
      nextTick(() => {
        checkImagesLoaded();
        
        // As a fallback, try to recalculate after a delay
        setTimeout(() => {
          recalculateMacy();
        }, 100);
      });
    }
  },
  { deep: true }
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
      <img loading="lazy" :src="image.image_path" :alt="image.category.name" />
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
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

/* Animation entry for each item */
.macy-item.visible {
  opacity: 1;
  transform: scale(1) translateY(0);
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
  transform: scale(1.02);
}
</style>