<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getToken, getUser, isAuth } from './lib/utils/user'

export default {
  name: 'App',
  mounted() {
    if (isAuth()) {
      const user = getUser()
      const token = getToken()

      this.setAuth({ user, token })
    }
  },
  methods: mapMutations(['setAuth']),
}
</script>
