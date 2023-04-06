import axios from 'axios'

// 创建axios实例
const instance = axios.create({
  // baseURL: 'http://127.0.0.1:5000', // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  baseURL: '/api',
  timeout: 1000, // 响应时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Cache-Control': 'no-cache'
  }
})

// 设置请求头
// instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 添加请求拦截器
axios.interceptors.request.use(
  // 发请求前的处理
  request => {
    return request
  },
  // 错误处理
  error => {
    return error
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  // 响应处理
  response => {
    return response
  },
  error => {
    return error
  }
)

export default instance
