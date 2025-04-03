<template>
  <div class="form-container">
    <div class="form-overlay-card">
      <div class="card-body p-4">
        <div v-if="alertMessage" class="alert alert-warning alert-dismissible fade show">
          {{ alertMessage }}
          <button type="button" class="btn-close" @click="alertMessage = ''"></button>
        </div>
        
        <div class="d-flex justify-content-center tytul">
          <div class="mb-5 m-4 text-center">
            <img src="../../public/images/Icon/ozdobnik_brown.png" alt="" style="width:100px;" class="mb-3">
            <h3>FORMULARZ UMOWY</h3>
            <p>*Wypełnij wszelkie niezbędne informacje</p>
            <hr>
          </div>
        </div>
        
        <form @submit.prevent="submitForm">
          <div class="row g-3 justify-content-center">
            <!-- Imię i Nazwisko -->
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingImie" class="form-label">Imię:</label>
                <input v-model="form.imie" type="text" class="form-control" id="floatingImie" placeholder="Wpisz imię">
                <small v-if="errors.imie" class="text-danger">{{ errors.imie }}</small>
              </div>
            </div>
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingNazwisko" class="form-label">Nazwisko:</label>
                <input v-model="form.nazwisko" type="text" class="form-control" id="floatingNazwisko" placeholder="Wpisz nazwisko">
                <small v-if="errors.nazwisko" class="text-danger">{{ errors.nazwisko }}</small>
              </div>
            </div>

            <!-- PESEL i Nr Dowodu -->
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingPesel" class="form-label">PESEL:</label>
                <input v-model="form.pesel" type="text" class="form-control" id="floatingPesel" placeholder="Wpisz PESEL" maxlength="11">
                <small v-if="errors.pesel" class="text-danger">{{ errors.pesel }}</small>
              </div>
            </div>
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingDowod" class="form-label">Nr Dowodu:</label>
                <input v-model="form.nr_dowodu" type="text" class="form-control" id="floatingDowod" placeholder="Wpisz nr dowodu">
                <small v-if="errors.nr_dowodu" class="text-danger">{{ errors.nr_dowodu }}</small>
              </div>
            </div>

            <!-- Pakiet i Adres -->
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingPakiet" class="form-label">Pakiet:</label>
                <select v-model="form.pakiet" class="form-select" id="floatingPakiet">
                  <option disabled value="">Wybierz pakiet</option>
                  <option value="foto">foto</option>
                  <option value="film">film</option>
                  <option value="foto+film">foto+film</option>
                  <option value="foto+film+fotoplener">foto+film+fotoplener</option>
                  <option value="foto+fotoplener">foto+fotoplener</option>
                </select>
                <small v-if="errors.pakiet" class="text-danger">{{ errors.pakiet }}</small>
              </div>
            </div>
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingAdres" class="form-label">Adres:</label>
                <input v-model="form.adres" type="text" class="form-control" id="floatingAdres" placeholder="Wpisz adres">
                <small v-if="errors.adres" class="text-danger">{{ errors.adres }}</small>
              </div>
            </div>

            <!-- Telefon i Data -->
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingTelMlody" class="form-label">Telefon:</label>
                <input v-model="form.telefon_mlodego" type="text" class="form-control" id="floatingTelMlody" placeholder="Wpisz numer telefonu">
                <small v-if="errors.telefon_mlodego" class="text-danger">{{ errors.telefon_mlodego }}</small>
              </div>
            </div>
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingData" class="form-label">Data:</label>
                <input v-model="form.data" type="date" class="form-control" id="floatingData">
                <small v-if="errors.data" class="text-danger">{{ errors.data }}</small>
              </div>
            </div>

            <!-- Sala i Kościół -->
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingSala" class="form-label">Sala:</label>
                <input v-model="form.sala" type="text" class="form-control" id="floatingSala" placeholder="Wpisz nazwę sali">
                <small v-if="errors.sala" class="text-danger">{{ errors.sala }}</small>
              </div>
            </div>
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingKoscol" class="form-label">Kościół:</label>
                <input v-model="form.koscol" type="text" class="form-control" id="floatingKoscol" placeholder="Wpisz nazwę kościoła">
                <small v-if="errors.koscol" class="text-danger">{{ errors.koscol }}</small>
              </div>
            </div>

            <!-- Dron -->
            <div class="col-md-5">
              <div class="mb-3">
                <label for="floatingDron" class="form-label">Dron:</label>
                <select v-model="form.dron" class="form-select" id="floatingDron">
                  <option :value="true">Tak</option>
                  <option :value="false">Nie</option>
                </select>
                <small v-if="errors.dron" class="text-danger">{{ errors.dron }}</small>
              </div>
            </div>
          </div>

          <!-- Zgody -->
          <div class="d-flex flex-column align-items-center mt-4">
            <div class="mb-3 w-75 text-start form-check">
              <input type="checkbox" id="consentRodo" class="form-check-input" v-model="consentRodo">
              <label for="consentRodo" class="form-check-label ps-3">
                *Zapoznałem/am się z informacjami o administratorze oraz przetwarzaniu moich danych osobowych i akceptuję 
                <a href="#">regulamin RODO</a>
              </label>
              <small v-if="errors.rodo" class="text-danger">{{ errors.rodo }}</small>
            </div>
          </div>

          <div class="mt-4 d-flex justify-content-center">
            <button type="submit" class="btn btn-lg px-5">
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

