import React, {Component} from 'react';
import PropTypes from 'prop-types';
// tabBar组件
import TabBar from '@/components/tabBar'

// action-creator
import { edit, changeUser } from '../../redux/actions'
import { connect } from 'react-redux'


class Index extends Component {

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
            // ...store.getState()
        }

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
