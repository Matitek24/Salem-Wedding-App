<template>
  <div class="form-container">
    <div class="form-overlay-card">
      <div class="card-header text-white py-3" style="background-color: grey;">
        <h5 class="mb-0">Formularz umowy {{ weddingId }}</h5>
      </div>
      <div class="card-body p-4">
        <div v-if="alertMessage" class="alert alert-warning alert-dismissible fade show">
          {{ alertMessage }}
          <button type="button" class="btn-close" @click="alertMessage = ''"></button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="row g-3">
            <!-- Imię -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.imie" type="text" class="form-control" id="floatingImie" placeholder="Imię">
                <label for="floatingImie">Imię</label>
              </div>
              <small v-if="errors.imie" class="text-danger">{{ errors.imie }}</small>
            </div>
            <!-- Nazwisko -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.nazwisko" type="text" class="form-control" id="floatingNazwisko" placeholder="Nazwisko">
                <label for="floatingNazwisko">Nazwisko</label>
              </div>
              <small v-if="errors.nazwisko" class="text-danger">{{ errors.nazwisko }}</small>
            </div>
            <!-- PESEL -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.pesel" type="text" class="form-control" id="floatingPesel" placeholder="PESEL" maxlength="11">
                <label for="floatingPesel">PESEL</label>
              </div>
              <small v-if="errors.pesel" class="text-danger">{{ errors.pesel }}</small>
            </div>
            <!-- Nr Dowodu -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.nr_dowodu" type="text" class="form-control" id="floatingDowod" placeholder="Nr Dowodu">
                <label for="floatingDowod">Nr Dowodu</label>
              </div>
              <small v-if="errors.nr_dowodu" class="text-danger">{{ errors.nr_dowodu }}</small>
            </div>
            <!-- Telefon Pana Młodego -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.telefon_mlodego" type="text" class="form-control" id="floatingTelMlody" placeholder="Telefon Pana Młodego">
                <label for="floatingTelMlody">Telefon Pana Młodego</label>
              </div>
              <small v-if="errors.telefon_mlodego" class="text-danger">{{ errors.telefon_mlodego }}</small>
            </div>
            <!-- Telefon Pani Młodej -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.telefon_mlodej" type="text" class="form-control" id="floatingTelMloda" placeholder="Telefon Pani Młodej">
                <label for="floatingTelMloda">Telefon Pani Młodej</label>
              </div>
              <small v-if="errors.telefon_mlodej" class="text-danger">{{ errors.telefon_mlodej }}</small>
            </div>
            <!-- Sala Weselna -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.sala" type="text" class="form-control" id="floatingSala" placeholder="Sala Weselna">
                <label for="floatingSala">Sala Weselna</label>
              </div>
              <small v-if="errors.sala" class="text-danger">{{ errors.sala }}</small>
            </div>
            <!-- Kościół -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.koscol" type="text" class="form-control" id="floatingKosciol" placeholder="Kościół">
                <label for="floatingKosciol">Kościół</label>
              </div>
              <small v-if="errors.koscol" class="text-danger">{{ errors.koscol }}</small>
            </div>
            <!-- Adres -->
            <div class="col-md-12">
              <div class="form-floating mb-1">
                <textarea v-model="form.adres" class="form-control" id="floatingAdres" placeholder="Adres" style="height: 80px"></textarea>
                <label for="floatingAdres">Adres</label>
              </div>
              <small v-if="errors.adres" class="text-danger">{{ errors.adres }}</small>
            </div>
            <!-- NIP -->
            <div class="col-md-6">
              <div class="form-floating mb-1">
                <input v-model="form.nip" type="text" class="form-control" id="floatingNip" placeholder="NIP" maxlength="10">
                <label for="floatingNip">NIP</label>
              </div>
              <small v-if="errors.nip" class="text-danger">{{ errors.nip }}</small>
            </div>
          </div>
  
          <div class="mt-4 d-flex justify-content-center">
            <button type="submit" class="btn btn-success btn-lg px-5">
              <i class="bi bi-check-circle me-2"></i>Zapisz umowę
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRuntimeConfig, useRouter } from '#app'

const route = useRoute()
const router = useRouter()
const weddingId = route.params.wedding_id

// Jeżeli brakuje parametru "signature", przekierowujemy użytkownika
if (!route.query.signature) {
  router.push('/')
}

const config = useRuntimeConfig()
const apiUrl = config.public.baseURL || 'http://127.0.0.1:8000'

// Definicja obiektu formularza
const form = reactive({
  wedding_id: weddingId,
  imie: '',
  nazwisko: '',
  pesel: '',
  nr_dowodu: '',
  adres: '',
  nip: '',
  telefon_mlodego: '',
  telefon_mlodej: '',
  sala: '',
  koscol: '',
})

