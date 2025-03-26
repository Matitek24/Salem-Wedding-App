<template>
  <div class="d-flex justify-content-center">
    <div class="w-50">
      <!-- Alert dostępności terminu -->
      <div
        v-if="availabilityAlert.message"
        :class="['alert', availabilityAlert.variant, 'alert-dismissible', 'fade', 'show']"
        role="alert">
        {{ availabilityAlert.message }}
        <button type="button" class="btn-close" @click="clearAvailabilityAlert" aria-label="Close"></button>
      </div>

      <!-- Alert zapisu formularza -->
      <div
        v-if="submissionAlert.message"
        :class="['alert', submissionAlert.variant, 'alert-dismissible', 'fade', 'show']"
        role="alert">
        {{ submissionAlert.message }}
        <button type="button" class="btn-close" @click="clearSubmissionAlert" aria-label="Close"></button>
      </div>

      <form @submit.prevent="submitForm" class="container mt-4 p-4 border rounded shadow-sm bg-light">
        <!-- Imię -->
        <div class="mb-3">
          <label for="firstName" class="form-label">Imię:</label>
          <input type="text" id="firstName" v-model="form.firstName" class="form-control" placeholder="Wpisz imię" />
          <small v-if="errors.firstName" class="text-danger">{{ errors.firstName }}</small>
        </div>

        <!-- Miejscowość -->
        <div class="mb-3">
          <label for="miejscowosc" class="form-label">Miejscowość:</label>
          <input type="text" id="miejscowosc" v-model="form.miejscowosc" class="form-control" placeholder="Wpisz miejscowość" />
          <small v-if="errors.miejscowosc" class="text-danger">{{ errors.miejscowosc }}</small>
        </div>

        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Wpisz email" />
          <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
        </div>

        <!-- Data -->
        <div class="mb-3">
          <label for="weddingDate" class="form-label">Data:</label>
          <input type="date" id="weddingDate" v-model="form.weddingDate" class="form-control" />
          <small v-if="errors.weddingDate" class="text-danger">{{ errors.weddingDate }}</small>
        </div>

        <!-- Wybór zakresu usług -->
        <div class="mb-3">
          <label class="form-label">Wybierz zakres usług:</label>
          <div class="d-flex justify-content-center">
            <div class="form-check m-2">
              <input type="checkbox" id="serviceFoto" class="form-check-input" value="foto" v-model="form.services">
              <label for="serviceFoto" class="form-check-label">Foto</label>
            </div>
            <div class="form-check m-2">
              <input type="checkbox" id="serviceFilm" class="form-check-input" value="film" v-model="form.services">
              <label for="serviceFilm" class="form-check-label">Film</label>
            </div>
            <div class="form-check m-2">
              <input type="checkbox" id="serviceFotoplener" class="form-check-input" value="fotoplener" v-model="form.services">
              <label for="serviceFotoplener" class="form-check-label">Fotoplener</label>
            </div>
          </div>
          <small v-if="errors.services" class="text-danger">{{ errors.services }}</small>
        </div>

        <hr />

        <!-- Checkbox zgody na otrzymywanie informacji -->
        <div class="d-flex flex-column align-items-start">
          <div class="mb-3 form-check">
            <input type="checkbox" id="consentInfo" v-model="form.consentInfo" class="form-check-input">
            <label for="consentInfo" class="form-check-label">Wyrażam zgodę na otrzymywanie informacji</label>
            <small v-if="errors.consentInfo" class="text-danger">{{ errors.consentInfo }}</small>
          </div>

          <!-- Checkbox akceptacji RODO -->
          <div class="mb-3 form-check">
            <input type="checkbox" id="consentRodo" v-model="form.consentRodo" class="form-check-input">
            <label for="consentRodo" class="form-check-label">Akceptuję RODO</label>
            <small v-if="errors.consentRodo" class="text-danger">{{ errors.consentRodo }}</small>
          </div>
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
  miejscowosc: '', // dodane pole miejscowość
  email: '',
  weddingDate: '',
  services: [],
  consentInfo: false,
  consentRodo: false
});

