/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-23 17:06:01
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-07 16:28:13
 */
import VForm from './vForm'
import VCard from './vCard'
import VTable from './vTable'
import SearchTable from './searchTable'
import { App } from 'vue'
const components: any = {
  VForm,
  VCard,
  VTable,
  SearchTable
}

const GlobalComponents = (app: App) => {
  Object.keys(components).forEach((key) => {
    app.component(`${key}`, components[key])
  })
}

export default GlobalComponents
