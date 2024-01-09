<template>
  <div class="info">
    <el-avatar
      @click="showClick"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <span @click="showClick" class="name">{{ name }}</span>
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
// const store = useStore()
const router = useRouter()
const dropdown = ref<DropdownInstance>()
// const name = computed(() => store.state.login.userInfo?.username)
const showClick = () => {
  if (!dropdown.value) return
  dropdown.value.handleOpen()
}

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
  }
  .dropdown {
    margin: 0 10px;
    color: #fff;
  }
}
</style>
