<template>
  <div class="login">
    <div class="login-box">
      <div class="title">后台管理系统</div>
      <div class="form">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          style="width: 80%"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" type="username" clearable>
              <template #prefix>
                <div class="icon">
                  <i-ep-User />
                </div>
              </template>
            </el-input>
          </el-form-item>
          <div style="height: 10px"></div>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              show-password
              clearable
            >
              <template #prefix>
                <div class="icon">
                  <i-ep-View />
                </div>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="checked">
          <el-checkbox v-model="isRemember">记住密码</el-checkbox>
          <span class="span">忘记密码</span>
        </div>
        <el-button class="btn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FormInstance } from 'element-plus/es/components/form'
import { rules } from './config'
import LocalCache from '@/utils/cache'
//import proxy from '@/globle/globle'
import appStore from '@/stores'
const ruleFormRef = ref<FormInstance>()
// 是否记住密码
const isRemember = ref<boolean>(false)
const ruleForm = reactive({
  password: '',
  username: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      appStore.useUserStore.loginAction(ruleForm)
      // proxy().$api('loginRequest', ruleForm).then((res: any) => {
      //   console.log('res', res)
      // })
      // 判断是否需要记住密码
      if (isRemember.value) {
        // 本地缓存
        LocalCache.setCache('password', ruleForm.password)
        LocalCache.setCache('username', ruleForm.username)
      } else {
        LocalCache.deleteCache('password')
        LocalCache.deleteCache('username')
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped>
@import url('./login.less');
</style>
