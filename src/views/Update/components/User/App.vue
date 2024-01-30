<template>
  <div class="user">
    <header-component title="Редактирование данных пользователя" />

    <div class="fields">
      <div class="name">
        <div class="name-field">
          <app-input placeholder="Введите имя" v-model="user.firstName" />
        </div>
        <div class="name-field">
          <app-input placeholder="Введите фамилию" v-model="user.lastName" />
        </div>
      </div>

      <app-input placeholder="Введите email" v-model="user.email" />

      <app-input placeholder="Введите login" v-model="user.username" />
    </div>

    <app-button title="Редактировать" @click="handleClick" />
  </div>
</template>

<script>
import AppInput from '@/components/Input/App.vue'
import AppButton from '@/components/Button/App.vue'

import HeaderComponent from './../Header.vue'
import { getUser, updateUser } from '../../dataLayer'

export default {
  name: 'UserUpdate',
  components: { HeaderComponent, AppInput, AppButton },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
      },
    }
  },
  async mounted() {
    const id = this.$route.query.id

    const data = await getUser(id)

    this.user = data
  },
  methods: {
    async handleClick() {
      const requestData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        login: this.user.login,
      }

      await updateUser(this.user.id, requestData)

      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.name {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.fields {
  margin: 20px 0;
}

.name-field {
  flex: 1;
}
</style>
