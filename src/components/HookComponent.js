import React, { useState, useEffect } from 'react'

const Hook = (props) => {
    /**
     * useState参数为初始值，返回结果为一个数组
     * 第一项是state，第二项就相当于是setState
     */
    const [form, setForm] = useState({
        name: '张三',
        age: 18,
        country: 'china'
    });

    function handleChange({ target }) {
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    function submit() {
        alert(JSON.stringify(form))
        // props传入方法触发
        props.changeName(form.name)
    }


    // React.memo()
    // 可以在一个组件中多次使用 State Hook
    /**
     * 生命周期方法要如何对应到 Hook？
     * 1、constructor：函数组件不需要构造函数。你可以通过调用 useState 来初始化 state。如果计算的代价比较昂贵，你可以传一个函数给 useState。
     * 2、getDerivedStateFromProps：改为 在渲染时 安排一次更新。
     * 3、shouldComponentUpdate：详见 下方 React.memo
     * 4、render：这是函数组件体本身。
     * 5、重要：componentDidMount, componentDidUpdate, componentWillUnmount：useEffect Hook 可以表达所有这些(包括【不那么】【常见】的场景)的组合。
     * 6、getSnapshotBeforeUpdate，componentDidCatch 以及 getDerivedStateFromError：目前还没有这些方法的 Hook 等价写法，但很快会被添加。
     */

    /**
     * useEffect
     * 1、重要：该 Hook 接收一个包含命令式、且可能有副作用代码的函数。
     * https://react.docschina.org/docs/hooks-effect.html
     * useEffect 做了什么？ 通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。在这个 effect 中，我们可以执行数据获取或调用其他命令式的 API。
     * 为什么在组件内部调用 useEffect？ 将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。
     * useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。
     *
     * useEffect 的参数（副作用函数）在组件内执行，可以直接访问组建的state
     */


    /**
     * 如果想执行只运行一次的 effect，第二个参数传[],
     * 这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行
     * 但是这样其实不安全
     */
    useEffect(() => {
        console.log('form.name变化时才会触发')
        console.log(form.name)
        document.title = `countA`;
    }, []); // 依赖 form.name，它改变时会重新执行，感觉可以实现监听

    useEffect(() => {
        console.log('useEffect触发了')
        // 每个 effect 都可以返回一个清除函数，React 会在组件卸载的时候执行清除操作
        return () => {
            document.title = ''
            console.log('效果已清除')
        }
    })



    return (
        <div>
            <div>
                <div>
                    姓名：<input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                </div>
                <div>
                    年龄：<input
                            type="text"
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                        />
                </div>
                <div>
                    国家：<input
                            type="text"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                        />
                </div>
                <button onClick={() => submit()}>查看表单</button>
            </div>
        </div>
    )
}



export default Hook
