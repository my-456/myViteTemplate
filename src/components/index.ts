/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-23 17:06:01
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-27 10:32:42
 */
import VForm from './vForm'
import vCard from './vCard'
import { App } from 'vue'
const components: any = {
  VForm,
  vCard
}

const GlobalComponents = (app: App) => {
  Object.keys(components).forEach((key) => {
    app.component(`${key}`, components[key])
  })
}

export default GlobalComponents
