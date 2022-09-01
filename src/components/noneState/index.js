import React from 'react'  // 创建组件、虚拟DOM元素、生命周期
import { useState } from 'react'
export default function (props) {
    // 声明一个叫 "count" 的 state 变量，0是这个状态的初始值
    //
    const [count, setCount] = useState(0);
    // eslint-disable-next-line
    const [key, setKey] = useState('0');
    const [form, setForm] = useState({
        name: '张三',
        age: 18,
        country: 'china'
    });

    function click() {
        setKey('100')
        console.log(form)
    }

    return (
        <div>
            <p>无状态组件及Hook</p>
            props：{ props.name }
            <p>You clicked {count} times。key：{ key }</p>
            <button onClick={() => click()}>
            {/*<button onClick={() => setCount(count + 1)}>*/}
                Click me
            </button>
            <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value}) }/>
        </div>
    )
}
