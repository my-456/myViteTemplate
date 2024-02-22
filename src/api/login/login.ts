import Request from '@/service'
import { LoginParams } from './type'
enum LoginApi {
  login = '/login',
  userInfo = '/users/',
  menus = '/role/'
}
const isLogin = true
export function loginRequest(params: LoginParams) {
  if (isLogin) {
    return new Promise((resolve, reject) => {
      resolve({
        code: 1,
        msg: 'success',
        data: {
          name: '慕洋',
          id: 1,
          username: 'muyang',
          token:
            'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi5oWV5rSLIiwiaWQiOjEsInVzZXJuYW1lIjoibXV5YW5nIiwiZXhwIjoxNzA1NDM2MTYxfQ.yB1-jc1v5tG--lwsX3FP5AdycJ88MI8IShyfJEPupjc'
        }
      })
    })
  } else {
    return Request.post<any>({
      url: LoginApi.login,
      data: params
    })
  }
}

const isUserInfoRequest = true
export function userInfoRequest(id: number) {
  if (isUserInfoRequest) {
    return new Promise((resolve, reject) => {
      resolve({
        code: 1,
        msg: 'success',
        data: {
          id: 1,
          username: 'muyang',
          password: '123456',
          name: '慕洋',
          gender: 2,
          image: '1.jpg',
          job: 4,
          telephone: '13243254065',
          status: '1',
          entrydate: '2000-01-01',
          deptId: '2',
          size: null,
          current: null,
          total: null,
          page: null,
          query: null,
          createTime: '2023-06-29T19:47:47',
          updateTime: '2023-07-10T15:24:27',
          begin: null,
          end: null
        }
      })
    })
  } else {
    return Request.get<any>({
      url: LoginApi.userInfo + id
    })
  }
}

const localData = true
export function menuRequest(id: number) {
  if (localData) {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          userMenus: [
            {
              icon: 'Star',
              id: '1',
              name: '系统总览',
              level: 1,
              sort: 1,
              type: 1,
              url: '/main/analysis',
              isShow: true,
              children: [
                {
                  children: null,
                  id: '2',
                  level: 2,
                  name: '系统数据',
                  parentId: 1,
                  sort: 106,
                  type: 2,
                  url: '/main/datav',
                  icon: 'House',
                  isShow: true
                },
                {
                  children: null,
                  level: 2,
                  id: '3',
                  name: '核心技术',
                  parentId: 1,
                  sort: 106,
                  type: 2,
                  url: '/main/overview',
                  icon: 'House',
                  permission: ['analysis:overview:create', 'analysis:overview:delete'],
                  isShow: true
                }
              ]
            },
            {
              children: [
                {
                  children: null,
                  id: '4',
                  level: 2,
                  name: '菜单管理',
                  parentId: 5,
                  sort: 106,
                  type: 2,
                  url: '/main/menu',
                  icon: 'House',
                  permission: ['system:menu:create', 'system:menu:update'],
                  isShow: true
                }
              ],
              icon: 'Star',
              id: '5',
              name: '系统管理',
              sort: 1,
              level: 1,
              type: 1,
              url: '/main/system',
              isShow: true
            },
            {
              children: null,
              icon: '',
              id: '6',
              name: '用户管理',
              sort: 1,
              level: 1,
              type: 2,
              url: '/main/user',
              isShow: true
            },
            {
              level: 1,
              children: null,
              icon: 'Star',
              id: '7',
              name: '部门管理',
              sort: 1,
              type: 2,
              url: '/main/department',
              isShow: true
            },
            {
              children: [
                {
                  icon: 'Star',
                  id: '8',
                  level: 2,
                  name: '角色管理2',
                  sort: 1,
                  type: 1,
                  url: '/main/role',
                  parentId: '74',
                  isShow: true,
                  children: [
                    {
                      icon: 'Star',
                      id: '9',
                      level: 3,
                      parentId: '8',
                      name: '角色管理3',
                      sort: 1,
                      type: 2,
                      url: '/main/role',
                      permission: ['system:role:create', 'system:role:delete'],
                      isShow: true
                    }
                  ]
                }
              ],
              icon: 'Star',
              id: '74',
              name: '角色管理',
              sort: 1,
              type: 1,
              level: 1,
              url: '/main/role',
              isShow: true
            },
            {
              children: null,
              icon: 'Star',
              id: '11',
              name: '部门管理2',
              sort: 1,
              type: 2,
              level: 1,
              url: '/main/department2',
              isShow: true
            },
            {
              children: null,
              icon: 'Star',
              id: '12',
              name: '部门管理3',
              sort: 1,
              type: 2,
              level: 1,
              url: '/main/department3',
              isShow: true
            },
            {
              children: null,
              icon: 'Star',
              id: '13',
              name: '部门管理3',
              sort: 1,
              type: 2,
              level: 1,
              url: '/main/department3',
              isShow: true
            },
            {
              children: null,
              icon: 'Star',
              id: '14',
              name: '部门管理3',
              sort: 1,
              type: 2,
              level: 1,
              url: '/main/department3',
              isShow: true
            },
            {
              children: null,
              icon: 'Star',
              id: '15',
              name: '部门管理3',
              sort: 1,
              type: 2,
              level: 1,
              url: '/main/department3',
              isShow: true
            }
          ]
        }
      })
    })
  } else {
    return Request.get<any>({
      url: LoginApi.menus + id + '/menu'
    })
  }
}

export const register = true
