import React, {Component} from 'react';
// tabBar组件
import TabBar from '@/components/tabBar'

// action-creator
import { edit } from '../../redux/actions'

import { connect } from 'react-redux'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // ...store.getState()  // 不需要订阅
        }

        // 修改状态
        this.props.edit('张三2')

    }
    render() {
        return (
            <div>
                redux
                <p>无需订阅的state：{JSON.stringify(this.props.user.username)}</p>

                <TabBar/>
            </div>
        );
    }
}
// 第一个参数返回的对象会被合并到props里面
/**
 * @params: mapStateToProps<Function>、mapDispatchToProps<Function>
 *     mapStateToProps: 该方法返回对象（包含store中的user数据）将会和组件的 props 合并，
 *     store中的user发生变化都会重新触发该方法并和 props 合并
 *
 *     mapDispatchToProps: 该对象将会被合并到props中，通过this.props.[action-creator]() 即可调用dispatch该action
 */
export default connect(
    state => ({user: state.user,userList: state.userList}),
    {edit}
)(Index);
