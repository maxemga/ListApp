<template>
  <div class="post">
    <header-component title="Редактирование данных поста" />

    <div class="fields">
      <app-input placeholder="Введите название" v-model="post.title" />
    </div>

    <app-button title="Редактировать" @click="handleClick" />
  </div>
</template>

<script>
import AppInput from '@/components/Input/App.vue'
import AppButton from '@/components/Button/App.vue'

import HeaderComponent from './../Header.vue'
import { getPost, updatePost } from '../../dataLayer'

export default {
  name: 'UserUpdate',
  components: { HeaderComponent, AppInput, AppButton },
  data() {
    return {
      post: {},
    }
  },
  async mounted() {
    const id = this.$route.query.id

    const data = await getPost(id)

    this.post = data
  },
  methods: {
    async handleClick() {
      const requestData = {
        title: this.post.title,
      }

      await updatePost(this.post.id, requestData)

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
