<!--
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-29 14:57:19
 * @LastEditors: muayng
 * @LastEditTime: 2024-03-11 14:38:18
-->
<template>
  <component :is="render"></component>
</template>
<script setup lang="tsx">
import { defineSlots } from 'vue'
import vt from './table.module.scss'
import { cloneDeep } from 'lodash'
import { useVModel } from '@/utils/use-v-model'
import type { pageType } from '../interface/type'
const slots = defineSlots()
const props = withDefaults(
  defineProps<{
    refTable: string // 组件名称
    columns: any[] // 列参数
    pagination?: boolean // 是否显示分页
    data?: any[] // 本地数据
    tableOptions?: object // 表格配置
    selection?: any[] // 选中数据
    rowId?: string // 行id （type=='selection'时必传 ）
    paginationProps?: object
    page?: pageType
    height?: string
  }>(),
  {
    pagination: true,
    page: () => {
      return {
        current: 1,
        size: 10,
        total: 0
      }
    }
  }
)

// 渲染多选
watch(
  () => props.data,
  () => {
    if (props.rowId) {
      toggleSelection()
    }
  },
  { deep: true }
)

onMounted(() => {
  if (props.rowId) {
    toggleSelection()
  }
})

const emit = defineEmits(['update:selection'])
const table = ref(props.refTable)
const basePaginationProps = () => {
  let defaultProps = {
    'page-sizes': [10, 20, 30, 50],
    layout: 'total, sizes, prev, pager, next, jumper',
    class: ''
  }
  const data = Object.assign(defaultProps, props.paginationProps)
  return data
}

const render = computed(() => vTable())

const tableColumns = () => {
  return (
    <>
      {props.columns?.map((v: any) => (
        <el-table-column
          type={v.type}
          prop={v.prop}
          label={v.label}
          align={v.align ? v.align : 'center'}
          width={v.width}
          {...v.props}
        >
          {{
            default: (scope: { row: any }) => {
              if (scope && scope.row) {
                return slots[v.slotName]?.(scope)
              }
            }
          }}
        </el-table-column>
      ))}
    </>
  )
}

// 分页器
const paginationEl = () => {
  return (
    <>
      <el-pagination
        v-model:page-size={props.page.size}
        v-model:current-page={props.page.current}
        total={props.page.total}
        {...basePaginationProps()}
      />
    </>
  )
}

const vTable = () => (
  <vCard class={vt.cardTable}>
    <div class="c-table h-full flex-1 flex flex-col">
      <div class={vt.tableHeader}>
        {slots.tableHeader ? slots.tableHeader?.({}) : headerDefault?.({})}
      </div>
      <el-table
        class={vt.table}
        ref={table}
        onSelectionChange={handleSelectionChange}
        data={props.data}
        height={props.height}
        {...props.tableOptions}
      >
        {tableColumns()}
      </el-table>
      <div class={vt.footer}>
        {slots.tableFooter && slots.tableFooter({})}
        {props.pagination && paginationEl()}
      </div>
    </div>
  </vCard>
)

const headerDefault = () => {
  return (
    <div class={vt.defaultBtn}>
      <el-button onClick={handleClick} type={'primary'}>
        新增
      </el-button>
    </div>
  )
}

const handleClick = () => {
  console.log('点击按钮')
}

const handleSelectionChange = (val: any) => {
  emit('update:selection', cloneDeep(val))
}

const toggleSelection = () => {
  const list = useVModel(props, 'selection', emit)
  if (list.value) {
    list.value.forEach((item: any) => {
      // checkedData为已选数据
      nextTick(() => {
        props.data?.find((obj) => {
          // userData 表单数据
          if (item[props.rowId] === obj[props.rowId]) {
            ;(table.value as any).toggleRowSelection(obj, true)
          }
        })
      })
    })
  } else {
    ;(table.value as any).clearSelection()
  }
}
</script>
