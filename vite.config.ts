/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-11 16:23:01
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-19 17:29:56
 */
import { fileURLToPath, URL } from 'node:url'
import element from './src/plugins/element'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueSetupExtend(), ...element],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    hmr: true, //启动热更新，就是更改了代码自动刷新页面
    port: 8082, //自定义启动时的端口
    open: true, //代表vite项目在启动时自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://192.168.180.1:8090',
        //你的需要请求的服务器地址
        changeOrigin: true, // 允许跨域
        secure: false, //忽略安全证书
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符,
      }
    }
  }
})
