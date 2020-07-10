import * as actionTypes from "./action-types";
import { changeUserR } from '@/api'
/**
 * action-creator 方法生成action
 * 包含异步的和同步的
 */
const change = (username) => ({type: actionTypes.CHANGE_USER, username})

// 同步action,
export const edit = (username) => ({type: actionTypes.SET_USER, username})


// 异步action 需要先请求接口，然后在执行
export const changeUser = (params) => {
    return async dispatch => {
        await changeUserR(params)
        dispatch(change('异步action：res'))
    }
}
