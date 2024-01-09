import Request from '@/service'
import { LoginParams } from './type'
enum LoginApi {
  login = '/login',
  userInfo = '/users/',
  menus = '/role/'
}
export function loginRequest(params: LoginParams) {
  return Request.post<any>({
    url: LoginApi.login,
    data: params
  })
}

export function userInfoRequest(id: number) {
  return Request.get<any>({
    url: LoginApi.userInfo + id
  })
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
              sort: 1,
              type: 1,
              url: '/main/analysis',
              children: [
                {
                  children: null,
                  id: '2',
                  name: '系统数据',
                  parentId: 1,
                  sort: 106,
                  type: 2,
                  url: '/main/datav',
                  icon: 'House'
                },
                {
                  children: null,
                  id: '3',
                  name: '核心技术',
                  parentId: 1,
                  sort: 106,
                  type: 2,
                  url: '/main/overview',
                  icon: 'House',
                  permission: ['analysis:overview:create', 'analysis:overview:delete']
                }
              ]
            },
            {
              children: [
                {
                  children: null,
                  id: '4',
                  name: '菜单管理',
                  parentId: 5,
                  sort: 106,
                  type: 2,
                  url: '/main/menu',
                  icon: 'House',
                  permission: ['system:menu:create', 'system:menu:update']
                }
              ],
              icon: 'Star',
              id: '5',
              name: '系统管理',
              sort: 1,
              type: 1,
              url: '/main/system'
            },
            {
              children: null,
              icon: '',
              id: '6',
              name: '用户管理',
              sort: 1,
              type: 2,
              url: '/main/user'
            },
            {
              children: null,
              icon: 'Star',
              id: '7',
              name: '部门管理',
              sort: 1,
              type: 2,
              url: '/main/department'
            },
            {
              children: [
                {
                  icon: 'Star',
                  id: '8',
                  name: '角色管理2',
                  sort: 1,
                  type: 1,
                  url: '/main/role',
                  parentId: '74',
                  children: [
                    {
                      icon: 'Star',
                      id: '9',
                      parentId: '8',
                      name: '角色管理3',
                      sort: 1,
                      type: 2,
                      url: '/main/role',
                      permission: ['system:role:create', 'system:role:delete']
                    }
                  ]
                }
              ],
              icon: 'Star',
              id: '10',
              name: '角色管理',
              sort: 1,
              type: 1,
              url: '/main/role'
            },
            {
               children: null,
               icon: 'Star',
               id: '11',
               name: '部门管理2',
               sort: 1,
               type: 2,
               url: '/main/department2'
             },
             {
               children: null,
               icon: 'Star',
               id: '12',
               name: '部门管理3',
               sort: 1,
               type: 2,
               url: '/main/department3'
             },
             {
               children: null,
               icon: 'Star',
               id: '13',
               name: '部门管理3',
               sort: 1,
               type: 2,
               url: '/main/department3'
             },
             {
               children: null,
               icon: 'Star',
               id: '14',
               name: '部门管理3',
               sort: 1,
               type: 2,
               url: '/main/department3'
             },
             {
               children: null,
               icon: 'Star',
               id: '15',
               name: '部门管理3',
               sort: 1,
               type: 2,
               url: '/main/department3'
             },
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
