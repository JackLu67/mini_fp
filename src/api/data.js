import request from '@/utils/request'

// 获取用户列表
export function getIndexList() {
  return request({
    url: '/getIndexList',
    baseURL: 'https://www.easy-mock.com/mock/5f43ad2137dd743fd5db5ef2',
    method: 'get'
  })
}