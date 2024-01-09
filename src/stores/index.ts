import { createPinia } from 'pinia'
import type { App } from 'vue'
import { useLoginStore } from './login/login'
import { useSettingStore } from './setiing/setting'
import piniaPersist from 'pinia-plugin-persistedstate'
const pinia = createPinia()
export interface IAppStore {
  useUserStore: ReturnType<typeof useLoginStore>
  useSettingStore: ReturnType<typeof useSettingStore>
}
const appStore: IAppStore = {} as IAppStore
export function registerStore(app: App<Element>) {
  app.use(pinia)
  // pinia 持久化
  pinia.use(piniaPersist)

  const loginStore = useLoginStore()

  //刷新后执行menu格式化
  loginStore.setRoutes()

  // 注册模块
  appStore.useUserStore = useLoginStore()
  appStore.useSettingStore =useSettingStore()
}
export default appStore
