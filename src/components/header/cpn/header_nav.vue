<template>
  <div class="header-menu">
    <div class="scroll-btn prev" @click="scrollLeft">
      <el-icon :size="18" color="#fff">
        <i-ep-arrow-left />
      </el-icon>
    </div>
    <div class="header-box" ref="">
      <div
        class="item"
        :class="menu.id == defaultAction ? 'defaultAction' : 'item'"
        v-for="menu in menus"
        :key="menu.id"
        style="color: #fff"
      >
        <div @click="handleSelect(menu)">
          {{ menu.name }}
        </div>
      </div>
    </div>
    <div class="scroll-btn next" @click="scrollRight">
      <el-icon :size="18" color="#fff">
        <i-ep-arrow-right />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import LocalCache from '@/utils/cache'
import appStore from '@/stores'
import { pathMapToMenu, setTopNav, pathMapToOneMenu } from '@/utils/nav'
const route = useRoute()
let defaultAction = ref('')
let currentPath = ref(route.path)
// 路由tree(只渲染所有一级路由)
const menus = computed(() => appStore.useUserStore.userMenus)
// 通过当前路由匹配当前路由对象（返回子路由）
let menu = pathMapToMenu(menus.value, currentPath.value)
// 获取一级菜单用来重置导航菜单
const oneMenu = pathMapToOneMenu(menus.value, menu)
// 重置导航菜单
setTopNav(oneMenu)
// 设置高亮菜单项
defaultAction = ref(oneMenu.id)

onMounted(() => {
  scrollLeft()
})

// top菜单左滑
const scrollLeft = () => {
  const dataBar = document.querySelector('.header-box') as any
  dataBar.scrollTo({
    left: dataBar.scrollRight + dataBar.clientWidth,
    behavior: 'smooth'
  })
}

// top菜单右滑
const scrollRight = () => {
  const dataBar = document.querySelector('.header-box') as any
  dataBar.scrollTo({
    left: dataBar.scrollLeft + dataBar.clientWidth,
    behavior: 'smooth'
  })
}

// 点击菜单跳转对应路由
const handleSelect = (menu: any) => {
  defaultAction.value = menu.id
  LocalCache.setCache('oneLevelMenus', menu)
  setTopNav(menu)
}
</script>

<style lang="less" scoped>
.header-menu {
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;

  .header-box {
    width: 100%;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 38px 0 24px 0;
  }
  .item {
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    cursor: pointer;
  }
  .scroll-btn {
    margin: 0 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  :deep(.el-menu) {
    width: 400px;
    height: 50px;
    border: 0;
    padding: 0;
    overflow-y: hidden;
    overflow-x: scroll;
    :deep(.el-menu-item) {
      min-width: 300px;
      line-height: unset;
      float: none;
      border: none;
      vertical-align: middle;
    }
    .is-active {
      color: #fff !important;
      background: #2d8afb !important;
      border-bottom: none;
    }
  }

  :deep(.el-sub-menu__title) {
    display: none;
  }

  .defaultAction {
    background-color: #2d8afb;
  }
}
</style>
