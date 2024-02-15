<script setup>
import { ref } from 'vue'
const pages = ref(1)
const error = ref(false)
import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'
import ThirdPage from './components/ThirdPage.vue'
import ResultRegistration from './components/ResultRegistration.vue'
const data = ref({
  name: '',
  surname: '',
  patronymic: '',
  date: '',
  phone: '',
  gender: '',
  group: '',
  doctor: '',
  onMessage: false,
  index: '',
  country: '',
  region: '',
  city: '',
  street: '',
  home: '',
  typeDoc: '',
  series: '',
  number: '',
  whoIssued: '',
  dateIssue: ''
})

const editData = (event, input) => {
  data.value[input] = event.target.value
}

const nextPage = () => {
  if (pages.value == 1) {
    if (data.value.name && data.value.surname && data.value.date && data.value.group) {
      error.value = false
      pages.value++
    } else {
      error.value = true
    }
  } else if (pages.value == 2) {
    if (data.value.city) {
      error.value = false
      pages.value++
    } else {
      error.value = true
    }
  } else if (pages.value == 3) {
    if (data.value.typeDoc && data.value.dateIssue) {
      error.value = false
      pages.value++
    } else {
      error.value = true
    }
  }
}
</script>

<template>
  <div class="bg-slate-500 w-screen h-screen flex justify-center items-center">
    <div class="w-1/2 bg-slate-300 rounded-xl flex flex-col items-center p-10 relative">
      <div
        class="absolute text-white text-2xl w-3/4 h-10 text-center top-0 bg-red-500 animate-bounce rounded-xl"
        v-if="error"
      >
        Заполните все поля со звездочкой!
      </div>
      <div class="w-full p-5">
        <component v-if="pages == 1" :is="FirstPage" :editData="editData" />
        <component v-if="pages == 2" :is="SecondPage" :editData="editData" />
        <component v-if="pages == 3" :is="ThirdPage" :editData="editData" />
        <component v-if="pages == 4" :is="ResultRegistration" :editData="editData" :data="data" />
      </div>

      <div v-if="pages < 4" class="w-full flex justify-center">
        <button
          class="bg-blue-500 rounded-xl w-1/4 p-2 text-white hover:bg-blue-700 transition-all duration-300"
          @click="nextPage"
        >
          Следующая форма
        </button>
      </div>
    </div>
  </div>
</template>
