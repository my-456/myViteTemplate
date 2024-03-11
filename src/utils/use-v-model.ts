/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-27 17:12:10
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-07 15:13:25
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
         console.log('处理数据流')
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
