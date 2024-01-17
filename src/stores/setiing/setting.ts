import { defineStore } from 'pinia'

export const useSettingStore = defineStore(
  'setting',
  () => {
    const oneLevelMenus = ref()
    const levelMenus = ref()
    const navModel = ref(false)
    const isFold = ref(false)

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

    return {
      navModel,
      oneLevelMenus,
      levelMenus,
      isFold,
      changeFold,
      changeNavModel,
      changeLevelMenus,
      changeOneLevelMenus
    }
  },
  {
    persist: {
      paths: ['oneLevelMenus', 'levelMenus', 'navModel']
    }
  }
)
