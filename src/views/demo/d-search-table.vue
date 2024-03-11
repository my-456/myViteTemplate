<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-03-07 14:42:51
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-11 15:00:48
-->
<template>
  <div>
    <SearchTable
      ref="FormRef"
      v-model:params="params"
      api="getList"
      :init="true"
      :showBtn="true"
      :editable="true"
      :rules="rules"
      :formItems="formData"
      :columns="columns"
      :pagination="true"
      style="width: 100%"
      v-model:selection="selection"
      rowId="id"
      :paginationProps="paginationProps"
      :filterParams="filterParams"
    >
      <!-- form -->
      <template #header>
        <div>header</div>
      </template>
      <template #footer>
        <div>footer</div>
      </template>
      <!-- <template #button>
        <el-button type="primary">slot按钮</el-button>
      </template> -->

      <!-- table -->
      <template #tableHeader>
        <div>tableHeader</div>
      </template>
      <template #tableFooter>
        <div>tableFooter</div>
      </template>
      <template #handle>
        <el-button>删除</el-button>
      </template>
    </SearchTable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { FormItems } from '../../components/vForm/interface/type'
import Test from './component/test.vue'
const TestComponent = ref(markRaw(Test))

const selection = ref([
  {
    begin: null,
    createTime: '2023-07-10T16:07:14',
    current: null,
    deptId: '33',
    end: null,
    entrydate: '2015-09-18',
    gender: 1,
    id: 20,
    image: 'http://tlias.itheima.com/1.jpg',
    job: 1,
    name: '木木木木',
    page: null,
    password: '123456',
    query: null,
    size: null,
    status: '1',
    telephone: '312313',
    total: null,
    updateTime: '2023-07-10T16:07:14',
    username: 'mmmm'
  }
])

watch(
  selection,
  () => {
    console.log('selection', selection.value)
  },
  { immediate: true, deep: true }
)

const paginationProps = {
  'page-sizes': [100, 200, 300, 400],
  layout: 'total, sizes, prev, pager, next, jumper',
  class: '',
  onSizeChange: (val1) => {
    console.log('val', val1)
  },
  onCurrentChange: (val2) => {
    console.log('val', val2)
  }
}

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
    console.log('searchparams', params)
  },
  {
    deep: true
  }
)

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

const columns = [
  {
    type: 'selection'
  },
  {
    label: '序号',
    type: 'index',
    width: '100'
  },
  {
    label: 'Date',
    prop: 'date',
    align: 'center',
    props: {
      formatter: (row) => {
        return '666'
      }
    }
  },
  {
    label: 'Name',
    prop: 'name',
    align: 'center'
  },
  {
    label: 'Address',
    prop: 'address',
    align: 'center'
  },
  {
    label: '操作',
    slotName: 'handle',
    width: '200'
  }
]

const tableData = [
  {
    id: '1',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: '2',
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: '3',
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: '4',
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const filterParams = (params: any) => {
  params.name = 'muayng'
  return params
}

const submit = () => {
  console.log('submit22')
}
</script>

<style lang="scss" scoped></style>
