<template>
  <div class="list">
    <div class="list__wrapper">
      <list-menu />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { isAuth } from '../../lib/utils/user'
import ListMenu from './components/Menu.vue'

export default {
  name: 'List',
  components: { ListMenu },
  mounted() {
    if (!isAuth()) {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.list__wrapper {
  width: 80%;
  display: flex;
  column-gap: 30px;
  margin: 0 auto;
}
</style>
