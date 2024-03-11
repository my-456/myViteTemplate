<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-27 15:12:47
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-11 13:21:55
-->
<template>
  <div ref="testRef">
    <el-color-picker v-model="color" show-alpha></el-color-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
const props = defineProps<{
  cpnModel: any
  params: Object
  data: Object
  editable: boolean
}>()

const emits = defineEmits(['update:cpnModel'])

const color = computed({
  get: () => {
    return props.cpnModel
  },
  set: (value) => {
    console.log('value', value)
    emits('update:cpnModel', value)
  }
})
</script>

<style lang="scss" scoped></style>
