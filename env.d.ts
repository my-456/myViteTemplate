/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  import Vue from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any> | Vue
  export default component
}
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
