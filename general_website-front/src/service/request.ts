import axios from 'axios'
import { store } from '@/redux'

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/smilling-cat', // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // baseURL: '/api',
  timeout: 1000, // 响应时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Cache-Control': 'no-cache'
  }
})

// 设置请求头
// instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

/**
 * @description 请求拦截器
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * token校验(JWT) : 接受服务器返回的token,存储到redux/本地储存当中
 */
axios.interceptors.request.use(
  request => {
    const token = store.getState().user.token
    request.headers.Authorization = token
    return request
  },
  // 错误处理
  error => {
    return Promise.reject(error)
  }
)
/**
 * @description 响应拦截器
 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
 */
// 添加响应拦截器
axios.interceptors.response.use(
  // 响应处理
  response => {
    const { data } = response
    if (data && data.code === 0) {
      return response.data.data
    } else {
      return Promise.reject(response.data.message)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
