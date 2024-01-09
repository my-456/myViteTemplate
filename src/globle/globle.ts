export default function () {
  const proxy = (getCurrentInstance() as any).appContext.config.globalProperties
  return proxy
}
