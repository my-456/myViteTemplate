/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-23 17:06:01
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-12 16:53:48
 */
import VForm from './vForm'
import VCard from './vCard'
import VTable from './vTable'
import SearchTable from './searchTable'
import VEcharts from './vEcharts'
import VScaleBox from './vScaleBox'
import { App } from 'vue'
const components: any = {
  VForm,
  VCard,
  VTable,
  SearchTable,
  VEcharts,
  VScaleBox
}

const GlobalComponents = (app: App) => {
  Object.keys(components).forEach((key) => {
    app.component(`${key}`, components[key])
  })
}

export default GlobalComponents
