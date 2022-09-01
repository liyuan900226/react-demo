import React, { Component } from 'react';
import {Link } from 'react-router-dom'

// tabBar组件
import TabBar from '@/components/tabBar'

// time组件，用来测试组件特性，插槽特性尚未学习
import Time from '@/components/time'

// 引入无状态组件
import NoneState from '@/components/noneState'

// 引入带HOOk的组件
import Hook from '@/components/HookComponent'


import { add } from '@/api'

class Index extends Component {
    constructor(props) {
        super(props)
        // state 声明在 constructor 方法内和外面并无区别
        this.state = {
            time: new Date().toISOString().slice(0, 10),
            num: 14,
            form: {
                name: '测试',
                year: '2020'
            },
        }

        // 通过bind 修改this指向
        this.handleChange = this.handleChange.bind(this);


    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <p>>>>>>>>>>>>>>>>>路由跳转>>>>>>>>>>>>>>>>>></p>
                        <button onClick={() => this.goQuery()}>跳转详情 query传参</button>
                        <button onClick={() => this.goParams()}>跳转详情 params传参</button>
                        <p>
                            <Link to="/homeDetail/1/zhangsan">路由链接 "Link" 跳转</Link>
                        </p>
                        <br/>
                    </div>
                    <div>
                        <p>>>>>>>>>>>>>>>>>state>>>>>>>>>>>>>>>>>></p>
                        <p id="name">姓名：{ this.state.form.name } <button onClick={ () => {this.changeName()} }>修改名字</button></p>
                        <br/>
                    </div>
                    <div>
                        <p>>>>>>>>>>>>>>>>>组件传值>>>>>>>>>>>>>>>>>></p>
                        <Time changeTime={(value) => this.changeTime(value)} time={ this.state.time } />
                        <br/>
                    </div>
                    <div>
                        <p>>>>>>>>>>>>>>>>>表单>>>>>>>>>>>>>>>>>></p>
                        <p>
                            数量: <input value={this.state.num} onChange={(e) => this.numChange(e)} type="text"/>
                        </p>
                        <p>计算出总价：<input value={this.price} onChange={(e) => this.allPriceChange(e)} type="text"/></p>
                        <br/>
                    </div>
                    <div>
                        <p>>>>>>>>>>>>>>>>>无状态组件及HOOK>>>>>>>>>>>>>>>>>></p>
                        <NoneState name='11' />
                        <br/>
                    </div>
                    <div>
                        <p>>>>>>>>>>>>>>>>>HOOK>>>>>>>>>>>>>>>>>></p>
                        <Hook changeName={(e) => alert(JSON.stringify(e))} />
                        <br/>
                    </div>
                </div>
                <TabBar/>
            </div>
        );
    }

    componentDidMount() {
        add({name: 'ok', status: '1'})
    }

    handleChange() {

    }

    goQuery() {
        /**
         * query 传参；接收方式 this.props.location.query
         * this.props.history.push({pathname: '/homeDetail', query: {name: 'query参数'}})
         */

    }

    /**
     *
     * @param a
     */
    goParams(a) {
        // params 传参
        this.props.history.push('/homeDetail/1/zhangsan')
    }

    // 组件的子传父事件
    changeTime(value) {
        console.log(value)
        this.setState({
            time: value
        })
        console.log('触发了自定义事件')
    }


    changeName() {
        /**
         * setState 只会把对应的状态更新，而不会覆盖其他的状态
         * 这个方法是异步的, setState 方法第二个参数是回调，也可以用 async await 来实现
         * 如果 state 是一个复杂对象，则需要使用三点运算符，三点运算符后面的属性之会覆盖前面的
         */
        this.setState({
            ...this.state,
            num: 15,  // 修改 state 的第一层
            form: {
                ...this.state.form,
                name: '李四'  // 修改 state 的第二层
            }
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
