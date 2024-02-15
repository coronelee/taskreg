<script setup>
defineProps({
  editData: Function
})
</script>

<template>
  <div
    class="grid grid-cols-2 h-full w-full gap-1 [&>input]:p-1 [&>input]:outline-none [&>input]:rounded [&>select]:p-1 max-[830px]:grid-cols-1 max-[830px]:[&>span]:text-center"
  >
    <span>Тип документа*</span>
    <select name="" id="" @click="editData($event, 'typeDoc')" required>
      <option value="passport">Паспорт</option>
      <option value="birthCertificate">Свидетельство о рождении</option>
      <option value="driverLicense">Вод. удостоверение</option>
    </select>

    <span>Серия</span><input type="text" @input="editData($event, 'series')" /> <span>Номер</span
    ><input type="text" @input="editData($event, 'number')" /> <span>Кем выдан</span
    ><input type="text" @input="editData($event, 'whoIssued')" /> <span>Дата выдачи*</span
    ><input type="date" @input="editData($event, 'dateIssue')" />
  </div>
</template>
