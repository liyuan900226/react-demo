import { SET_USER, CHANGE_USER } from './action-types'


/**
 *包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 * reducer必须是一个纯函数，返回结果完全由传入参数决定，例如里面由ajax或者时间就不行！！！！！！！！！
 *
 * 因为redux把reducer设计成只负责这个作用，所以reducer的职责不允许有副作用，
 * 副作用简单来说就是不确定性，如果reducer有副作用，那么返回的state就不确定。
 */
import {combineReducers} from 'redux'


// redux中的state是不能直接修改的，只能通过action来修改，相当于我们在单例中定义setter方法。
const initUser = {
    username: '', // 用户名
    msg: '', // 错误提示信息
}
// 传入初始化的user数据，不能直接修改initUser，
function user(state=initUser, action) {
    /**
     * reducer里面只能接收state，不能改变state，也可以使用深拷贝来进行修改
     * let newState = JSON.parse(JSON.stringfy(state)) !!!!!!!!!!  (Object.assign() 不是深拷贝，貌似内层的不会深拷贝)
     * 返回一个新的state
     */
    // console.log('action')
    // console.log(action)
    switch (action.type) {
        case SET_USER: // 设置用户
            return {...state, username: action.username}
        case CHANGE_USER: // 清除用户
            return {...state, username: action.username}
        default:
            return state
    }
}


const initUserList = []
// 产生userlist状态的reducer
function userList(state=initUserList, action) {
    switch (action.type) {
        case 'RECEIVE_USER_LIST':  // data为userList
            return action.data
        case 'RECEIVE_USER_LISTS':  // data为userList
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    user,
    userList
})
// 向外暴露的状态的结构: {user: {}, userList: []}

