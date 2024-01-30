import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth/App.vue'
import List from '@/views/List/App.vue'
import Update from '@/views/Update/App.vue'
import Users from '@/views/List/components/Users/App.vue'
import Posts from '@/views/List/components/Posts/App.vue'
import UserUpdate from '@/views/Update/components/User/App.vue'
import PostUpdate from '@/views/Update/components/Post/App.vue'
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
      path: '/update',
      name: 'Update',
      component: Update,
      children: [
        {
          path: 'user',
          name: 'UserUpdate',
          component: UserUpdate,
        },
        { path: 'post', name: 'PostUpdate', component: PostUpdate },
      ],
    },
    {
      path: '*',
      name: 'NotFound',
      component: NoutFound,
    },
  ],
})