// Obiekt na błędy walidacji
const errors = reactive({
  imie: '',
  nazwisko: '',
  pesel: '',
  nr_dowodu: '',
  adres: '',
  nip: '',
  telefon_mlodego: '',
  telefon_mlodej: '',
  sala: '',
  koscol: '',
})

const alertMessage = ref('')
const wedding = ref(null)

// Funkcja pobierająca dane wesela z backendu
const loadWedding = async () => {
  try {
    wedding.value = await $fetch(`${apiUrl}/api/weddings/${weddingId}${window.location.search}`)
    // Ustawiamy domyślne wartości dla sali i kościoła, jeśli są dostępne
    form.sala = wedding.value.sala || ''
    form.koscol = wedding.value.koscol || ''
  } catch (error) {
    console.error('Błąd przy pobieraniu danych wesela:', error)
    alertMessage.value = 'Brak uprawnień dostępu lub wygasł link. Następuje przekierowanie...'
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }
}

// Funkcja walidująca formularz
const validateForm = () => {
  let valid = true;
  // Czyścimy poprzednie błędy
  errors.imie = '';
  errors.nazwisko = '';
  errors.pesel = '';
  errors.nr_dowodu = '';
  errors.adres = '';
  errors.nip = '';
  errors.telefon_mlodego = '';
  errors.telefon_mlodej = '';
  errors.sala = '';
  errors.koscol = '';
  
  if (!form.imie.trim()) {
    errors.imie = 'Podaj imię.';
    valid = false;
  }
  if (!form.nazwisko.trim()) {
    errors.nazwisko = 'Podaj nazwisko.';
    valid = false;
  }
  if (!form.telefon_mlodego.trim()) {
    errors.telefon_mlodego = 'Podaj telefon pana młodego.';
    valid = false;
  }
  if (!form.telefon_mlodej.trim()) {
    errors.telefon_mlodej = 'Podaj telefon pani młodej.';
    valid = false;
  }
  if (!form.sala.trim()) {
    errors.sala = 'Podaj salę weselną.';
    valid = false;
  }
  if (!form.koscol.trim()) {
    errors.koscol = 'Podaj kościół.';
    valid = false;
  }
  if (!form.adres.trim() || form.adres.trim().length < 10) {
    errors.adres = 'Podaj pełny adres (minimum 10 znaków).';
    valid = false;
  }
  if (form.nip && !/^\d{10}$/.test(form.nip)) {
    errors.nip = 'NIP powinien składać się z 10 cyfr.';
    valid = false;
  }
  if (form.pesel && !/^\d{11}$/.test(form.pesel)) {
    errors.pesel = 'PESEL powinien składać się z 11 cyfr.';
    valid = false;
  }
  if (form.nr_dowodu && form.nr_dowodu.trim().length < 5) {
    errors.nr_dowodu = 'Nr dowodu powinien zawierać przynajmniej 5 znaków.';
    valid = false;
  }
  return valid;
}

// Funkcja wysyłająca formularz do backendu
const submitForm = async () => {
  if (!validateForm()) {
    alertMessage.value = 'Proszę poprawić błędy w formularzu.'
    return;
  }
  try {
    const response = await $fetch(`${apiUrl}/api/umowy?${window.location.search.slice(1)}`, {
      method: 'POST',
      body: form,
    })
    console.log('Odpowiedź z backendu:', response)
    alertMessage.value = 'Dziękujemy, umowa została wysłana!'
    resetForm()
  } catch (error) {
    console.error('Błąd podczas wysyłania formularza:', error)
    alertMessage.value = 'Wystąpił błąd podczas wysyłania formularza.'
  }
}

// Funkcja resetująca formularz
const resetForm = () => {
  form.imie = ''
  form.nazwisko = ''
  form.pesel = ''
  form.nr_dowodu = ''
  form.adres = ''
  form.nip = ''
  form.telefon_mlodego = ''
  form.telefon_mlodej = ''
  form.sala = ''
  form.koscol = ''
}

onMounted(() => {
  loadWedding()
})
</script>

<style scoped>
.form-container {
  position: absolute;
  top: 500px;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 10;
}

.form-overlay-card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: transform 0.3s ease;
  overflow: hidden;
}

.form-overlay-card:hover {
  transform: translateY(-5px);
}

.card-header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
}

.form-floating > label {
  color: #555;
}

.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-control {
  border-radius: 0.375rem;
}

.btn-success {
  background-color: #198754;
  transition: all 0.3s ease;
}

.btn-success:hover {
  background-color: #157347;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.alert {
  border-radius: 5px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-container {
    padding: 1rem;
  }
  
  .form-overlay-card {
    max-width: 100%;
  }
}
</style>