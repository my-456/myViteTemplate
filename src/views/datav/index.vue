<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-26 16:55:26
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-12 17:35:51
-->
<template>
  <div>
    <VScaleBox>
      <DBarCharts></DBarCharts>
      <div class="cahrt-box">
        <DPieCharts></DPieCharts>
        <DGraphCharts></DGraphCharts>
        <DRadarCharts></DRadarCharts>
      </div>
      <DLineCharts />
    </VScaleBox>
  </div>
</template>

<script lang="ts" name="datav" setup>
import { ref } from 'vue'
import DBarCharts from '../demo/d-bar-charts.vue'
import DPieCharts from '../demo/d-pie-charts.vue'
import DGraphCharts from '../demo/d-graph-charts.vue'
import DRadarCharts from '../demo/d-radar-charts.vue'
import DLineCharts from '../demo/d-line-charts.vue'
</script>

<style lang="scss" scoped>
.cahrt-box {
  display: flex;
}
</style>
