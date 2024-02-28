<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-23 10:56:04
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-28 16:58:22
-->
<template>
  <component :is="render()"></component>
</template>
<script setup lang="tsx">
import { useVModel } from '@/utils/use-v-model'

const props = defineProps<{
  data: Object
  formData: Object
  editable: Boolean
}>()
const emit = defineEmits(['update:formData'])
const render = () => {
  const form = useVModel(props, 'formData', emit)
  return props.data ? setFormItem(form, props.data, props.editable) : null
}

// 普通显示
const Span = (form: Record<string, any>, data: Record<string, any>) => (
  // <span>{data.valueProp ? form[data.valueProp] : (data.filter ? filter(form[data.prop], data.filter) : form[data.prop] || '无')}</span>
  <span>{data.valueProp ? form[data.valueProp] : ''}</span>
)

// 输入框
const BaseInput = (form: Record<string, any>, data: Record<string, any>) => (
  <el-input
    v-model={form[data.prop]}
    type={data.type}
    // size='small'
    show-password={data.type == 'password'}
    clearable
    placeholder={'请输入' + data.label}
    autosize={{
      minRows: 3,
      maxRows: 4
    }}
    {...data.props}
  ></el-input>
)

// 数字输入框
const BaseInputNumber = (form: Record<string, any>, data: Record<string, any>) => (
  <el-input-number
    // size='small'
    v-model={form[data.prop]}
    controls-position="right"
    {...data.props}
  />
)

const setLabelValue = (_item: any, { optionsKey }: any = {}) => {
  return {
    label: optionsKey ? _item[optionsKey.label] : _item.label,
    value: optionsKey ? _item[optionsKey.value] : _item.value
  }
}
// 选择框
const BaseSelect = (form: Record<string, any>, data: Record<string, any>) => (
  <el-select
    // size='small'
    v-model={form[data.prop]}
    filterable
    clearable
    placeholder={'请选择' + data.label}
    {...data.props}
  >
    {data.options.map((item: any) => {
      return <el-option {...setLabelValue(item, data)} />
    })}
  </el-select>
)

// 单选/区间日期
const BaseDate = (form: Record<string, any>, data: Record<string, any>) => (
  <el-date-picker
    // size='small'
    v-model={form[data.prop]}
    type={data.type}
    value-format={data.valueFormat}
    format={data.format}
    range-separator="至"
    start-placeholder={data.startPlaceholder}
    end-placeholder={data.endPlaceholder}
    placeholder={'请选择' + data.label}
    {...data.props}
  />
)

// 单选/区间时间
const BaseTime = (form: Record<string, any>, data: Record<string, any>) => (
  <el-time-picker
    // size='small'
    v-model={[form[data.prop]]}
    value-format={data.valueFormat}
    format={data.format}
    range-separator="至"
    disabled={form.editable}
    start-placeholder={data.start}
    is-range={data.isRange}
    end-placeholder={data.end}
    {...data.props}
  />
)

// 单选
const BaseRadio = (form: Record<string, any>, data: Record<string, any>) => (
  <el-radio-group v-model={form[data.prop]}>
    {data.radios.map((item: { label: string | number | boolean; value: any }) => {
      return (
        <el-radio label={setLabelValue(item, data.prop).label}>
          {setLabelValue(item, data.prop).value}
        </el-radio>
      )
    })}
  </el-radio-group>
)

// 多选
const BaseCheckbox = (form: Record<string, any>, data: Record<string, any>) => (
  <el-checkbox-group v-model={form[data.prop]}>
    {data.checkboxs.map((item: { label: string | number | boolean; value: any }) => {
      return (
        <el-checkbox label={setLabelValue(item, data.prop).label}>
          {setLabelValue(item, data.prop).value}
        </el-checkbox>
      )
    })}
  </el-checkbox-group>
)

// 级联选择器
const BaseCascader = (form: Record<string, any>, data: Record<string, any>) => (
  <el-cascader
    v-model={form[data.prop]}
    filterable
    clearable
    options={data.options}
    placeholder={'请选择' + data.label}
    {...data.props}
  />
)

// 开关
const BaseSwitch = (form: Record<string, any>, data: Record<string, any>) => (
  <el-switch v-model={form[data.prop]} {...data.props} />
)

// const BaseUpload = (form: Record<string, any>, data: Record<string, any>) => ()

const setFormItem = (
  form: Record<string, any> | undefined,
  data: Record<string, any>,
  editable: Boolean
) => {
  if (!form) return null
  if (!editable) return Span(form.value, data)
  switch (data.type) {
    case 'input':
    case 'textarea':
    case 'password':
      return BaseInput(form.value, data)
    case 'number':
      return BaseInputNumber(form.value, data)
    case 'select':
      return BaseSelect(form.value, data)
    case 'year':
    case 'month':
    case 'week':
    case 'date':
    case 'datetime':
    case 'dates':
    case 'yearrange':
    case 'monthrange':
    case 'daterange':
    case 'weekrange':
    case 'datetimerange':
      return BaseDate(form.value, data)
    case 'time':
      return BaseTime(form.value, data)
    case 'radio':
      return BaseRadio(form.value, data)
    case 'checkbox':
      return BaseCheckbox(form.value, data)
    case 'cascader':
      return BaseCascader(form.value, data)
    case 'switch':
      return BaseSwitch(form.value, data)
    // case 'upload':
    //    return BaseUpload(form, data)
    default:
      throw new Error('配置项控件${col.type}不存在')
  }
}
</script>
