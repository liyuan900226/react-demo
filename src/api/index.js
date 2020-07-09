/**
 * 包含了n个接口请求的函数的模块
 * 函数返回值为: promise
 */
import request from './request'

// 查询详情
export const getIndexDetail = ({petId}) => request('get', '/pet/', {petId})
// 新增
export const add = ({name, status}) => request('post','/pet',{name, status})

