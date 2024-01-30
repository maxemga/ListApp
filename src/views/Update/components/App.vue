<template>
  <div class="update">
    <div class="update__wrapper">
      <router-view></router-view>

      <back />
    </div>
  </div>
</template>

<script>
import Back from './Back.vue'

export default {
  components: { Back },
  name: 'Layout',
}
</script>

<style scoped>
.update__wrapper {
  box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.fields {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
