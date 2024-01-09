const routerList = [
  // 系统数据
  {
    name: 'datav',
    path: '/main/datav',
    meta: {
      title: 'Datav'
    },
    component: () => import('@/views/datav/index.vue')
  },
  // 核心技术
  {
    name: 'overview',
    path: '/main/overview',
    meta: {
      title: 'Overview'
    },
    component: () => import('@/views/overview/index.vue')
  },
  // 菜单管理
  {
    name: 'menu',
    path: '/main/menu',
    meta: {
      title: 'Menu'
    },
    component: () => import('@/views/menu/index.vue')
  },
  // 用户管理
  {
    name: 'user',
    path: '/main/user',
    meta: {
      title: 'User'
    },
    component: () => import('@/views/user/index.vue')
  },
  // 部门管理
  {
    name: 'department',
    path: '/main/department',
    meta: {
      title: 'Department'
    },
    component: () => import('@/views/department/index.vue')
  },
  // 角色管理
  {
    name: 'role',
    path: '/main/role',
    meta: {
      title: 'Role'
    },
    component: () => import('@/views/role/index.vue')
  }
]

export default routerList
