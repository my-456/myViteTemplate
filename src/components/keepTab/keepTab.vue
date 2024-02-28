<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-19 10:24:53
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-22 17:00:00
-->
<template>
  <div class="keepTab">
    <div class="tag-box">
      <div
        class="tag"
        :class="[{ tags: defaultRouteTitle === tag.title }]"
        v-for="(tag, index) in tags"
        :key="tag.title"
      >
        <div class="tag-title" @click="handleTag(tag)">{{ tag.title }}</div>
        <el-icon v-if="defaultRouteTitle === tag.title" @click="refreshTab(tag, index)"
          ><i-ep-refreshRight
        /></el-icon>
        <el-icon v-if="tags.length !== 1" @click.stop="handleClose(tag.title)"
          ><i-ep-close
        /></el-icon>
      </div>
    </div>
    <div class="close-tabs" @click="closeOtherTabs">关闭其他</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import appStore from '@/stores'
import { cloneDeep } from 'lodash'
const route = useRoute()
const router = useRouter()
const defaultRouteTitle = ref()
const defaultRoutePath = ref()
const defaultRouteName = ref()
const { addCachedView, removeCachedView, removeOtherView, updateViewStart, updateViewEnd } =
  appStore.useSettingStore
const tags = computed(() => appStore.useSettingStore.cachedViews)

// 监听路由把缓存路由存进列表
watch(
  route,
  (newRoute, oldRoute) => {
    defaultRouteTitle.value = newRoute.meta.title
    console.log('defaultRouteTitle.value', newRoute)
    defaultRoutePath.value = newRoute.path
    defaultRouteName.value = newRoute.name
    if (newRoute.meta && newRoute.meta.keepAlive) {
      const data = {
        title: newRoute.meta.title,
        path: newRoute.path,
        name: newRoute.name
      }
      addCachedView(cloneDeep(data))
    } else {
      removeCachedView(oldRoute?.meta.title as string)
    }
  },
  { immediate: true }
)

// 关闭标签返回上级路由
const handleClose = (tag: string) => {
  removeCachedView(tag)
}

// 点击标签定位路由
const handleTag = (tag: any) => {
  router.push(tag.path)
}

// 关闭其他标签
const closeOtherTabs = () => {
  if (defaultRouteTitle.value) removeOtherView(defaultRouteTitle.value)
}

// 刷新当前标签
const refreshTab = async (tab: any, index: number) => {
  await router.push('/empty')
  await updateViewStart(tab, index)
  await router.go(-1)
  await updateViewEnd(tab, index)
}
</script>

<style lang="scss" scoped>
.keepTab {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.tag-box {
  display: flex;
  gap: 10px;
  font-size: 12px;
  .tag {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 2px 10px;
    border-radius: 3px;
    color: rgb(190, 186, 186);
    //border: 1px solid dimgrey;
    cursor: pointer;
    .tag-title {
      height: 100%;
      width: 100%;
    }
    .el-icon {
      color: rgb(190, 186, 186);
    }
    .el-icon:hover {
      color: #101036;
      border-radius: 50%;
      font-weight: bold;
      // font-size: 14px;
    }
  }
  .tag:hover {
    color: #101036;
    border: 1px solid #101036;
    font-weight: bold;
  }
  .tags {
    color: #101036;
    border: 1px solid #101036;
    font-weight: bold;
  }
}
.close-tabs {
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 12px;
  cursor: pointer;
}
</style>
