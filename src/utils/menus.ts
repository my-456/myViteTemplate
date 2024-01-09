import { RouteRecordRaw } from 'vue-router'
export let firstRoute: any = null
export function mapMenus(userMenus: any[]): RouteRecordRaw[] {
  // 需要返回菜单
  const routes: RouteRecordRaw[] = []
  // 1.先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = import.meta.globEager('../router/main/*.ts')
  Object.values(routeFiles).forEach((key: any) => {
    key['default'].forEach((v: any) => {
      // 获取文件中的路由对象
      allRoutes.push(v)
    })
  })

  // 2.根据菜单获取需要添加的routes
  const _getRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((v) => v.path === menu.url)
        if (route) routes.push(route)
        if (!firstRoute) {
          firstRoute = menu
        }
      } else {
        _getRoute(menu.children)
      }
    }
  }
  _getRoute(userMenus)

  return routes
}
