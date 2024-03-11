<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-23 10:02:12
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-29 10:56:46
-->
<template>
  <v-card>
    <slot name="header"></slot>
    <el-form
      ref="FormRef"
      :model="parmasModel"
      :rules="editable ? prop.rules : {}"
      :inline="inline"
      :label-position="labelPosition"
      label-width="atuo"
      :style="{ display: 'flex' }"
      class="form-box"
    >
      <template v-for="item in prop.formItems" :key="item.prop">
        <div>
          <template v-if="item.type === 'component'">
            <component
              :is="item.component"
              :data="item"
              v-model:cpnModel="parmasModel[item.prop]"
              v-bind="{ ...item.props }"
              :params="parmasModel"
              :editable="editable"
            >
            </component>
          </template>
          <template v-else>
            <el-form-item
              :label="item.label ? item.label + '：' : ''"
              :prop="item.prop"
              :label-width="item.width"
            >
              <FormItem v-model:formData="parmasModel" :editable="editable" :data="item">
              </FormItem>
            </el-form-item>
          </template>
        </div>
      </template>
      <template v-if="prop.showBtn">
        <el-form-item class="btn-box">
          <slot name="button">
            <template v-for="item in defaultbtnlist" :key="item.id">
              <el-button :type="item.type" @click="onClick(item)">{{ item.name }}</el-button>
            </template>
          </slot>
        </el-form-item>
      </template>
    </el-form>
    <slot name="footer"></slot>
  </v-card>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { ref, computed } from 'vue'
import FormItem from './components/FormItem.vue'
import type { FormItems } from './interface/type'
import { useVModel } from '@/utils/use-v-model'
import { cloneDeep } from 'lodash'
interface Props {
  formItems: FormItems[]
  params?: any
  showBtn?: boolean
  labelPosition?: any
  inline?: boolean
  editable?: boolean
  labelWidth?: boolean
  btnList?: any
  rules?: any
  filterParams?: Function
  submit?: Function
  reset?: Function
}

type BtnType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | ''

interface IBtnListItem {
  name: string
  id: string
  type: BtnType
}

const prop = defineProps<Props>()
const editable = computed(() => !!prop.editable)
const emit = defineEmits(['update:params', 'submit', 'reset'])
const parmasModel = useVModel(prop, 'params', emit)
const defaultbtnlist: IBtnListItem[] = [
  { name: '重置', id: 'reset', type: '' },
  { name: '查询', id: 'query', type: 'primary' }
]
const btnList = computed(() => {
  return prop.btnList ? prop.btnList : defaultbtnlist
})

const FormRef = ref<FormInstance>()

// 表单按钮
function onClick(data: IBtnListItem) {
  //   if (!data.onClick) {
  //     if (data.id === 'query') fetch()
  //     if (data.id === 'reset') resetFields()
  //   } else {
  //     data.onClick()
  //   }
  if (data.id === 'query') {
    prop.submit?.()
  }
  if (data.id === 'reset') {
    if (prop.reset) {
      prop.reset()
    } else {
      resetFields()
    }
  }
}

// 表单校验
async function validate() {
  if (!FormRef.value) return
  const result = await FormRef.value.validate()
  return result
}

// 清除表单验证
async function resetFields() {
  return await (FormRef.value as FormInstance).resetFields()
}

const fetch = () => {
  validate().then((res) => {
    let params = cloneDeep(parmasModel.value)
    if (prop.filterParams) {
      params = prop.filterParams(params)
    }
    console.log('点击查询', params)
  })
}

defineExpose({
  fetch,
  validate,
  resetFields
})
</script>
<style lang="scss" scoped>
.form-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .btn-box {
    flex: 1;
    display: flex;
    :deep(.el-form-item__content) {
      justify-content: end;
      flex-wrap: nowrap;
    }
  }
}
.el-form-item {
  margin: 0 10px !important;
}
.el-form-item__label {
  position: absolute;
}
.el-form-item__content {
  width: 180px;
  padding-left: 80px;
}
.el-select,
.el-input_inner {
  width: 180px;
}
</style>
