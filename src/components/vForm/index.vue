<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-23 10:02:12
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-28 17:17:52
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
          <template v-for="item in btnList" :key="item.id">
            <el-button :type="item.type" @click="onClick(item)">{{ item.name }}</el-button>
          </template>
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
}

const prop = defineProps<Props>()
const editable = computed(() => !!prop.editable)
const emit = defineEmits(['update:params'])
const parmasModel = useVModel(prop, 'params', emit)
const defaultbtnlist = [
  { name: '重置', id: 'reset', type: 'default' },
  { name: '查询', id: 'query', type: 'primary' }
]
const btnList = computed(() => {
  return prop.btnList ? prop.btnList : defaultbtnlist
})
// tsx组件
// const FormItem = formItem()
const FormRef = ref<FormInstance>()

// 表单按钮
function onClick(data: { onClick?: () => void }) {
  if (!data.onClick) {
    if (data.id === 'query') fetch()
    if (data.id === 'reset') resetFields()
  } else {
    data.onClick()
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
    console.log('点击查询', validate())
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
