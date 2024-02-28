/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-01-04 20:32:44
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-28 20:17:14
 */
import { Breadcrumb } from '@/element-ui/breadcrumb/index'
import router from '@/router'
import appStore from '@/stores'
import { treeToArray } from './utils'
import { cloneDeep } from 'lodash'
// 获取面包屑数据
export function pathBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: Breadcrumb[] = []
  pathMapToMenu(userMenus, currentPath)
  return breadcrumbs
}

// 获取当前路由对象
export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      // 获取与当前路由匹配的二级菜单对象
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function pathMapToOneMenu(menuJson: any, child: any) {
  const oldTree = cloneDeep(menuJson)
  // 树形结构扁平化处理
  const bp = treeToArray(cloneDeep(menuJson))
  // 获取一级菜单  （没有children）
  const oneMenu = getOneMenu(bp, child)
  // 过滤出完整一级菜单
  const menu = oldTree.filter((v) => v.id == oneMenu.id)[0]
  return menu
}

function getOneMenu(bp: any, menu: any) {
  if (!menu.parentId) {
    return menu
  } else {
    const tree = bp.filter((v) => v.id == menu.parentId)[0]
    return getOneMenu(bp, tree)
  }
}

// 顶部导航菜单逻辑
export function setTopNav(menu: any) {
  // 设置一级菜单
  appStore.useSettingStore.changeOneLevelMenus(menu)
  // 判断是否有二级菜单
  if (menu.children) {
    // 重置二级菜单
    const levelMenus = menu.children
    appStore.useSettingStore.changeLevelMenus(levelMenus)
  } else {
    const levelMenus = null
    appStore.useSettingStore.changeLevelMenus(levelMenus)
    router.push(menu.url ?? '/not-found')
  }
}
