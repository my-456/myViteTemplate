<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-25 14:40:43
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-20 21:29:23
-->
<template>
  <div class="main">
    <el-container>
      <el-aside :width="isCollapse ? '50px' : '220px'"><Aside /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive :include="cachedViews">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from '@/components/menu/aside.vue'
import Header from '@/components/header/header.vue'
import appStore from '@/stores'
const isCollapse = computed(() => appStore.useSettingStore.isFold)
const cachedViews = computed(() => {
  return appStore.useSettingStore.cachedViews.map((v) => v.name)
})
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-main {
    background-color: #f2f2f2;
  }
}
.el-header {
  width: 100%;
  height: 90px;
  padding: 0;
}
</style>
