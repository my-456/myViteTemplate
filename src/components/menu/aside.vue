<template>
  <div class="aside">
    <div class="title">
      <span>后台管理系统</span>
    </div>
    <el-menu
      :default-active="route.path"
      active-text-color="#fff"
      background-color="#101036"
      text-color="#fff"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in Menus" :key="item.id">
        <sub-menu :menu="item" />
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import subMenu from './cpn/subMenu.vue'
import { storeToRefs } from 'pinia'
import appStore from '@/stores'
import { useRoute } from 'vue-router'
const route = useRoute()
const userStore = appStore.useUserStore
const settingStore = appStore.useSettingStore
const { userMenus } = storeToRefs(userStore)
const { levelMenus, navModel, isFold } = storeToRefs(settingStore)
const isCollapse = computed(() => isFold.value)

const Menus = computed(() => {
  if (navModel.value) {
    // 顶部导航模式
    return levelMenus.value
  } else {
    // 普通模式
    return userMenus.value
  }
})
const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="scss" scoped>
.aside {
  height: 100%;
  width: 220px;
  overflow: hidden;
  .el-menu {
    height: 100%;
    border-right: 0;
  }
  .title {
    box-sizing: border-box;
    background: #101036;
    color: #fff;
    height: 50px;
    min-width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

:deep(.el-menu .el-menu-item:hover) {
  outline: 0 !important;
  color: #fff !important;
  background: #2d8afb !important;
}
:deep(.el-menu .el-menu-item.is-active) {
  color: #fff !important;
  background: #2d8afb !important;
}
:deep(.el-sub-menu__title:hover) {
  color: #fff !important;
  background: #2d8afb !important;
}
</style>
