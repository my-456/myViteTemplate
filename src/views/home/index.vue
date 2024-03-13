<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-20 14:36:46
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-12 17:30:11
-->
<template>
  <div class="home">
    <VScaleBox>
      <span>echarts</span>
      <DLineCharts />
      <div class="cahrt-box">
        <DPieCharts></DPieCharts>
        <DGraphCharts></DGraphCharts>
        <DRadarCharts></DRadarCharts>
      </div>
      <DBarCharts></DBarCharts>
    </VScaleBox>
    <span>通用表单</span>
    <DForm></DForm>
    <span>表格</span>
    <DTable></DTable>
    <div style="height: 100px" />
    <span>SearchTable</span>
    <DSearchTable></DSearchTable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DForm from '../demo/d-form.vue'
import DTable from '../demo/d-table.vue'
import DSearchTable from '../demo/d-search-table.vue'
import DBarCharts from '../demo/d-bar-charts.vue'
import DPieCharts from '../demo/d-pie-charts.vue'
import DGraphCharts from '../demo/d-graph-charts.vue'
import DRadarCharts from '../demo/d-radar-charts.vue'
import DLineCharts from '../demo/d-line-charts.vue'
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
.cahrt-box {
  display: flex;
}
</style>
