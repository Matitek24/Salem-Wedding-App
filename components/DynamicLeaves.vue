<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const decorationsContainer = ref(null)
const leaves = ref([])
const leafSpacing = 1100 // Zwiększony odstęp między liśćmi
const leafMarginTop = 400 // Początkowa pozycja pierwszego liścia
const maxLeafCount = 3 // Maksymalna liczba liści

// Funkcja obliczająca ile liści zmieści się na stronie
const calculateLeavesCount = () => {
  if (!decorationsContainer.value) return

  const windowHeight = window.innerHeight
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  )
  
  // Używamy wyższej wartości - dokumentu lub okna przeglądarki
  const totalHeight = Math.max(windowHeight, documentHeight)
  
  // Obliczamy ile liści potrzebujemy, ale z limitem
  // Odejmujemy 1000px od wysokości, aby uniknąć liści zbyt nisko na stronie
  const adjustedHeight = totalHeight - 1000
  const count = Math.min(
    Math.ceil(adjustedHeight / leafSpacing),
    maxLeafCount
  )
  
  return count
}

// Funkcja generująca liście
const generateLeaves = () => {
  leaves.value = []
  const leavesCount = calculateLeavesCount()
  
  if (!leavesCount) return
  
  for (let i = 0; i < leavesCount; i++) {
    const isLeft = i % 2 === 0 // Parzyste indeksy po lewej, nieparzyste po prawej
    
    leaves.value.push({
      id: `leaf-${i}`,
      position: isLeft ? 'left' : 'right',
      top: leafMarginTop + (i * leafSpacing),
      rotation: isLeft ? 40 : 140
    })
  }
}

// Obsługa zmiany rozmiaru okna z opóźnieniem
const handleResize = () => {
  // Używamy debounce, aby nie generować liści zbyt często
  clearTimeout(window.resizeTimer)
  window.resizeTimer = setTimeout(() => {
    generateLeaves()
  }, 250)
}

// Podpięcie i odpięcie listenera przy montowaniu/odmontowywaniu komponentu
onMounted(() => {
  generateLeaves()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  clearTimeout(window.resizeTimer)
})
</script>

<template>
  <div ref="decorationsContainer" class="background-decorations">
    <div
      v-for="leaf in leaves"
      :key="leaf.id"
      class="leaf"
      :class="leaf.position"
      :style="{
        top: `${leaf.top}px`,
        [leaf.position === 'left' ? 'left' : 'right']: '-200px',
        transform: `rotate(${leaf.rotation}deg)`
      }"
    ></div>
  </div>
</template>

<style scoped>
.background-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow-x: hidden; /* Zapobiega poziomemu przewijaniu liścia */
}

.leaf {
  position: absolute;
  width: 1000px;
  height: 1000px;
  background-image: url('/images/Icon/ozdobnik_brown.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.05;
}

.leaf.left {
  left: -200px;
}

.leaf.right {
  right: -200px;
}
</style>