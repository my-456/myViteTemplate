import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 拦截器
interface RequestHook<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestHook<T>
  showLoading?: boolean
}

export { RequestHook, RequestConfig }
