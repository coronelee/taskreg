<script setup>
defineProps({
  data: Array,
  editData: Function
})
</script>

<template>
  <div
    class="flex items-center justify-center flex-col max-[830px]:grid-cols-1 max-[830px]:[&>span]:text-center"
  >
    <h1 class="capitalize">{{ data.name }} {{ data.surname }},</h1>
    <h1 class="text-center">Вы успешно зарегистрировались!</h1>
  </div>
</template>
