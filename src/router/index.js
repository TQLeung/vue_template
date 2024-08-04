import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/authentic/login.vue'
import { useAuthorityStore } from '@/stores/authority'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/stu/StuList.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  // console.log('to', to);
  // console.log('from', from);
  const storeAuthority = useAuthorityStore();
  if (storeAuthority.loginedToken=='clear' && to.name !== 'login') {
    // redirect the user to the login page
    return { name: 'login' }
  }
  return true
})

export default router
