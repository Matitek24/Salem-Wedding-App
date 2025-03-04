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
        lastName: lastName.value
      }
    });

    alertMessage.value = 'Dane zapisane pomyślnie!';
    alertVariant.value = 'alert-success';
    firstName.value = '';
    lastName.value = '';
  } catch (error) {
    alertMessage.value = 'Błąd podczas wysyłania danych!';
    alertVariant.value = 'alert-danger';
    firstName.value = '';
    lastName.value = '';
  }
};
</script>

<style>
.position-fixed {
  z-index: 1050;
}
</style>
