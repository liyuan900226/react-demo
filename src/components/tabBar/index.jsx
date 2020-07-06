import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import css from './tab.module.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 1
        }
    }
    render() {
        return (
            <div className={css.tab_bar}>
                <NavLink to='/home' activeClassName={css.active}>首页</NavLink>
                <NavLink to='/message' activeClassName={css.active}>消息</NavLink>
                <NavLink to='/register' activeClassName={css.active}>登记</NavLink>
                <NavLink to='/my' activeClassName={css.active}>我的</NavLink>
            </div>
        );
    }
}
export default Index;
