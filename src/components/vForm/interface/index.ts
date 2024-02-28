// 表单组件config配置接口
export interface formConfig {
  columns: columnsBase[] // 表单项配置
  colNum?: number // columns项默认宽度(1-24整数)
  labelWidth?: string // label宽度
  disabled?: boolean // 是否禁用
  loading?: boolean // 是否加载中
  notOpBtn?: boolean // 不需要（搜索，重置，导出）操作按钮
  opBtnCol?: number // 操作按钮col宽度（24等分）
  isSearch?: boolean // 是否需要搜索按钮
  searchFn?: () => any // 搜索按钮点击触发函数
  isExport?: boolean // 是否需要导出按钮
  exportFn?: () => any // 搜索按钮点击触发函数
  isReset?: boolean // 是否需要重置按钮
  resetFn?: () => any // 搜索按钮点击触发函数
  isExpand?: boolean // 是否需要展示/收起按钮
  appendOpBtn?: () => any | void // 附加操作按钮render

  nativeProps?: {
    // ui框架原生属性
    [key: string]: any
  }
}

// 所有表单控件的联合类型
export type columnsBase =
  | inputProps
  | selectProps
  | radioProps
  | checkboxProps
  | numberProps
  | dateProps
  | dateRangeProps
  | numberRangeProps
  | cascaderProps
  | switchProps
  | uploadProps
  | textProps
  | renderProps

// 基础属性接口
interface defaultProps {
  prop: string // key值
  label?: string // label值
  colNum?: number // 列宽 24等分
  labelWidth?: number | string // label宽度
  hide?: boolean // 是否隐藏（隐藏直接销毁dom）
  disabled?: boolean // 是否禁用
  required?: boolean // 是否必填
  placeholder?: string // 描述字符
  clearable?: boolean // 是否需要清除按钮
  expandDefault?: boolean // 该字段展开收起默认值
  prop2?: string // 附加字段（部分selelct等需要绑定两个key）
  rules?: any[] // 附加检验规则
  change?: (e: any) => void // change事件触发函数

  nativeProps?: {
    // ui框架原生属性
    [key: string]: any
  }
}

// options选项 select、radio、checkbox、cascader（可能包含children）选项接口
export type optionsType =
  | {
      [label: string]: any
      children?: any[]
    }[] // 直接传数组对象
  | { type: 'dic'; key: string } // 字典获取
  | {
      // 接口获取
      type: 'api'
      getData: () => Promise<{ [label: string]: any; children?: any[] }[]> // 必须返回对象数组，不一定是label，value格式
    }

// select、radio、checkbox 选项格式化函数（对应element-plus组件插槽）
export type format = (item: any) => any

// 输入框控件props
export interface inputProps extends defaultProps {
  type: 'input' | 'textarea' | 'password' // 这里还能添加很多类型 参考：https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
  showPassword?: boolean // 是否需要密码*号 显示隐藏开关
  minlength?: number
  maxlength?: number
  rows?: number // textarea 行数
}

// 数字输入控件
export interface numberProps extends defaultProps {
  type: 'number'
  min?: number
  max?: number
  step?: number
  precision?: number
  controls?: boolean
}

// 下拉菜单控件props
export interface selectProps extends defaultProps {
  type: 'select'
  prop2?: string
  filterable?: boolean
  remote?: boolean
  remoteMethod?: (query: string) => Promise<{ [label: string]: any }[]>
  multiple?: boolean
  collapseTags?: boolean // 多选时，是否需要折叠展示
  collapseTagsTooltip?: boolean // 多选并折叠展示时，鼠标放上去是否需要Tooltip展示
  multipleLimit?: number // 多选限制个数
  labelKey?: string
  valueKey?: string
  reserveKeyword?: boolean // 搜索状态下，选择一个项之后，是否保留当前关键字
  format?: format // 格式化函数
  options?: optionsType
}

// 单选控件props
export interface radioProps extends defaultProps {
  type: 'radio'
  labelKey?: string
  valueKey?: string
  border?: boolean
  showType?: 'button' | undefined // 用按钮的形式展示 button
  format?: format
  options?: optionsType
}

// 多选控件props
export interface checkboxProps extends defaultProps {
  type: 'checkbox'
  labelKey?: string
  valueKey?: string
  border?: boolean
  showType?: 'button' | undefined // 用按钮的形式展示 button
  format?: format
  options?: optionsType
}

// 日期控件props
export interface dateProps extends defaultProps {
  // year/month/week/date/datetime/dates
  type: 'year' | 'month' | 'week' | 'date' | 'datetime' | 'dates'
}

// 日期控件范围props
export interface dateRangeProps extends defaultProps {
  type: 'yearRange' | 'monthRange' | 'dateRange' | 'weekRange' | 'datetimeRange'
  propEnd?: string // 范围选择控件(dateRange、numberRange)结束key
  disabledDate?: (date: any) => boolean // 禁止选择的日期
  disabledEndDate?: (date: any) => boolean // 禁止选择的日期
}

// 数字范围控件props
export interface numberRangeProps extends defaultProps {
  type: 'numberRange'
  propEnd?: string // 范围选择控件(dateRange、numberRange)结束key
  min?: number
  max?: number
  step?: number
  precision?: number
  controls?: boolean
}

// 联动Cascader
export interface cascaderProps extends defaultProps {
  type: 'cascader'
  multiple?: boolean
  labelKey?: string
  valueKey?: string
  childrenKey?: string
  emitPath?: boolean
  props?: any
  format?: (node: any, data: any) => any
  options?: optionsType
}

// 开关控件props
export interface switchProps extends defaultProps {
  type: 'switch'
  activeValue?: boolean | string | number // switch 状态为 on 时的值
  inactiveValue?: boolean | string | number // switch 状态为 off 时的值
}

export interface uploadProps extends defaultProps {
  type: 'upload'
  maxNum?: number // 最多上传文件数量
  accept?: string[] // 允许上传文件类型
  maxSize?: number // 文件最大Size  单位：M
  multiple?: boolean // 是否允许多传
  annexType?: string // 财务oss相关配置 默认：IMPORT_FILE
  businessType?: string // 财务oss相关配置 默认：SOSIAL_SECURITY
  ossFolder?: string // 财务oss相关配置 默认：SOSIAL_SECURITY
}

// 文本控件props
export interface textProps extends defaultProps {
  type: 'text'
  defaultText?: string | number
}

// 自定义render函数（只替换form-item-conent部分，label不会被render）
export interface renderProps extends defaultProps {
  type: 'render'
  render: () => any // 自定义组件render
}

// 实例是否是columnsOtherBase类型
// export const isColumnsOtherBase = (item: columnsBase): item is columnsOtherBase => {
//   return (item as columnsOtherBase).fullRender !== undefined
// }
