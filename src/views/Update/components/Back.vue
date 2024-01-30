<template>
  <div class="back" @click="handleClick">
    <span>Вернуться назад</span>
  </div>
</template>

<script>
export default {
  name: 'Back',
  methods: {
    handleClick() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.back {
  cursor: pointer;
  position: fixed;
  left: 10px;
  top: 10px;
  padding: 10px 15px;
  background: var(--violet);
  border-radius: 10px;
}

.back span {
  color: var(--white);
}
</style>
