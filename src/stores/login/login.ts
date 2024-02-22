/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-21 20:42:28
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-19 13:56:21
 */
import { defineStore } from 'pinia'
import { loginRequest, userInfoRequest, menuRequest } from '@/api/login/login'
import { LoginParams } from '../../api/type'
import { mapMenus } from '@/utils/menus'
import router from '@/router'
export const useLoginStore = defineStore(
  'login',
  () => {
    const token = ref('')
    const id = ref(0)
    const userInfo = ref({})
    const userMenus = ref([])

    // 登录
    async function loginAction(data: LoginParams) {
      const res = await loginRequest(data)
      token.value = res.data.token
      id.value = res.data.id
      if (res.code == 1) {
        getUserInfo(id.value)
        getMenus(id.value)
      }
    }

    // 获取用户信息
    async function getUserInfo(id: number) {
      const res = await userInfoRequest(id)
      userInfo.value = res.data
    }

    // 获取菜单
    async function getMenus(id: number) {
      const res = await menuRequest(id)
      userMenus.value = res.data.userMenus
      if (userMenus.value.length > 0) {
        setRoutes()
        router.push({
          path: '/main'
        })
      }
    }

    // 格式化路由数据
    function setRoutes() {
      const routes = mapMenus(userMenus.value)
      routes.forEach((route) => {
        router.addRoute('Main', route)
      })
    }
    return { token, userInfo, userMenus, loginAction, setRoutes, getMenus }
  },
  // 数据持久化
  {
    persist: {
      paths: ['token', 'userInfo', 'userMenus']
    }
  }
)
