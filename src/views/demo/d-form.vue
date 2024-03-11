<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-28 17:44:53
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-29 10:59:22
-->
<template>
  <div>
    <!-- home
     <el-button type="primary">123</el-button>
     <el-icon :size="70" color="red">
       <i-ep-share />
     </el-icon> -->
    <v-form
      ref="FormRef"
      v-model:params="params"
      :showBtn="true"
      :editable="true"
      :rules="rules"
      :formItems="formData"
      :btnList="btnList"
      :filterParams="filterParams"
      :submit="submit"
    >
      <template #header>
        <div>header</div>
      </template>
      <template #footer>
        <div>footer</div>
      </template>
      <!-- <template #button>
        <el-button type="primary">slot按钮</el-button>
      </template> -->
    </v-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, markRaw } from 'vue'
import type { FormItems } from '../../components/vForm/interface/type'
import Test from './component/test.vue'
const TestComponent = ref(markRaw(Test))
const FormRef = ref()
const rules = {
  name: [{ required: true, message: '人员名称', trigger: 'blur' }]
}
const params = ref({
  name: '1',
  queueDate: '',
  timeSlot: '',
  queueNum: '',
  isDelay: '',
  effectiveTime: '',
  cpn: ''
})

watch(
  () => params,
  () => {
    console.log('params', params)
  },
  {
    deep: true
  }
)

const btnList = [
  {
    name: '提交1',
    id: 'query',
    type: 'primary'
  },
  {
    name: '重置',
    id: 'reset',
    type: 'default',
    onClick: () => {
      FormRef.value.resetFields()
    }
  },
  {
    name: '提交3',
    id: 'query',
    type: 'primary'
  },
  {
    name: '提交4',
    id: 'query',
    type: 'default',
    onClick: () => {
      console.log('提交4')
    }
  }
]
const formData = reactive<FormItems[]>([
  {
    label: '人员名称',
    type: 'input',
    prop: 'name',
    props: {
      maxlength: 5,
      onChange: function () {
        console.log('改变了')
      }
    }
  },
  {
    label: '日期范围',
    type: 'daterange',
    prop: 'queueDate'
  },
  {
    label: '时间段范围',
    type: 'time',
    prop: 'timeSlot'
  },
  {
    label: '允许排队数量',
    type: 'input',
    prop: 'queueNum'
  },
  {
    label: '生效类型',
    type: 'select',
    prop: 'isDelay',
    options: [
      {
        label: '当日生效',
        value: 0
      },
      {
        label: '次日生效',
        value: 1
      }
    ]
  },
  {
    label: '生效时间',
    type: 'date',
    prop: 'effectiveTime'
  },
  {
    label: '自定义组件',
    type: 'component',
    component: TestComponent,
    prop: 'cpn'
  }
])

const filterParams = (params: any) => {
  params.name = 'muayng'
  return params
}

const submit = () => {
  console.log('submit22')
}
</script>

<style lang="scss" scoped></style>
