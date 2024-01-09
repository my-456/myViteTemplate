<template>
  <div class="header">
    <div class="header-top">
      <div class="header-nav" v-if="true">
        <header-nav />
      </div>
      <div class="help">
        <header-help />
      </div>
      <div class="userInfo">
        <header-info />
      </div>
    </div>
    <!-- <div class="header-bottom">
      <el-icon @click="onIcon" class="icon" size="26"
        ><component :is="isFold ? 'Expand' : 'Fold'"
      /></el-icon>
      <div class="mianbao">
        <my-breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import HeaderNav from './cpn/header_nav.vue'
import HeaderInfo from './cpn/header_info.vue'
import HeaderHelp from './cpn/header_help.vue'
</script>

<style lang="less" scoped>
.header {
  height: 50px;
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
      justify-content: center;
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
