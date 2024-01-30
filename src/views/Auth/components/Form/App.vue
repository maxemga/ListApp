<template>
  <div class="form">
    <div class="form__wrapper">
      <h2>Вход</h2>

      <div class="fields">
        <app-input placeholder="Логин" v-model="login" />

        <app-input placeholder="Пароль" type="password" v-model="password" />
      </div>

      <app-button title="Авторизоваться" @click="handleClick" />

      <notifications group="foo" />

      <info />
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/Input/App.vue'
import AppButton from '@/components/Button/App.vue'
import Info from './Info.vue'

import { getUsers } from '../../dataLayer'

import { mapMutations } from 'vuex'

export default {
  components: { AppInput, AppButton, Info },
  name: 'FormModal',
  comments: { AppInput },
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    setAuth: mapMutations(['setAuth']).setAuth,
    async handleClick() {
      try {
        const data = await getUsers({
          username: this.login,
          password: this.password,
        })

        this.setAuth({ user: data, token: data.token })

        this.$router.push('/list/users')
      } catch (error) {
        this.notifyError()
      }
    },
    notifyError() {
      this.$notify({
        group: 'foo',
        type: 'error',
        title: 'Ошибка авторизации',
        text: 'Неверный логин или пароль',
      })
    },
  },
}
</script>

<style scoped>
.form {
  box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
}

.form__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 30px;
}

.fields {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
