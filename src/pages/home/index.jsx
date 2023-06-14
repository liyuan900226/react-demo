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
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
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
                    <div>
                        <p>>>>>>>>>>>>>>>>>测试setState>>>>>>>>>>>>>>>>>></p>
                        <span>数量{ this.state.num }</span>
                        <button onClick={() => this.testSetState()}>测试setState</button>
                    </div>
                </div>
                <TabBar/>
            </div>
        );
    }

    componentDidMount() {
        // add({name: 'ok', status: '1'})
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
        // console.log('触发了自定义事件')
    }

    /**
     * 将 setState() 视为请求而不是立即更新组件的命令。
     * 为了更好的感知性能，React 会延迟调用它，然后通过一次传递更新多个组件。
     * React 并不会保证 state 的变更会立即生效。
     *
     * 除非 shouldComponentUpdate() 返回 false，否则 setState() 将始终执行重新渲染操作
     */
    testSetState() {
        /**
         * 方法一： 调用setState时 获取state
         * 此时两个 setState 方法传入的最新state是一致的，
         * 所以两个 setState 相当于重复执行了一次
         */
        // this.setState({
        //     ...this.state,
        //     num: this.state.num + 1
        // })
        // this.setState({
        //     ...this.state,
        //     num: this.state.num + 1
        // })
        /**
         * 方法二：此时是渲染前才获取 state
         * 所以第二次执行获取的 state 是第一次（渲染微任务）更新后的值
         *
         * 参数中的方法第一个为 state，第二个为 props
         */
        this.setState((state, props) => ({
            ...state,
            num: state.num + 1
        }))
        this.setState((state, props) => ({
            ...state,
            num: state.num + 1
        }))
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
        }, () => console.log('改完了'))
        console.log(this.state)
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
