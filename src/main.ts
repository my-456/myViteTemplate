/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-11 16:23:01
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-23 17:16:07
 */
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { install } from './api'
import { registerStore } from './stores'
import GlobalComponents from '@/components/index'
const app = createApp(App)
install(app)

// 页面刷新后获取路由
registerStore(app)
// 注冊全局組件
GlobalComponents(app)
app.use(router)
app.mount('#app')