// Jeśli brakuje parametru "signature", przekierowujemy użytkownika
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
  pakiet: '',
  adres: '',
  telefon_mlodego: '',
  sala: '',
  koscol: '',
  data: '',
  dron: false,
})

// Obiekt na błędy walidacji
const errors = reactive({
  imie: '',
  nazwisko: '',
  pesel: '',
  nr_dowodu: '',
  pakiet: '',
  adres: '',
  sala: '',
  koscol: '',
  telefon_mlodego: '',
  data: '',
  rodo: ''
})

// Zmienna dla zgody RODO
const consentRodo = ref(false)

// Alert do komunikatów
const alertMessage = ref('')
const wedding = ref(null)

// Funkcja pobierająca dane wesela z backendu
const loadWedding = async () => {
  try {
    wedding.value = await $fetch(`${apiUrl}/api/weddings/${weddingId}${window.location.search}`)
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
  let valid = true
  // Czyścimy poprzednie błędy
  errors.imie = ''
  errors.nazwisko = ''
  errors.pesel = ''
  errors.nr_dowodu = ''
  errors.pakiet = ''
  errors.adres = ''
  errors.telefon_mlodego = ''
  errors.sala = ''
  errors.koscol = ''
  errors.data = ''
  errors.rodo = ''

  if (!form.imie.trim()) {
    errors.imie = 'Podaj imię.'
    valid = false
  }
  if (!form.nazwisko.trim()) {
    errors.nazwisko = 'Podaj nazwisko.'
    valid = false
  }
  if (!form.pesel.trim() || !/^\d{11}$/.test(form.pesel)) {
    errors.pesel = 'PESEL powinien składać się z 11 cyfr.'
    valid = false
  }
  if (!form.nr_dowodu.trim() || form.nr_dowodu.trim().length < 5) {
    errors.nr_dowodu = 'Nr dowodu powinien zawierać przynajmniej 5 znaków.'
    valid = false
  }
  if (!form.pakiet.trim()) {
    errors.pakiet = 'Wybierz pakiet.'
    valid = false
  }
  if (!form.adres.trim() || form.adres.trim().length < 10) {
    errors.adres = 'Podaj pełny adres (minimum 10 znaków).'
    valid = false
  }
  if (!form.telefon_mlodego.trim()) {
    errors.telefon_mlodego = 'Podaj telefon pana młodego.'
    valid = false
  }
  if (!form.data) {
    errors.data = 'Podaj datę.'
    valid = false
  }
  if (!form.sala.trim()) {
    errors.sala = 'Podaj nazwę sali.'
    valid = false
  }
  if (!form.koscol.trim()) {
    errors.koscol = 'Podaj nazwę kościoła.'
    valid = false
  }
  if (!consentRodo.value) {
    errors.rodo = 'Musisz zaakceptować regulamin RODO.'
    valid = false
  }

  return valid
}

// Funkcja wysyłająca formularz do backendu
const submitForm = async () => {
  if (!validateForm()) {
    alertMessage.value = 'Proszę poprawić błędy w formularzu.'
    return
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
  form.pakiet = ''
  form.adres = ''
  form.telefon_mlodego = ''
  form.data = ''
  form.sala = ''
  form.koscol = ''
  form.dron = false
  consentRodo.value = false
}

onMounted(() => {
  loadWedding()
})
</script>

<style scoped>
.tytul h3{
  color: var(--color-first)
}
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
  background-color: grey;
}

/* Style z drugiego formularza */
img {
  transform: scaleX(-1);
}

h3 {
  color: var(--color-second);
  font-family: "HedvigLettersSerif";
}

.btn-close {
  background-color: transparent;
}

.btn-close:hover {
  background-color: transparent;
}

form button {
  background-color: var(--color-fourth);
  border: none;
  color: white;
  transition: all 0.3s ease;
  margin-bottom:40px;
}

form button:hover {
  background-color: var(--color-fourth-click);
  border: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form {
  color: var(--color-fourth);
  font-family: "HedvigLettersSerif";
}

input[type=checkbox] {
  border: 1px solid rgb(130, 130, 130);
  width: 22px;
  height: 22px;
  border-radius: 0px;
}

input, select {
  border: 1px solid rgba(130, 130, 130, 0.685);
  border-radius: 0.375rem;
}

input:focus, select:focus {
  border-color: var(--color-fourth);
  box-shadow: 0 0 0 0.25rem rgba(var(--color-fourth-rgb), 0.25);
}

label {
  margin-bottom: 0.5rem;
}

.form-label {
  color: var(--color-fourth);
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
