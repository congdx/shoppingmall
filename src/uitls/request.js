import axios from "axios";

// 创建实例
const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use( 
  config => {
    // 在发送请求之前做什么
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return { 
      data: response.data,
      status: response.status,
      satusText: response.statusText
    }
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么

    return Promise.reject(error)
  }
)

export default service

