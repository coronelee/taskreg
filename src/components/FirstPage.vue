<script setup>
defineProps({
  editData: Function,
  deleteWord: Function
})
</script>

<template>
  <div
    class="grid grid-cols-2 w-full h-full gap-1 [&>input]:p-1 [&>input]:outline-none [&>input]:rounded [&>select]:p-1 max-[830px]:grid-cols-1 max-[830px]:[&>span]:text-center"
  >
    <span>Фамилия*</span>
    <input type="text" @input="editData($event, 'surname')" />
    <span>Имя*</span><input type="text" @input="editData($event, 'name')" /> <span>Отчество</span
    ><input type="text" @input="editData($event, 'patronymic')" /> <span>Дата рождения*</span
    ><input type="date" @input="editData($event, 'date')" /> <span>Номер телефона*</span
    ><input type="text" @input="editData($event, 'phone')" maxlength="11" />
    <span>Пол</span>
    <select name="" id="" @click="editData($event, 'gender')" required>
      <option value="man">Мужской</option>
      <option value="female">Женский</option>
    </select>
    <span>Группа клиентов*</span>
    <select name="" id="" @click="editData($event, 'group')">
      <option value="VIP">VIP</option>
      <option value="Проблемные">Проблемные</option>
      <option value="ОМС">ОМС</option>
    </select>
    <span>Лечащий врач</span
    ><select name="" id="" @click="editData($event, 'doctor')">
      <option value="Иванов">Иванов</option>
      <option value="Захаров">Захаров</option>
      <option value="Чернышева">Чернышева</option>
    </select>
    <span>Не отправлять СМС</span><input type="checkbox" @click="editData($event, 'onMessage')" />
  </div>
</template>
