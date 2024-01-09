import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
const pathSrc = path.resolve(__dirname, 'src')
const element = [
  AutoImport({
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    imports: ['vue', 'vue-router'],
    resolvers: [
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      ElementPlusResolver(),
      // 自动导入图标组件
      IconsResolver({
        prefix: 'Icon'
      })
    ],
    dts: path.resolve(pathSrc, 'auto-imports.d.ts')
  }),
  Components({
    resolvers: [
      // 自动注册图标组件
      IconsResolver({
        enabledCollections: ['ep']
      }),
      // 自动导入 Element Plus 组件
      ElementPlusResolver()
    ],
    dts: path.resolve(pathSrc, 'components.d.ts')
  }),
  Icons({
    autoInstall: true
  })
]

export default element
