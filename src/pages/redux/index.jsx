import React, {Component} from 'react';
// tabBar组件
import TabBar from '@/components/tabBar'

import store from '@/redux/store'
import * as actionTypes from '../../redux/action-types.js'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...store.getState()  // 不需要订阅
        }

        // 修改状态
        store.dispatch({
            type: actionTypes.SET_USER,
            username: 'zhangsan'
        })

    }
    render() {
        return (
            <div>
                redux
                <p>无需订阅的state：{this.state.user.username}</p>

                <TabBar/>
            </div>
        );
    }
}

export default Index;
