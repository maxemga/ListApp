<template>
  <div class="auth">
    <layout />
  </div>
</template>

<script>
import { isAuth } from '@/lib/utils/user'
import { mapMutations } from 'vuex'
import Layout from './components/Form/App.vue'

export default {
  name: 'Auth',
  components: { Layout },
  mounted() {
    if (isAuth()) {
      this.$router.push('/list/users')
    }
  },
  data() {
    return {
      users: [],
      isOpen: false,
    }
  },
  methods: mapMutations(['setAuth']),
}
</script>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: var(--auth-form-width);
  height: 100vh;
}
</style>
