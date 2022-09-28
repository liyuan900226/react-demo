import * as actionTypes from "./action-types";
import { changeUserR } from '@/api'
/**
 * action-creator 方法生成action
 * 包含异步的和同步的
 * 同步的action对象返回的是个对象
 */
const change = (username) => ({type: actionTypes.CHANGE_USER, username})

// 同步action,
export const edit = (username) => ({type: actionTypes.SET_USER, username})


// 异步action，依赖中间件redux-thunk 需要先请求接口，然后在执行dispatch
export const changeUser = (params) => {
    return async dispatch => {
        await changeUserR(params)
        dispatch(change('异步action：res'))
    }
}
