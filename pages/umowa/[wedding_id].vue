<template>
    <div class="container mt-4">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">Formularz umowy {{ weddingId }}</h5>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Imię</label>
                <input v-model="form.imie" type="text" class="form-control" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Nazwisko</label>
                <input v-model="form.nazwisko" type="text" class="form-control" required />
              </div>
  
              <div class="col-md-6">
                <label class="form-label">PESEL</label>
                <input v-model="form.pesel" type="text" class="form-control" maxlength="11" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Nr Dowodu</label>
                <input v-model="form.nr_dowodu" type="text" class="form-control" />
              </div>
  
              <div class="col-md-6">
                <label class="form-label">Telefon Pana Młodego</label>
                <input v-model="form.telefon_mlodego" type="text" class="form-control" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Telefon Pani Młodej</label>
                <input v-model="form.telefon_mlodej" type="text" class="form-control" required />
              </div>
  
              <div class="col-md-6">
                <label class="form-label">Sala Weselna</label>
                <input v-model="form.sala" type="text" class="form-control" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Kościół</label>
                <input v-model="form.koscol" type="text" class="form-control" required />
              </div>
  
              <div class="col-md-12">
                <label class="form-label">Adres</label>
                <textarea v-model="form.adres" class="form-control" rows="2" required></textarea>
              </div>
  
              <div class="col-md-6">
                <label class="form-label">NIP</label>
                <input v-model="form.nip" type="text" class="form-control" maxlength="10" />
              </div>
  
        
            </div>
  
            <div class="mt-4 d-flex justify-content-end">
              <button type="submit" class="btn btn-success">Zapisz umowę</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { reactive, ref, onMounted } from 'vue'
  import { useRoute, useRuntimeConfig } from '#app'
  
  const route = useRoute()
  const weddingId = route.params.wedding_id
  
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
  
  // Ref do przechowywania danych wesela
  const wedding = ref(null)
  // Ref do komunikatu alertu
  const alertMessage = ref('')
  
  // Funkcja pobierająca dane wesela z backendu
  const loadWedding = async () => {
    try {
      console.log('Pobieranie danych wesela o ID:', weddingId)
      wedding.value = await $fetch(`${apiUrl}/api/weddings/${weddingId}`)
      // Ustawienie domyślnych wartości formularza, jeśli dane są dostępne
      form.sala = wedding.value.sala || ''
      form.koscol = wedding.value.koscol || ''
      console.log('Dane wesela:', wedding.value)
    } catch (error) {
      console.error('Błąd przy pobieraniu danych wesela:', error)
    }
  }
  
  // Funkcja wysyłająca dane formularza do backendu
  const submitForm = async () => {
    try {
      console.log('Wysyłanie formularza z danymi:', JSON.stringify(form))
      const response = await $fetch(`${apiUrl}/api/umowy`, {
        method: 'POST',
        body: form,
      })
      console.log('Odpowiedź z backendu:', response)
      alertMessage.value = 'Dziękujemy, umowa została wysłana!'
      // Reset formularza (opcjonalnie)
      resetForm()
    } catch (error) {
      console.error('Błąd podczas wysyłania formularza:', error)
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
  /* Dodatkowe style opcjonalne */
  </style>
  