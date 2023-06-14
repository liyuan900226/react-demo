import React, { useState, useEffect } from 'react'

const Hook = (props) => {
    /**
     * *************   WHY HOOK -motivation (动机)：（   ***************
     * 状态复用，单独的逻辑拆分易于测试，）
     *     1、在组件之间更加便捷的复用状态
     *          如果你在 React DevTools 中观察过 React 应用，你会发现由 providers，consumers，高阶组件，
     *          render props 等其他抽象层组成的组件会形成“嵌套地狱”
     *     2、使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以【单独测试并复用】。
     *          Hook 使你在无需修改组件结构的情况下复用状态逻辑。
     *          这使得在组件间或社区内共享 Hook 变得更便捷。
     *     3、每个生命周期常常包含一些不相关的逻辑，例如componentDidMount中含有A、B两个逻辑
     *          完全不相关的代码却在同一个方法中组合在一起。如此很容易产生 bug，并且导致逻辑不一致
     *     4、难以理解的 class
     *          class 是学习 React 的一大屏障。你必须去理解 JavaScript 中 this 的工作方式
     *          class 也给目前的工具带来了一些问题。例如，class 不能很好的压缩，并且会使热重载出现不稳定的情况。因此，我们想提供一个使代码更易于优化的 API。
     *          Hook 使你在非 class 的情况下可以使用更多的 React 特性。 从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。
     *     5、Hook 和现有代码可以同时工作，你可以渐进式地使用他们
     *          我们建议避免任何“大规模重写”，尤其是对于现有的、复杂的 class 组件
     *          开始“用 Hook 的方式思考”前，需要做一些思维上的转变。按照我们的经验，
     *          最好先在新的不复杂的组件中尝试使用 Hook，并确保团队中的每一位成员都能适应。
     */

    /**
     * *************   HOOK 规则   ***************
     *  1、只在最顶层使用 Hook，确保总是在你的 React 函数的最顶层调用他们。
     *     遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用
     *  2、只在 React 函数中调用 Hook，不要在普通的 JavaScript 函数中调用 Hook，你可以：
     *     ✅ 在 React 的函数组件中调用 Hook
     *     ✅ 在自定义 Hook 中调用其他 Hook (我们将会在下一页 中学习这个。)
     */



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
     * 初始 state 需要通过复杂计算获得，则可以传入一个函数，
     * 在函数中计算并返回初始的 state，此函数只在初始渲染时被调用
     */
    // function someExpensiveComputation() {
    //     return {
    //         age: 1,
    //     }
    // }
    // const [person, setPerson] = useState(() => {
    //     const initialState = someExpensiveComputation(props);
    //     return initialState;
    // });


    /**
     * 如果想执行只运行一次的 effect，第二个参数传[],
     * 这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行
     * 但是这样其实不安全
     * componentDidMount
     */
    useEffect(() => {
        console.log('componentDidMount')
    }, []);

    useEffect(() => {
        return () => {
            console.log('componentWillUnmount')
        }
    }, [])

    /**
     * 依赖列表安全性！
     * 建议副作用函数中用到那些依赖，就在依赖列表中声明出来（它必须包含副作用中的所有值）
     * 只有 当函数（以及它所调用的函数）不引用 props、state 以及由它们衍生而来的值时，你才能放心地把它们从依赖列表中省略
     */
    // function Example({ someProp }) {
    //     function doSomething() {
    //         console.log(someProp);
    //     }
    //
    //     useEffect(() => {
    //         doSomething();
    //     }, []); // 🔴 这样不安全（它调用的 `doSomething` 函数使用了 `someProp`）
    // }
    // function Example({ someProp }) {
    //     useEffect(() => {
    //         function doSomething() {
    //             console.log(someProp);
    //         }
    //
    //         doSomething();
    //     }, [someProp]); // ✅ 安全（我们的 effect 仅用到了 `someProp`）
    // }
    // useEffect(() => {
    //     function doSomething() {
    //         console.log('hello');
    //     }
    //
    //     doSomething();
    // }, []); // ✅ 在这个例子中是安全的，因为我们没有用到组件作用域中的 *任何* 值



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
