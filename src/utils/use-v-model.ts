/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-27 17:12:10
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-28 17:11:41
 */
import { computed } from 'vue'
/**
 * props：属性对象
 * propName：要做成计算属性的名字
 * emit：emit 函数
 */
export function useVModel(props: any, propName: any, emit: any) {
  return computed({
    get() {
      return new Proxy(props[propName], {
        set(obj, name, val) {
          emit('update:' + propName, {
            ...obj,
            [name]: val
          })
          return true
        }
      })
    },
    set(val) {
      emit('update:' + propName, val)
    }
  })
}
