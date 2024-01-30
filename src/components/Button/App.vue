<template>
  <button
    class="button"
    :class="{ button__disable: !isValid }"
    :disabled="!isValid"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    title: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['click'],
}
</script>

<style scoped>
.button {
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  border: none;
  padding: 15px 15px;
  background-color: var(--violet);
  border-radius: 24px;
  color: var(--white);
}

.button__disable {
  opacity: 0.5;
}
</style>
