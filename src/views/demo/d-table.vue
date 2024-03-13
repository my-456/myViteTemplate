<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-29 15:44:54
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-13 09:44:59
-->
<template>
  <div class="table-box">
    <vTable
      :data="tableData"
      :columns="columns"
      :pagination="true"
      style="width: 100%"
      v-model:selection="selection"
      refTable="tableRef"
      rowId="id"
      :paginationProps="paginationProps"
      :tableOptions="{
        'header-cell-style': {
          'background-color': '#e8e8e8'
        }
      }"
    >
      <template #tableHeader>
        <el-button type="primary"> ceshi </el-button>
      </template>
      <template #name="{ row }">
        <div>{{ row.name + row.date }}</div>
      </template>
      <template #address>
        <div>插槽测试</div>
      </template>
      <template #handle>
        <el-button type="primary" link>删除</el-button>
      </template>
    </vTable>
  </div>
</template>

<script lang="ts" setup>
import vTable from '@/components/vTable'
import { ref } from 'vue'
// const tableRef = ref(null)

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

const selection = ref([
  {
    id: '1',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
watch(
  () => selection.value,
  () => {
    console.log('selection', selection.value)
  }
)

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
    align: 'center',
    slotName: 'name'
  },
  {
    label: 'Address',
    prop: 'address',
    align: 'center',
    slotName: 'address'
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
</script>

<style lang="scss" scoped>
// .table-box {
//   .el-table {
//     background-color: red !important;
//   }
// }
</style>
