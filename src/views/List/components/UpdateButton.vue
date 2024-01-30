<template>
  <router-link :to="{ path, query: { id } }" class="link"
    >Редактировать</router-link
  >
</template>

<script>
export default {
  name: 'UpdateButton',
  props: {
    path: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.link {
  font-size: 14px;
  color: var(--silver);
}
</style>
