/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-26 14:02:32
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-20 20:14:40
 */

const routerList = [
  // 系统数据
  {
    name: 'datav',
    path: '/main/datav',
    meta: {
      title: '系统数据',
      keepAlive: true
    },
    component: () => import('@/views/datav/index.vue')
  },
  // 核心技术
  {
    name: 'overview',
    path: '/main/overview',
    meta: {
      title: '核心技术',
      keepAlive: true
    },
    component: () => import('@/views/overview/index.vue')
  },
  // 菜单管理
  {
    name: 'menu',
    path: '/main/menu',
    meta: {
      title: '菜单管理',
      keepAlive: true
    },
    component: () => import('@/views/menu/index.vue')
  },
  // 用户管理
  {
    name: 'user',
    path: '/main/user',
    meta: {
      title: '用户管理',
      keepAlive: true
    },
    component: () => import('@/views/user/index.vue')
  },
  // 部门管理
  {
    name: 'department',
    path: '/main/department',
    meta: {
      title: '部门管理',
      keepAlive: true
    },
    component: () => import('@/views/department/index.vue')
  },
  // 角色管理
  {
    name: 'role',
    path: '/main/role',
    meta: {
      title: '角色管理',
      keepAlive: true
    },
    component: () => import('@/views/role/index.vue')
  }
]

export default routerList
