import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth/App.vue'
import List from '@/views/List/App.vue'
import Users from '@/views/List/components/Users/App.vue'
import Posts from '@/views/List/components/Posts/App.vue'
import NoutFound from '@/views/NotFound/App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      children: [
        {
          path: 'users',
          name: 'Users',
          component: Users,
        },
        { path: 'posts', name: 'Posts', component: Posts },
      ],
    },
    {
      path: '*',
      name: 'NotFound',
      component: NoutFound,
    },
  ],
})
