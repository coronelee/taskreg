<script setup>
defineProps({
  data: Array,
  editData: Function
})
</script>

<template>
  <div class="flex items-center justify-center flex-col">
    <h1 class="capitalize">{{ data.name }} {{ data.surname }},</h1>
    <h1>Вы успешно зарегистрировались!</h1>
  </div>
</template>
