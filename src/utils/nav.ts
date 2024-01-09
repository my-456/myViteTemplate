import { Breadcrumb } from '@/element-ui/breadcrumb/index'
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
