import axios from 'axios'
import type {AxiosInstance} from 'axios'
import type {RequestConfig, RequestHook} from './type'
import {ElMessage, ElLoading} from 'element-plus'
const ISLOADING = true
class Request {
  instance: AxiosInstance // axios实例
  interceptors?: RequestHook // 拦截器
  loading?: any // loading
  showLoading?: boolean // 是否显示loding
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? ISLOADING
    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 统一拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        console.log('统一拦截器')
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res
      },
      (err) => {
         console.log('err', err)
        this.loading?.close()
        if (err.response.status === 404) {
          ElMessage.error('404错误')
        }
        if (err.response.status === 500) {
          ElMessage.error('服务器错误')
        }
        return err
      }
    )
  }

  // 请求接口拦截器
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = ISLOADING
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({...config, method: 'GET'})
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({...config, method: 'POST'})
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({...config, method: 'DELETE'})
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({...config, method: 'PATCH'})
  }
}

export default Request
