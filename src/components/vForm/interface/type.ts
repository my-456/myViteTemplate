type itemType =
  | 'input'
  | 'textarea'
  | 'password'
  | 'number'
  | 'select'
  | 'switch'
  | 'radio'
  | 'date'
  | 'year'
  | 'month'
  | 'week'
  | 'datetime'
  | 'dates'
  | 'yearrange'
  | 'monthRange'
  | 'weekrange'
  | 'datetimerange'
  | 'time'
  | 'checkbox'
  | 'daterange'
  | 'cascader'
  | 'upload'
  | 'component'

export interface FormProps {
  inline?: Boolean
  labelWidth?: string | number
  labelPosition?: 'left' | 'top' | 'right'
  btn?: object[]
}

type OptionsType = {
  label: string
  value: string | number
}[]

export interface FormItems {
  type: itemType
  label?: string
  prop: string
  valueProp?: string
  width?: string | number
  span?: number
  filter?: string
  options?: OptionsType
  props?: Object
  events?: Object
  component?: any
  //   format?: string
  //   valueFormat?: string
  //   startPlaceholder?: string
  //   endPlaceholder?: string
}

export interface commonForm {
  data: any
  rules?: object
  elRowGutter?: number
  editable?: boolean
  formProps?: FormProps
  formItems: FormItems[]
  dataArray?: object[]
}

export class Filed {
  public data: any
  private rules?: object
  public elRowGutter?: number
  public editable?: boolean
  public formProps?: FormProps
  public formItems: FormItems[]
  public dataArray?: object[]

  constructor({
    data = {},
    rules = {},
    editable = true,
    formProps = {},
    formItems = [],
    elRowGutter = 0
  }: any) {
    this.data = data
    this.rules = rules
    this.elRowGutter = elRowGutter
    this.editable = editable
    this.formItems = formItems
    this.formProps = formProps
  }
}
