let BASE_URL = ''
const TIME_OUT = 100000
// 开发
if (import.meta.env.MODE === 'development') {
  BASE_URL = '/api'
  // 生产
} else if (import.meta.env.MODE === 'production') {
  BASE_URL = ''
  // 测试
} else {
  BASE_URL = ''
}

export { BASE_URL, TIME_OUT }
