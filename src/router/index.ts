import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/dashboard.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

// Navigation guard
router.beforeEach((to, _from, next) => {
  const isAuthenticated = !!localStorage.getItem('token')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
