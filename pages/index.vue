<script setup>
import { useHead } from '#imports'

useHead({
  title: 'Salem Wedding',
  meta: [
    { name: 'description', content: '' },
    { property: 'og:title', content: '' },
    { property: 'og:description', content: '' }
  ]
})
  </script>

<template>
   <div class="container">
    <div class="d-flex justify-content-centere align-items-center flex-column tittle">
      <h1>Twoja Ślubna Historia</h1>
      <p>To chwile zamknięte w naszych kadrach</p>
      <hr>
    </div>
    <Slogan />
   </div>
  </template>
  
  <style scoped>
  .tittle {
    padding: 4rem;
    text-align: center;
  }
  .tittle h1{
    font-family: 'Zodiak', Times, serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2.1rem;
  }
  .tittle p{
    font-family: 'Zodiak', Times, serif;
    font-weight: 300;
    letter-spacing: 2px;
    font-size:0.9rem;
    margin-top:-8px;
  }
  .tittle hr {
  margin-top: 3rem;
  width: 100vw;
  border: 1px solid;
  border-radius: 100px;
  border-color: var(--color-first); /* Użycie zmiennej */
}

  </style>
  