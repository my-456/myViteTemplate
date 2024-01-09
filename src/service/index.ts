import Request from './axios'
import { BASE_URL, TIME_OUT } from './config'
import appStore from '@/stores'
export default new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = appStore.useUserStore.token || ''
      if (token) {
        //config.headers.Authorization = `Bearer ${token}`
        config.headers.token = token
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      const { data } = res
      return data
    },
    responseInterceptorCatch(error) {
      return error
    }
  }
})
