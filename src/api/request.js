import Axios from 'axios'

var inst = Axios.create({
  baseURL: '/',
  timeout: 3000
})
inst.interceptors.request.use(function (config) {
  // 此处要检测token，如果没有或者过期, 要重定向到login页面去
  // 考虑在这里做加载提示不，还是在请求中自己写呢
  return config
})
inst.interceptors.response.use(function (response) {
  return response
})

export default inst
