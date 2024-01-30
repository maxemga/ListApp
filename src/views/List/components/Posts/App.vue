<template>
  <div class="posts">
    <displayer title="Посты" url="posts">
      <template v-slot="{ item }">
        <card :post="item" />
      </template>
    </displayer>
  </div>
</template>

<script>
import Displayer from './../Displayer/App.vue'
import Card from './components/Card.vue'

export default {
  name: 'Posts',
  components: { Displayer, Card },
}
</script>

<style scoped>
.posts {
  width: 100%;
}
</style>
