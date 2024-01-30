<template>
  <div class="info">
    <p>Валидные данные из API для входа</p>

    <div class="info-data">
      <p>Ник: kminchelle</p>
      <p>Пароль: 0lelplR</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      users: [],
      isOpen: false,
    }
  },
  methods: {},
}
</script>

<style scoped>
.info {
  color: var(--white);
  background: var(--orange-warn);
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  left: 10px;
  top: 10px;
}

.info-data {
  margin-top: 10px;
}
</style>
