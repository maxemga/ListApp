<template>
  <div class="menu">
    <div class="menu__wrapper">
      <h2>Страницы</h2>

      <div class="menu-links">
        <router-link
          v-for="link of links"
          :key="link.id"
          :to="{ path: link.path }"
          class="link"
        >
          {{ link.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      links: [
        {
          id: 1,
          title: 'Пользователи',
          path: '/list/users',
        },
        { id: 2, title: 'Посты', path: '/list/posts' },
      ],
    }
  },
}
</script>

<style scoper>
.menu {
  flex-shrink: 0;
  height: 100%;
  width: var(--list-menu-width);
  box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
}

.menu__wrapper {
  padding: 20px;
}

.menu-links {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.link {
  padding: 5px 0;
}

.link:hover {
  cursor: pointer;
  color: var(--violet);
}
</style>
