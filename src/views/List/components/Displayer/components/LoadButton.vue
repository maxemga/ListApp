<template>
  <div class="button">
    <span v-if="isLoading">Loading...</span>

    <span v-if="showEmpty">Ничего не найдено</span>

    <app-button v-if="showButton" title="Показать еще" @click="loadData" />
  </div>
</template>

<script>
import AppButton from '@/components/Button/App.vue'

export default {
  name: 'LoadButton',
  components: { AppButton },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },
    isSearch: {
      type: Boolean,
      required: true,
    },
    isSearchDataEmpty: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    showButton() {
      return !this.isDone && !this.isLoading && !this.isSearch
    },
    showEmpty() {
      return !this.isLoading && this.isSearchDataEmpty
    },
  },
  methods: {
    loadData() {
      this.$emit('loadData')
    },
  },
}
</script>
