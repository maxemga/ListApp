<template>
  <div class="list">
    <div v-for="item of data" :key="item.id" class="item">
      <slot :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}
</style>
