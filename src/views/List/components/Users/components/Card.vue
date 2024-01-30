<template>
  <div class="card">
    <div class="picture">
      <img :src="user.image" alt="user" />
    </div>

    <div class="info">
      <div class="info-name">
        <span>{{ user.firstName }}</span>
        <span>{{ user.lastName }}</span>
      </div>

      <div class="info-age">
        <span>Возраст: </span>
        <span>{{ user.age }}</span>
      </div>

      <div class="info-gender">
        <span>Пол: </span>
        <span>{{ user.gender }}</span>
      </div>

      <div class="info-update">
        <update-button path="/update/user" :id="user.id" />
      </div>
    </div>
  </div>
</template>

<script>
import UpdateButton from './../../UpdateButton.vue'

export default {
  name: 'Card',
  components: { UpdateButton },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  display: flex;
  position: relative;
  box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  padding: 20px 30px;
  gap: 10px;
}

.picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.picture img {
  object-fit: cover;
  width: 100px;
  height: 100px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
}

.info-name {
  font-weight: 900;
}

.info-update {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
