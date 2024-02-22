/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-01-04 21:21:40
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-20 21:27:30
 */
import { defineStore } from 'pinia'

export const useSettingStore = defineStore(
  'setting',
  () => {
    const oneLevelMenus = ref()
    const levelMenus = ref()
    const navModel = ref(false)
    const isFold = ref(false)
    const cachedViews = ref<any[]>([])

    //控制左侧导航伸缩
    function changeFold() {
      isFold.value = !isFold.value
    }

    //切换导航模式
    function changeNavModel() {
      navModel.value = !navModel.value
    }

    // 当前二级菜单
    function changeLevelMenus(value: any) {
      levelMenus.value = value
    }

    // 当前一级菜单
    function changeOneLevelMenus(value: any) {
      oneLevelMenus.value = value
    }

    // 添加标签
    function addCachedView(view: any) {
      const index = cachedViews.value.map((v) => v.title).indexOf(view.title)
      if (index === -1) {
        cachedViews.value.push(view)
      }
    }

    // 关闭标签
    function removeCachedView(view: string) {
      cachedViews.value = cachedViews.value.filter((v) => v.title !== view)
    }

    // 关闭其他标签
    function removeOtherView(view: string) {
      cachedViews.value = cachedViews.value.filter((v) => v.title === view)
    }

    // 更新标签
    function updateViewStart(view: any, index: number) {
      console.log('--销毁标签缓存')
      cachedViews.value[index] = {
        title: '加载中...',
        path: '/empty',
        name: 'Empty '
      }
    }
    function updateViewEnd(view: any, index: number) {
      console.log('--更新标签缓存')
      cachedViews.value[index] = view
    }

    return {
      navModel,
      oneLevelMenus,
      levelMenus,
      isFold,
      cachedViews,
      changeFold,
      changeNavModel,
      changeLevelMenus,
      changeOneLevelMenus,
      addCachedView,
      removeCachedView,
      removeOtherView,
      updateViewStart,
      updateViewEnd
    }
  },
  {
    persist: {
      paths: ['oneLevelMenus', 'levelMenus', 'navModel', 'cachedViews']
    }
  }
)
