<template>
  <div class="d-flex justify-content-center">
    <div class="w-50">
      <!-- Ogólny alert -->
      <div
        v-if="alert.message"
        :class="['alert', alert.variant, 'alert-dismissible', 'fade', 'show']"
        role="alert" >
        {{ alert.message }}
        <button type="button" class="btn-close" @click="clearAlert" aria-label="Close"></button>
      </div>

      <form @submit.prevent="submitForm" class="container mt-4 p-4 border rounded shadow-sm bg-light">
        <div class="mb-3">
          <label for="firstName" class="form-label">Imię:</label>
          <input type="text" id="firstName" v-model="form.firstName" class="form-control" placeholder="Wpisz Imię"
          />
          <small v-if="errors.firstName" class="text-danger">{{ errors.firstName }}</small>
        </div>

        <div class="mb-3">
          <label for="lastName" class="form-label">Nazwisko:</label>
          <input type="text" id="lastName" v-model="form.lastName" class="form-control" placeholder="Wpisz Nazwisko"
          />
          <small v-if="errors.lastName" class="text-danger">{{ errors.lastName }}</small>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Wpisz Email"
          />
          <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
        </div>

        <div class="mb-3">
          <label for="weddingDate" class="form-label">Data Ślubu:</label>
          <input type="date" id="weddingDate" v-model="form.weddingDate" class="form-control"
          />
          <small v-if="errors.weddingDate" class="text-danger">{{ errors.weddingDate }}</small>
        </div>
        <div class="mb-3">
          <label for="weddingLocation" class="form-label">Miejsce Przyjęcia:</label>
          <input type="text" id="weddingLocation" v-model="form.weddingLocation" class="form-control" placeholder="Miejscowość"
          />
        </div>

        <div class="mb-3">
          <label for="marriageLocation" class="form-label">Miejsce Ślubu:</label>
          <input type="text" id="marriageLocation" v-model="form.marriageLocation" class="form-control" placeholder="Miejscowość"
          />
        </div>

        <button type="submit" class="btn btn-primary">Wyślij</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000';

// Obiekt z danymi formularza
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  weddingDate: '',
  weddingLocation: '',
  marriageLocation: ''
});


const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  weddingDate: ''
});


const alert = reactive({
  message: '',
  variant: ''
});

const clearAlert = () => {
  alert.message = '';
  alert.variant = '';
};

const validateForm = () => {
  let valid = true;
  // Resetujemy błędy
  errors.firstName = '';
  errors.lastName = '';
  errors.email = '';
  errors.weddingDate = '';

  if (!form.firstName.trim()) {
    errors.firstName = 'Podaj imię.';
    valid = false;
  }
  if (!form.lastName.trim()) {
    errors.lastName = 'Podaj nazwisko.';
    valid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    errors.email = 'Podaj poprawny adres email.';
    valid = false;
  }
  if (!form.weddingDate) {
    errors.weddingDate = 'Wybierz datę wesela.';
    valid = false;
  }

  return valid;
};

const clearForm = () => {
  form.firstName = '';
  form.lastName = '';
  form.email = '';
  form.weddingDate = '';
  form.weddingLocation = '';
  form.marriageLocation = '';
};

const submitForm = async () => {
  if (!validateForm()) {
    alert.message = 'Sprawdź poprawność wprowadzonych danych.';
    alert.variant = 'alert-danger';
    return;
  }

  try {
    // Weryfikacja dostępności terminu
    const availabilityResponse = await $fetch(`${apiUrl}/api/check-availability`, {
      method: 'POST',
      body: {
        weddingDate: form.weddingDate,
        email: form.email
      }
    });

    if (!availabilityResponse.available) {
      alert.message = 'Termin jest zajęty, sprawdź maila!';
      alert.variant = 'alert-danger';
    } else {
      alert.message = 'Termin jest wolny, ofertę wysłaliśmy na maila!';
      alert.variant = 'alert-success';
    }

    // Wysyłamy pełne dane formularza do endpointu
    await $fetch(`${apiUrl}/api/submit-form`, {
      method: 'POST',
      body: { ...form }
    });

    alert.message = 'Dane zapisane pomyślnie!';
    alert.variant = 'alert-success';
    clearForm();
  } catch (error) {
    alert.message = `Błąd podczas wysyłania danych: ${error.message}`;
    alert.variant = 'alert-danger';
  }
};
</script>

<style scoped>

</style>
