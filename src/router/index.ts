/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-11 16:23:01
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-20 18:04:52
 */
import LocalCache from '@/utils/cache'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { firstRoute } from '@/utils/menus'
import Empty from '../views/empty/index.vue'
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
    children: [
      // 空页面
      {
        path: '/empty',
        component: Empty
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import(/* webpackChunkName: "about" */ '../views/notFount/index.vue')
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
    if (to.path === '/main' || to.path === '/main/') {
      return firstRoute.url
    }
  } else {
    if (token) {
      return firstRoute.url
    }
  }
})

export default router
