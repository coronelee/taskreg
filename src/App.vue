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
  if (input == 'phone' || input == 'index' || input == 'series' || input == 'number') {
    event.target.value = event.target.value
      .replace(/[а-я]/gi, '')
      .replace(/[А-Я]/gi, '')
      .replace(/\D/g, '')
  }
  if (input == 'phone') {
    let phone = event.target.value.split('')
    phone[0] = 7
    event.target.value = phone.join('')
  }
}

const nextPage = () => {
  if (pages.value == 1) {
    if (data.value.name && data.value.surname && data.value.date && data.value.group) {
      error.value = false
      pages.value++
    } else {
      error.value = true
      setTimeout(() => (error.value = false), 4500)
    }
  } else if (pages.value == 2) {
    if (data.value.city) {
      error.value = false
      pages.value++
    } else {
      error.value = true
      setTimeout(() => (error.value = false), 4500)
    }
  } else if (pages.value == 3) {
    if (data.value.typeDoc && data.value.dateIssue) {
      error.value = false
      pages.value++
    } else {
      error.value = true

      setTimeout(() => (error.value = false), 4500)
    }
  }
}
</script>

<template>
  <div class="bg-slate-500 w-screen h-screen flex justify-center items-center">
    <div
      class="w-1/2 bg-slate-300 rounded-xl flex flex-col items-center p-10 relative max-[480px]:w-3/4 max-[480px]:p-5"
    >
      <div
        class="absolute text-white text-2xl w-3/4 p-2 text-center top-0 bg-red-500 animate-bounce rounded-xl"
        v-if="error"
      >
        Заполните все поля со звездочкой!
      </div>
      <div class="w-full">
        <component
          v-if="pages == 1"
          :is="FirstPage"
          :editData="editData"
          :deleteWord="deleteWord"
        />
        <component v-if="pages == 2" :is="SecondPage" :editData="editData" />
        <component v-if="pages == 3" :is="ThirdPage" :editData="editData" />
        <component v-if="pages == 4" :is="ResultRegistration" :editData="editData" :data="data" />
      </div>

      <div v-if="pages < 4" class="w-full flex justify-center">
        <button
          class="bg-blue-500 rounded-xl mt-2 p-2 text-white hover:bg-blue-700 transition-all duration-300 max-[830px]:w-full"
          @click="nextPage"
        >
          Следующая форма
        </button>
      </div>
    </div>
  </div>
</template>
