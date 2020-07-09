import * as actionTypes from "./action-types";
import { getIndexDetail } from '@/api'

// 同步action
export const edit = (username) => ({type: actionTypes.SET_USER, username})

// 异步action
export const deleteUser = (username) => {
    return async dispatch => {
        await getIndexDetail({petId: 1})
        dispatch(edit(username))
    }
}
