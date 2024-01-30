<template>
  <div class="card">
    <div class="info">
      <span class="info-title">{{ post.title }}</span>

      <div class="info-react">
        <span>Реакций: </span>
        <span>{{ post.reactions }}</span>
      </div>
    </div>

    <span class="content">
      {{ post.body }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  padding: 20px 30px;
  gap: 10px;
}

.info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.info-title {
  font-weight: 900;
  font-size: 18px;
}

.info-react {
  color: var(--silver);
  font-weight: 900;
  opacity: 0.5;
}
</style>