// Obiekt na błędy walidacji
const errors = reactive({
  firstName: '',
  miejscowosc: '', // walidacja miejscowości
  email: '',
  weddingDate: '',
  services: '',
  consentInfo: '',
  consentRodo: ''
});

// Dwa oddzielne alerty
const availabilityAlert = reactive({
  message: '',
  variant: ''
});
const submissionAlert = reactive({
  message: '',
  variant: ''
});

const clearAvailabilityAlert = () => {
  availabilityAlert.message = '';
  availabilityAlert.variant = '';
};
const clearSubmissionAlert = () => {
  submissionAlert.message = '';
  submissionAlert.variant = '';
};

const validateForm = () => {
  let valid = true;
  errors.firstName = '';
  errors.miejscowosc = '';
  errors.email = '';
  errors.weddingDate = '';
  errors.services = '';
  errors.consentInfo = '';
  errors.consentRodo = '';

  if (!form.firstName.trim()) {
    errors.firstName = 'Podaj imię.';
    valid = false;
  }
  if (!form.miejscowosc.trim()) {
    errors.miejscowosc = 'Podaj miejscowość.';
    valid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    errors.email = 'Podaj poprawny adres email.';
    valid = false;
  }
  if (!form.weddingDate) {
    errors.weddingDate = 'Wybierz datę.';
    valid = false;
  }
  if (form.services.length === 0) {
    errors.services = 'Wybierz przynajmniej jedną usługę.';
    valid = false;
  }
  if (!form.consentInfo) {
    errors.consentInfo = ' - Musisz wyrazić zgodę na otrzymywanie informacji.';
    valid = false;
  }
  if (!form.consentRodo) {
    errors.consentRodo = ' - Musisz zaakceptować RODO.';
    valid = false;
  }
  return valid;
};

const clearForm = () => {
  form.firstName = '';
  form.miejscowosc = '';
  form.email = '';
  form.weddingDate = '';
  form.services = [];
  form.consentInfo = false;
  form.consentRodo = false;
};

const submitForm = async () => {
  if (!validateForm()) {
    submissionAlert.message = 'Sprawdź poprawność wprowadzonych danych.';
    submissionAlert.variant = 'alert-danger';
    return;
  }

  try {
    // Weryfikacja dostępności terminu
    const availabilityResponse = await $fetch(`${apiUrl}/api/check-availability`, {
      method: 'POST',
      body: {
        weddingDate: form.weddingDate,
        email: form.email,
        packages: form.services
      }
    });

    if (!availabilityResponse.available) {
      availabilityAlert.message = 'Termin jest zajęty dla wybranych usług, sprawdź maila!';
      availabilityAlert.variant = 'alert-danger';

      if (availabilityResponse.unavailablePackages && availabilityResponse.unavailablePackages.length > 0) {
        availabilityAlert.message += ' Niedostępne pakiety: ' + 
          availabilityResponse.unavailablePackages.join(', ');
      }
    } else {
      availabilityAlert.message = 'Termin jest wolny, ofertę wysłaliśmy na maila!';
      availabilityAlert.variant = 'alert-success';
    }

    const submissionData = {
      firstName: form.firstName,
      miejscowosc: form.miejscowosc, // dodane pole miejscowość
      email: form.email,
      weddingDate: form.weddingDate,
      services: form.services.join('+')
    };

    await $fetch(`${apiUrl}/api/submit-form`, {
      method: 'POST',
      body: submissionData
    });

    submissionAlert.message = 'Dane zapisane pomyślnie!';
    submissionAlert.variant = 'alert-success';
    clearForm();
  } catch (error) {
    submissionAlert.message = `Błąd podczas wysyłania danych: ${error.message}`;
    submissionAlert.variant = 'alert-danger';
  }
};
</script>

<style scoped>
/* Opcjonalnie: możesz dodać własne style */
</style>
