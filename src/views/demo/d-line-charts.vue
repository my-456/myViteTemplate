<template>
  <VCard>
    <div :style="{ width: 'auto', height: '350px' }">
      <VEcharts :option="option" />
    </div>
  </VCard>
</template>

<script lang="ts" setup>
const option = reactive<any>({
  title: {
    text: '月度销量统计', // 标题文本
    left: 'center', // 标题水平居中
    top: 'top' // 标题置顶
  },
  tooltip: {
    trigger: 'axis', // 触发类型
    axisPointer: {
      type: 'cross', // 指示器类型
      label: {
        backgroundColor: 'rgba(0,0,0,0.7)' // 指示器标签背景颜色
      }
    }
  },
  legend: {
    data: ['销量'], // 图例数据
    top: 'auto', // 图例置顶
    left: 'auto'
  },
  xAxis: {
    type: 'category', // x轴为类目轴
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'], // x轴数据
    axisPointer: {
      type: 'shadow' // 阴影指示器
    }
  },
  yAxis: {
    type: 'value', // y轴为数值轴
    min: 0, // 设置最小值为0
    max: 2000, // 设置最大值为2000
    axisLabel: {
      formatter: '{value} 件' // 格式化轴标签，添加单位
    }
  },
  series: [
    {
      name: '销量', // 系列名称
      type: 'line', // 系列类型
      showSymbol: false, // 不显示数据点
      smooth: true, // 折线图平滑
      data: [150, 230, 824, 1408, 135, 147, 2000] // 系列数据
    }
  ],
  color: ['#3398DB'], // 系列颜色
  grid: {
    left: '3%', // 网格组件离容器左侧的距离
    right: '4%',
    bottom: '3%',
    containLabel: true // grid 区域是否包含坐标轴的标签
  }
})
</script>
