/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-03-07 17:12:13
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-07 17:22:12
 */

import Request from '@/service'
export function getList(params: any) {
  return Request.post<any>({
    url: '/emps/userList',
    data: params
  })
}

export const register = true
