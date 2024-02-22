<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-26 16:55:26
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-19 17:42:23
-->
<template>
  <div>
    <el-date-picker
      v-model="value"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
      @blur="handlePickerBlur"
      value-format="yyyy-MM-dd HH:mm:ss"
    >
    </el-date-picker>
  </div>
</template>

<script lang="ts" name="datav" setup>
import { ref } from 'vue'
console.log('datav')
let _minDate = ref(0)
const value = ref()

const pickerOptions = ref({
  disabledDate(time: any) {
    const limit = Date.now() - 3600 * 1000 * 24 * 30
    if (_minDate.value) {
      return (
        time.getTime() > _minDate.value + 3600 * 1000 * 24 ||
        time.getTime() < _minDate.value - 3600 * 1000 * 24
      )
    } else {
      return time.getTime() > Date.now() || time.getTime() < limit
    }
  },
  onPick({ maxDate, minDate }: any) {
    console.log('minDate', minDate)
    _minDate.value = minDate && new Date(minDate).getTime()
  }
})

const handlePickerBlur = () => {
  _minDate.value = 0
}
</script>

<style lang="scss" scoped></style>
