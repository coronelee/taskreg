<script setup>
defineProps({
  editData: Function
})
</script>

<template>
  <div
    class="grid grid-cols-2 h-full w-full gap-1 [&>input]:p-1 [&>input]:outline-none [&>input]:rounded [&>select]:p-1 max-[830px]:grid-cols-1 max-[830px]:[&>span]:text-center"
  >
    <span>Индекс</span> <input type="text" @input="editData($event, 'index')" /> <span>Страна</span
    ><input type="text" @input="editData($event, 'country')" /> <span>Область</span
    ><input type="text" @input="editData($event, 'region')" /> <span>Город*</span
    ><input type="text" @input="editData($event, 'city')" /> <span>Улица</span
    ><input type="text" @input="editData($event, 'street')" /> <span>Дом</span
    ><input type="text" @input="editData($event, 'home')" />
  </div>
</template>
