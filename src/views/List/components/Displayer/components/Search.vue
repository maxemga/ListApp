<template>
  <app-input
    placeholder="Введите значение"
    :value="value"
    v-model="value"
    @input="handleSearch"
/></template>

<script>
import AppInput from '@/components/Input/App.vue'

export default {
  name: 'Search',
  components: { AppInput },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    handleSearch() {
      this.$emit('handleSearch', this.value)
    },
  },
}
</script>

<style scoped></style>
