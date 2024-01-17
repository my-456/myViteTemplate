<template>
  <div class="info">
    <div class="avatar">
      <div>
        <el-avatar
          @click="showClick"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <div @click="showClick" class="name">{{ name }}</div>
    </div>
    <el-dropdown ref="dropdown" class="dropdown">
      <el-icon @click="showClick" :size="20" class="el-icon--right">
        <i-ep-arrow-down />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item divided @click="toOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { DropdownInstance } from 'element-plus'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'
import appStore from '@/stores'
const router = useRouter()
const dropdown = ref<DropdownInstance>()
// 获取用户信息
const name = computed(() => appStore.useUserStore.userInfo.name)
const showClick = () => {
  if (!dropdown.value) return
  dropdown.value.handleOpen()
}

// 退出登录
const toOut = () => {
  LocalCache.clearCache()
  router.push('/')
}
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #fff;
  .name {
    margin-left: 10px;
    white-space: nowrap;
  }
  .dropdown {
    margin: 0 10px;
    color: #fff;
  }
  .avatar {
    display: flex;
    align-items: center;
  }
}
</style>
