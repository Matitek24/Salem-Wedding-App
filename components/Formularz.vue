<template>
  <div class="d-flex justify-content-center">
    <div class="w-50">
      <div v-if="alertMessage" :class="['alert', alertVariant]" role="alert">
        {{ alertMessage }}
      </div>
      <form @submit.prevent="submitForm" class="container mt-4 p-4 border rounded shadow-sm bg-light">
        <div class="mb-3">
          <label for="firstName" class="form-label">Imię:</label>
          <input type="text" id="firstName" v-model="firstName" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Nazwisko:</label>
          <input type="text" id="lastName" v-model="lastName" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="weddingDate" class="form-label">Data Wesela:</label>
          <input type="date" id="weddingDate" v-model="weddingDate" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="weddingLocation" class="form-label">Miejsce Wesela:</label>
          <input type="text" id="weddingLocation" v-model="weddingLocation" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="marriageLocation" class="form-label">Miejsce Ślubu:</label>
          <input type="text" id="marriageLocation" v-model="marriageLocation" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Wyślij</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRuntimeConfig } from '#app';

const firstName = ref('');
const lastName = ref('');
const weddingDate = ref('');
const weddingLocation = ref('');
const marriageLocation = ref('');
const alertMessage = ref('');
const alertVariant = ref('');

const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000';

const submitForm = async () => {
  try {
    const response = await $fetch(`${apiUrl}/api/submit-form`, {
      method: 'POST',
      body: {
        firstName: firstName.value,
        lastName: lastName.value,
        weddingDate: weddingDate.value,
        weddingLocation: weddingLocation.value,
        marriageLocation: marriageLocation.value,
      }
    });

    alertMessage.value = 'Dane zapisane pomyślnie!';
    alertVariant.value = 'alert-success';
    firstName.value = '';
    lastName.value = '';
    weddingDate.value = '';
    weddingLocation.value = '';
    marriageLocation.value = '';
  } catch (error) {
    alertMessage.value = 'Błąd podczas wysyłania danych!';
    alertVariant.value = 'alert-danger';
  }
};
</script>

<style>
.position-fixed {
  z-index: 1050;
}
</style>
