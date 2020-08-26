import request from '@/utils/request'

// 获取用户列表
export function getIndexList() {
  return request({
    url: '/mini_pro/getIndexData',
    // baseURL: 'http://localhost:7300/mock/5f45c0835401432ca0d69f3b',
    method: 'get'
  })
}