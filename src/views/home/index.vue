<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-20 14:36:46
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-11 13:42:43
-->
<template>
  <div class="home">
    <span>通用表单</span>
    <DForm></DForm>
    <span>表格</span>
    <DTable></DTable>
    <div style="height: 100px;"/>
    <span>SearchTable</span>
    <DSearchTable></DSearchTable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DForm from '../demo/d-form.vue'
import DTable from '../demo/d-table.vue'
import DSearchTable from '../demo/d-search-table.vue'
</script>

<style lang="scss" scoped></style>
