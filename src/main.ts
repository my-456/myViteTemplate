import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { install } from './api'
import { registerStore } from './stores'
const app = createApp(App)
install(app)

// 页面刷新后获取路由
registerStore(app)
app.use(router)
app.mount('#app')
