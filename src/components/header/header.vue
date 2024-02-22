<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2023-12-25 14:36:29
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-20 14:07:02
-->
<template>
  <div class="header">
    <div class="header-top">
      <div class="header-nav" v-if="chekedNav">
        <header-nav />
      </div>
      <div class="help">
        <header-help />
      </div>
      <div class="userInfo">
        <header-info />
      </div>
    </div>
    <div class="header-bottom">
      <el-icon @click="onIcon" color="#222" size="26"
        ><i-ep-expand v-if="isFold" />
        <i-ep-fold v-else />
      </el-icon>
      <!-- <div class="mianbao">
        <my-breadcrumb :breadcrumbs="breadcrumbs" />
      </div> -->
      <div style="padding: 0 20px 0 50px; width: 100%">
        <KeepTab />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderNav from './cpn/header_nav.vue'
import HeaderInfo from './cpn/header_info.vue'
import HeaderHelp from './cpn/header_help.vue'
import appStore from '@/stores'
import KeepTab from '../keepTab/keepTab.vue'
const chekedNav = computed((v) => appStore.useSettingStore.navModel)
const isFold = computed((v) => appStore.useSettingStore.isFold)
const onIcon = () => {
  appStore.useSettingStore.changeFold()
}
</script>

<style lang="less" scoped>
.header {
  height: 45px;
  width: 100%;
  .header-top {
    width: 100%;
    height: 100%;
    background-color: #101036;
    display: flex;
    justify-content: end;
    .header-nav {
      width: 100%;
      height: 100%;
      display: flex;
      padding-left: 220px; // justify-content: center;
    }
  }
  .header-bottom {
    box-sizing: border-box;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    .icon {
      cursor: pointer;
    }
  }
  .mianbao {
    margin-left: 20px;
  }
}
</style>
