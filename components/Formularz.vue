<template>
  <div class="d-flex justify-content-center">
    <div class="w-50">
      <div
        v-if="alertMessage"
        :class="['alert', alertVariant, 'alert-dismissible', 'fade', 'show']"
        role="alert"
        @click="hideAlert('alertMessage')"
      >
        {{ alertMessage }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div
        v-if="alertMessage2"
        :class="['alert', alertVariant2, 'alert-dismissible', 'fade', 'show']"
        role="alert"
        @click="hideAlert('alertMessage2')"
      >
        {{ alertMessage2 }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <form @submit.prevent="submitForm" class="container mt-4 p-4 border rounded shadow-sm bg-light">
        <div class="mb-3">
          <label for="firstName" class="form-label">Imię:</label>
          <input type="text" id="firstName" v-model="firstName" class="form-control" placeholder="Wpisz Imię" required />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Nazwisko:</label>
          <input type="text" id="lastName" v-model="lastName" class="form-control"  placeholder="Wpisz Nazwisko"  required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control" placeholder="Wpisz Email" required />
        </div>
        <div class="mb-3">
          <label for="weddingDate" class="form-label">Data Wesela:</label>
          <input type="date" id="weddingDate" v-model="weddingDate" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="weddingLocation" class="form-label">Miejsce Wesela:</label>
          <input type="text" id="weddingLocation" v-model="weddingLocation" class="form-control" placeholder="Miejscowosc" />
        </div>
        <div class="mb-3">
          <label for="marriageLocation" class="form-label">Miejsce Ślubu:</label>
          <input type="text" id="marriageLocation" v-model="marriageLocation" class="form-control" placeholder="Mijescowosc" />
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
const email = ref('');
const weddingDate = ref('');
const weddingLocation = ref('');
const marriageLocation = ref('');
const alertMessage = ref('');
const alertVariant = ref('');
const alertMessage2 = ref('');
const alertVariant2 = ref('');

const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000';
const alertDuration = 5000; // Czas wyświetlania alertów w milisekundach

const clearAlerts = () => {
  setTimeout(() => {
    alertMessage.value = '';
    alertVariant.value = '';
    alertMessage2.value = '';
    alertVariant2.value = '';
  }, alertDuration);
};
const clearForm = () => {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  weddingDate.value = '';
  weddingLocation.value = '';
  marriageLocation.value = '';
};

const hideAlert = (alertType) => {
  if (alertType === 'alertMessage') {
    alertMessage.value = '';
    alertVariant.value = '';
  } else if (alertType === 'alertMessage2') {
    alertMessage2.value = '';
    alertVariant2.value = '';
  }
};

const submitForm = async () => {
  try {
    const availabilityResponse = await $fetch(`${apiUrl}/api/check-availability`, {
      method: 'POST',
      body: { weddingDate: weddingDate.value }
    });

    if (!availabilityResponse.available) {
      alertMessage2.value = 'Termin jest zajęty, Informacje o innych terminach na mailu!';
      alertVariant2.value = 'alert-danger';
    } else {
      alertMessage2.value = 'Termin jest wolny, Oferte otrzymałeś na mailu!';
      alertVariant2.value = 'alert-success';
    }

    const response = await $fetch(`${apiUrl}/api/submit-form`, {
      method: 'POST',
      body: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        weddingDate: weddingDate.value,
        weddingLocation: weddingLocation.value,
        marriageLocation: marriageLocation.value,
      }
    });

    alertMessage.value = 'Dane zapisane pomyślnie!';
    alertVariant.value = 'alert-success';

   clearForm();

  } catch (error) {
    alertMessage.value = `Błąd podczas wysyłania danych: ${error.message}`;
    alertVariant.value = 'alert-danger';
  } finally {
    clearAlerts();
  }
};
</script>

<style>
.position-fixed {
  z-index: 1050;
}
</style>