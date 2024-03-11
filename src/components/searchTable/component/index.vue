<template>
  <div>
    <VForm
      v-if="formItems"
      ref="FormRef"
      v-model:params="parmasModel"
      :showBtn="props.showBtn"
      :editable="props.editable"
      :rules="rules"
      :formItems="formItems"
      :filterParams="filterParams"
      :submit="fetch"
      v-bind="$attrs"
    >
      <!-- 插槽透传 -->
      <template v-for="(value, key) in $slots" #[key]="row" :key="key">
        <slot :name="key" v-bind="row"></slot>
      </template>
    </VForm>
    <VTable
      v-if="columns"
      :data="tableData"
      :columns="props.columns"
      :pagination="props.pagination"
      v-model:selection="selectionModel"
      refTable="tableRef"
      :rowId="props.rowId"
      :page="basePage"
      :paginationProps="basePaginationProps"
      height="450px"
    >
      <template v-for="(value, key) in $slots" #[key]="row" :key="key">
        <slot :name="key" v-bind="row"></slot>
      </template>
    </VTable>
  </div>
</template>

<script lang="ts" setup>
import { FormItems } from '@/components/vForm/interface/type'
import { pageType } from '@/components/vTable/interface/type'
import { useVModel } from '@/utils/use-v-model'
import { ref, inject } from 'vue'
const slots = defineSlots()
interface Props {
  formItems: FormItems[] // 表单项
  params?: any // form 参数
  showBtn?: boolean // 是否显示按钮（默认：true）
  labelPosition?: any // label位置
  inline?: boolean
  editable?: boolean // 是否只读
  labelWidth?: boolean // label宽度
  rules?: any // 表单校验
  filterParams?: Function // 查询参数过滤
  submit?: Function // 查询事件
  reset?: Function // 重置事件
  init?: boolean // 初始化时是否查询数据（默认：true）
  api?: string // 接口api
  refTable?: string // 组件名称
  columns?: any[] // 列参数
  pagination?: boolean // 是否显示分页
  data?: any[] // 本地数据
  tableOptions?: object // 表格配置
  selection?: any[] // 选中数据
  rowId?: string // 行id （type=='selection'时必传 ）
  paginationProps?: object // 分页配置
  page?: pageType
}
const props = withDefaults(defineProps<Props>(), {
  editable: true
})
const emit = defineEmits(['update:params', 'update:selection', 'submit', 'reset'])
const $api = inject('$api') as any
const parmasModel = useVModel(props, 'params', emit)
const selectionModel = useVModel(props, 'selection', emit)

const rules = computed(() => props.rules)
const tableData = ref<any>([])
const basePage = ref<pageType>({
  current: 1,
  size: 10,
  total: 0
})
const basePaginationProps = ref({
  'page-sizes': [10, 20, 30, 40],
  layout: 'total, sizes, prev, pager, next, jumper',
  class: '',
  onSizeChange: (val) => {
    basePage.value.size = val
    fetch()
  },
  onCurrentChange: (val) => {
    basePage.value.current = val
    fetch()
  }
})

onMounted(() => {
  if (props.init) {
    fetch()
  }
})

watch(
  () => props.paginationProps,
  () => {
    if (props.page) {
      basePaginationProps.value = { ...basePaginationProps.value, ...props.paginationProps }
    }
  },
  { deep: true }
)

watch(
  () => props.page,
  () => {
    if (props.page) {
      basePage.value = { ...basePage.value, ...props.page }
    }
  },
  { deep: true }
)

// 自动查询
const fetch = () => {
  if (props.submit) {
    props.submit()
  } else {
    const data = {
      page: basePage.value,
      query: {
        name: '木木木木'
      }
    }
    if (!props.api) return
    if (props.data) return

    if (props.filterParams) {
      data.query = props.filterParams(parmasModel.value)
    }

    if (props.params) {
      $api(props.api, data).then((res) => {
        basePage.value.total = res.data.total
        tableData.value = res.data.rows
      })
    } else {
      tableData.value = props.data
    }
  }
}
</script>

<style lang="scss" scoped></style>
