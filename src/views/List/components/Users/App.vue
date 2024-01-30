<template>
  <div class="users">
    <displayer title="Пользователи" url="users">
      <template v-slot="{ item }">
        <card :user="item" />
      </template>
    </displayer>
  </div>
</template>

<script>
import Displayer from './../Displayer/App.vue'
import Card from './components/Card.vue'

export default {
  name: 'Users',
  components: { Displayer, Card },
}
</script>

<style scoped>
.users {
  width: 100%;
}
</style>
