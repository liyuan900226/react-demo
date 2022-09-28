import React, {Component} from 'react';
import PropTypes from 'prop-types';
// tabBar组件
import TabBar from '@/components/tabBar'

// action-creator
import { edit, changeUser } from '../../redux/actions'
import { connect } from 'react-redux'
import store from "../../redux/store";


class Index extends Component {
    /**
     * redux三大原则
     * 1、单一数据源
     * 2、state只读，修改state的唯一方法是触发action
     * 3、使用reducer（纯函数）来执行修改（为了描述 action 如何改变 state tree ，你需要编写 reducers）
     *    reducer接收一个state，返回一个新的state，他只负责这个作用，所以不允许出现副作用（不确定性）
     *
     */

    /**
     * action
     * Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。
     * import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
     *
     * 虽然 Redux 要求每个 action 对象都有一个 type 的字段，但是你的 reducer 逻辑不必一定要依赖它做处理。也就是说，标准方法肯定是用基于 type 的 switch 语句或者查找表。
     */

    /**
     * reducer
     * 应该有类似 (previousState, action) => newState 特征的函数
     * redux当中的reducer之所以叫做reducer,是因为它和 Array.prototype.reduce 当中传入的回调函数非常相似。
     *
     */

    //如果没有传递该属性时的默认值
    // static defaultProps = {
    //     name: 'stranger'
    // }
    //如果传递该属性，该属性值必须为字符串
    static propTypes={
        edit:PropTypes.func.isRequired,
        user:PropTypes.object.isRequired
    }


    constructor(props) {
        super(props)
        this.state = {
            ...store.getState()
        }
        console.log(this.state)
        // 修改状态
        this.props.edit('张三2')
    }

    render() {
        return (
            <div>
                redux
                <p onClick={() => this.props.changeUser({petId: 1}) }>异步action</p>

                <p>无需订阅的state：{JSON.stringify(this.props.user.username)}</p>
                <TabBar/>
            </div>
        );
    }
}
// 第一个参数返回的对象会被合并到props里面
/**
 * @params: mapStateToProps<Function>、mapDispatchToProps<Function>
 *
 *     mapStateToProps: 将store中的state映射到props中去
 *     该方法返回对象（包含store中的user数据）将会和组件的 props 合并，
 *     store中的user发生变化都会重新触发该方法并和 props 合并
 *
 *     mapDispatchToProps: 将store中的dispatch映射到props中去
 *     该对象将会被合并到props中，通过this.props.[action-creator]() 即可调用dispatch该action
 */
export default connect(
    /**
     * @这里如果写成 state => state , 则会将store中所有的状态都引入到该页面，
     * 这样store中任意状态发生改变时都会重新渲染这个页面；
     * 按需引入则只有该引入的状态变化时才会重新渲染该组件。
     */
    state => ({user: state.user,userList: state.userList}),
    {edit, changeUser}
)(Index);
