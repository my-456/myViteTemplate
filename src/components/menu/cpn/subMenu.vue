<template>
  <el-sub-menu :index="menu.name" v-if="menu.children">
    <template #title>
      <el-icon><i-ep-caretLeft /></el-icon>
      <span>{{ menu.name }}</span>
    </template>
    <!-- 多级嵌套菜单渲染 -->
    <sub-menu :menu="menuItem" v-for="menuItem in menu.children" :key="menuItem.url"></sub-menu>
  </el-sub-menu>
  <el-menu-item :index="menu.url" v-else @click="onMenuItem(menu)">
    <el-icon><i-ep-caretLeft /></el-icon>
    <template #title>{{ menu.name }}</template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import type { MenuType } from '../type'
import { useRouter } from 'vue-router'
defineProps<{
  menu: MenuType
}>()
const router = useRouter()
const onMenuItem = (v: any) => {
  router.push({
    path: v.url ?? '/not-found'
  })
}
</script>

<style lang="scss" scoped>
.dian {
  border: 2px solid #fff;
}
</style>
../type
