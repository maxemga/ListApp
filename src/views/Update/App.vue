<template>
  <div class="update">
    <layout />
  </div>
</template>

<script>
import { isAuth } from '@/lib/utils/user'
import Layout from './components/App.vue'

export default {
  name: 'Update',
  components: { Layout },
  mounted() {
    if (!isAuth()) {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.update {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: var(--update-form-width);
  height: 100vh;
}
</style>
