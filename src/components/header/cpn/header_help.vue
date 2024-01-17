<template>
  <div class="header-help">
    <div class="text">
      <el-dropdown>
        <span class="help-text"> 帮助 </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="onNavModel">切换导航模式</el-dropdown-item>
            <el-dropdown-item command="b" @click="toDataV">大屏可视化数据</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import appStore from '@/stores'
const route = useRouter()
const onNavModel = () => {
  appStore.useSettingStore.changeNavModel()
}

const toDataV = () => {
  route.push('/datav')
}
</script>

<style lang="scss" scoped>
.header-help {
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  height: 100%;
  .text {
    width: 30px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
    .help-text {
      color: #fff;
    }
  }
}
</style>
