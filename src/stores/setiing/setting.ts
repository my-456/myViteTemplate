import { defineStore } from 'pinia'

export const useSettingStore = defineStore(
  'setting',
  () => {
    const oneLevelMenus = ref()
    const levelMenus = ref()
    const navModel = ref()

    //切换导航模式
    function changeNavModel() {
      navModel.value = !navModel.value
    }

    // 当前二级菜单
    function changeLevelMenus(value: any) {
      console.log('二级菜单', value)
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
