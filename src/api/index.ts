let pool: any = {}

const files = import.meta.glob('./*/*.ts')
for (const path in files) {
  const module = (await files[path]()) as any
  if (!module.register) {
    continue
  }
  // 在这里处理导入的模块
  pool = Object.assign({}, module, pool)
}

const addToPool = (obj: any) => {
  pool = Object.assign(pool, obj)
}
const Call = (method: string, param?: any, ...param2: any) => {
  if (pool[method]) {
    try {
      return Promise.resolve(pool[method](param, ...param2))
    } catch (e: any) {
      return Promise.resolve(new Error(e))
    }
  } else {
    console.log(`The Api ${method} is not defined`)
    return Promise.resolve(new Error(`The Api ${method} is not defined`))
  }
}
const install = (app: any) => {
  app.config.globalProperties.$api = (method: string, param?: any, ...param2: any) => {
    return Call(method, param, ...param2)
  }
  app.config.globalProperties.toJSON = (a: any) => {
  }
}

declare interface Call {
  method: string
  param: any
}

export { install, addToPool }
