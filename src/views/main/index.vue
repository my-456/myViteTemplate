<template>
  <div class="main">
    <el-container>
      <el-aside width="220px"><Aside /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from '@/components/menu/aside.vue'
import Header from '@/components/header/header.vue'
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
  height: 100px;
  padding: 0;
}
</style>
