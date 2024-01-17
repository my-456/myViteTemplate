/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-01-17 15:43:16
 * @LastEditors: muayng
 * @LastEditTime: 2024-01-17 15:43:46
 */
import { defineAsyncComponent } from 'vue'
import { columnsBase } from '../interface/index'

export const BaseInput = defineAsyncComponent(() => import('./BaseInput'))
export const BaseNumber = defineAsyncComponent(() => import('./BaseNumber'))
export const BaseSelect = defineAsyncComponent(() => import('./BaseSelect'))
export const BaseRadio = defineAsyncComponent(() => import('./BaseRadio'))
export const BaseCheckbox = defineAsyncComponent(() => import('./BaseCheckbox'))
export const BaseDate = defineAsyncComponent(() => import('./BaseDate'))
export const BaseDateRange = defineAsyncComponent(() => import('./BaseDateRange'))
export const BaseNumberRange = defineAsyncComponent(() => import('./BaseNumberRange'))
export const BaseCascader = defineAsyncComponent(() => import('./BaseCascader'))
export const BaseSwitch = defineAsyncComponent(() => import('./BaseSwitch'))
export const BaseText = defineAsyncComponent(() => import('./BaseText'))
export const BaseUpload = defineAsyncComponent(() => import('./BaseUpload'))

// 根据item.type返回对应的组件
export const getComponentByType = (item: columnsBase): any => {
  switch (item.type) {
    case 'input':
    case 'textarea':
      return BaseInput
    case 'number':
      return BaseNumber
    case 'select':
      return BaseSelect
    case 'radio':
      return BaseRadio
    case 'checkbox':
      return BaseCheckbox
    case 'year':
    case 'month':
    case 'week':
    case 'date':
    case 'datetime':
    case 'dates':
      return BaseDate
    case 'yearRange':
    case 'monthRange':
    case 'dateRange':
    case 'weekRange':
    case 'datetimeRange':
      return BaseDateRange
    case 'numberRange':
      return BaseNumberRange
    case 'cascader':
      return BaseCascader
    case 'switch':
      return BaseSwitch
    case 'upload':
      return BaseUpload
    case 'text':
      return BaseText
    default:
      throw new Error('配置项控件${col.type}不存在')
  }
}
