<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-03-12 15:06:56
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-12 15:34:20
-->
<template>
  <VCard style="flex:1">
    <div :style="{ width: 'auto', height: '360px' }">
      <VEcharts :option="option" />
    </div>
  </VCard>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
const pieData = reactive([
  {
    name: '大一',
    value: 2100
  },
  {
    name: '大二',
    value: 2502
  },
  {
    name: '大三',
    value: 3156
  }
])

const option = reactive<any>({
  color: ['#18F6F8', '#288CFC', '#FFD91A'],
  legend: {
    top: '10px',
    icon: 'circle',
    color: '#555',
    itemWidth: 10,
    itemHeight: 10
  },
  tooltip: {
    confine: true,
    trigger: 'item',
    formatter: '{b} : {c}'
  },
  series: [
    {
      avoidLabelOverlap: false,
      type: 'pie',
      roseType: 'area', // 玫瑰图
      center: ['50%', '50%'],
      radius: ['30%', '60%'],
      label: {
        formatter: '{b}\n-------------\n{d}%\t{c}',
        fontSize: 16
      },
      labelLine: {
        length: 10,
        length2: 30
      },
      data: pieData
    }
  ]
})
</script>
