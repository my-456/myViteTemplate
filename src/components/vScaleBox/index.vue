<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-21 09:26:06
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-12 17:28:45
-->
<template>
  <div class="ScaleBoxParent" ref="ScaleBoxParent">
    <div class="ScaleBox" ref="ScaleBox" :style="getFitContentStyle()">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const ScaleBoxParent = ref<any>(null)
const width = ref(1650)
const height = ref(1080)
const pageWidth = ref(1650)
const pageHeight = ref(1080)
const scaleRatioW = ref(1)
onMounted(() => {
  // @ts-ignore
  const observer = new ResizeObserver((entries) => {
    const rect = ScaleBoxParent.value.getBoundingClientRect()
    const scaleW = rect.width / width.value
    scaleRatioW.value = scaleW

    console.log(scaleRatioW.value)
    if (scaleW > 1) {
      return
    }
    // 重新计算页面高度，使页面整好填满可视区域
    pageHeight.value = rect.height / scaleW
  }) as any
  observer.observe(ScaleBoxParent.value)
})

const getFitContentStyle = () => {
  return {
    width: pageWidth.value + 'px',
    height: pageHeight.value,
    transform: `scale(${scaleRatioW.value},${scaleRatioW.value})`
  }
}
</script>

<style scoped lang="scss">
.ScaleBoxParent {
  width: 100%;
  height: 100%;
}
.ScaleBox {
  width: 100%;
  overflow: hidden;
  transform-origin: 0 0;
}
</style>
