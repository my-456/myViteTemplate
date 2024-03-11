/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-29 14:45:54
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-07 18:10:35
 */
type pageType = {
  current: string | number
  size: string | number
  total: string | number
}

interface Props {
  refTable: string // 组件名称
  columns: any[] // 列参数
  pagination?: boolean // 是否显示分页
  data?: any[] // 本地数据
  tableOptions?: object // 表格配置
  selection?: any[] // 选中数据
  rowId?: string // 行id （type=='selection'时必传 ）
  paginationProps?: object
  page?: pageType
}

export { pageType, paginationPropsType }
