import LocalCache from '@/utils/cache'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { firstRoute } from '@/utils/menus'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main/index.vue'),
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  let token = ''
  if (to.path !== '/login') {
    token = LocalCache.getCache('login') || ''
    if (!token) {
      return '/login'
    }
    if (to.path === '/main') {
      return firstRoute.url
    }
  } else {
    if (token) {
      return firstRoute.url
    }
  }
})

export default router
