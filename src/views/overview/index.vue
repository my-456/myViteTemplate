<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-26 16:56:19
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-12 18:18:58
-->
<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      row-key="id"
      :reserve-selection="true"
      :header-cell-style="{
        'background-color': '#e8e8e8'
      }"
    >
      <el-table-column type="selection" width="55" :reserve-selection="true"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template #scope="{ scope }">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="page.total"
    >
    </el-pagination>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >切换第二、第三行的选中状态</el-button
      >
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="overview">
import { ref, inject } from 'vue'
const $api = inject('$api') as any

const tableData = ref([])

const page = ref({
  size: 10,
  total: 0,
  current: 1
})

const handleCurrentChange = (val) => {
  page.value.current = val
  fetch()
}

onMounted(() => {
  fetch()
})

const fetch = () => {
  const data = {
    page: page.value,
    query: {}
  }
  $api('getList', data).then((res) => {
    tableData.value = res.data.rows
    page.value.total = res.data.total
  })
}

const handleSelectionChange = () => {}

const toggleSelection = () => {}
</script>

<style lang="scss" scoped></style>
