import axios from 'axios'

// 创建Axios实例
const service = axios.create({
    // headers: { 'content-type': 'application/x-www-form-urlencoded' },
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login
                alert(111)
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error + '==' + 11111111111) // for debug
        return Promise.reject(error)
    }
)

export default service
