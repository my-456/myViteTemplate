/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-03-11 16:16:55
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-12 14:11:36
 */
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  TooltipComponent,
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  LegendComponent
} from 'echarts/components'

// 注册必须的组件
echarts.use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  TooltipComponent,
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  LegendComponent
  // ...其他需要的组件
])

export default echarts
