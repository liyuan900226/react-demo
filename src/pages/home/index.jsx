import React, {Component} from 'react';
import {Link } from 'react-router-dom'

// tabBar组件
import TabBar from '@/components/tabBar'

// time组件，用来测试组件特性，插槽特性尚未学习
import Time from '@/components/time'

class Index extends Component {
    constructor(props) {
        super(props)
        // state 声明在 constructor 方法内和外面并无区别
        this.state = {
            name: '张三',
            time: new Date().toISOString().slice(0, 10),
            num: 14
        }
    }
    render() {
        return (
            <div>
                首页
                <div>
                    <button onClick={() => this.goQuery()}>跳转详情 query传参</button>
                    <button onClick={() => this.goParams()}>跳转详情 params传参</button>
                    <p>
                        <Link to="/homeDetail/1/zhangsan">路由链接 "Link" 跳转</Link>
                    </p>

                    {/*state  */}
                    <p id="name">姓名：{ this.state.name } <button onClick={ () => {this.changeName()} }>修改名字</button></p>

                    {/*组件传值*/}
                    <Time changeTime={this.changeTime} time={ this.state.time } />

                    {/*表单*/}
                    <p>
                        数量: <input value={this.state.num} onChange={(e) => this.numChange(e)} type="text"/>
                    </p>
                    <p>计算出总价：<input value={this.price} onChange={(e) => this.allPriceChange(e)} type="text"/></p>
                </div>
                <TabBar/>
            </div>
        );
    }

    componentDidMount() {
        // window.utils.$request("post", "/index.php/api/login", {
        //     username: "0191",
        //     password: "1",
        //     remember: "",
        // },).then(res => {
        //     console.log(res)
        // }).catch(e=> {
        //     console.log(e)
        // })
    }

    goQuery() {
        /**
         * query 传参；接收方式 this.props.location.query
         * this.props.history.push({pathname: '/homeDetail', query: {name: 'query参数'}})
         */

    }

    goParams() {
        // params 传参
        this.props.history.push('/homeDetail/1/zhangsan')
    }

    // 组件的子传父事件
    changeTime(value) {
        console.log(value)
    }

    changeName() {
        /**
         * setState只会把对应的状态更新，而不会覆盖其他的状态
         * 这个方法是异步的, setState方法第二个参数是回调，也可以用async await来实现
         */
        this.setState({
            name: '李四'
        }, () => console.log(document.getElementById('name').innerHTML))
        console.log(document.getElementById('name').innerHTML)
    }

    numChange(e) {
        console.log(e.target.value)
        this.setState({
            num: e.target.value
        })
    }
    allPriceChange(e) {
        console.log(e.target.value)
        this.setState({
            num: e.target.value / 10
        })
    }

    /**
     * 计算属性，通过es6的get、set实现
     * 在类里面可以去定义一些getter和setter，getter可以得到一些东西的方法，setter可以设置东西
     */
    get price() {
        return this.state.num * 10
    }

}

export default Index;
