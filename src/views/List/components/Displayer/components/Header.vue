<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}
</style>
