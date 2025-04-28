<template>
  <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
    <div class="gallery-grid container">
      <div class="row">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
        >
          <!-- Wrap image in NuxtLink to dynamic slug route -->
          <NuxtLink :to="getLink(item)">
            <div class="image-wrapper hover-object">
              <img :src="item.image" :alt="item.title" class="img-fluid zoomable" />
            </div>
          </NuxtLink>
          <hr />
          <h3 class="image-title mt-2 text-center">
            <span class="image-title2">{{ item.title }}</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

// Generate URL-friendly slug from title
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/--+/g, '-');      // Replace multiple - with single -
};

// Determine correct link
const getLink = (item) => {
  if (item.title.toLowerCase() === 'blog') {
    return '/blogMain';
  }
  return `/${slugify(item.title)}`;
};
</script>


<style scoped>
.image-title2 {
  position: relative;
}
.image-title2::before {
  content: "";
  position: absolute;
  top: -3px;
  right: -53px; 
  z-index: 3;
  width: 50px;
  height: 50px;
  background-image: url(../../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform-origin: bottom right;
}
.image-title2::after {
  content: "";
  position: absolute;
  top: -3px;
  left: -105px; 
  transform: scaleX(-1);
  z-index: 3;
  width: 50px;
  height: 50px;
  background-image: url(../../public/images/Icon/ozdobnik_brown.png);
  background-size: contain;
  background-repeat: no-repeat;
  transform-origin: bottom right;
}
.gallery-grid {
  padding: 1rem;
}
.image-wrapper {
  overflow: hidden;
  position: relative;
}
.zoomable {
  transition: transform 0.5s ease;
  transform-origin: center center;
}
.image-wrapper:hover .zoomable {
  transform: scale(1.1);
}
hr {
  width: 85%;
  border-radius: 40px;
  border: 1.5px var(--color-first) solid;
  margin: 1rem auto;
}
.image-title {
  font-size: 1.2rem;
  font-family: 'Zodiak', sans-serif;
  position: relative;
}
</style>
