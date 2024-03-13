<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-27 10:13:16
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-12 17:35:33
-->
<template>
  <div class="v-card">
    <el-card class="box-card" :shadow="shadow">
      <slot></slot>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
interface IShadow {
  shadow?: string
}
defineProps<IShadow>()
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
  margin: 10px;
}
</style>
