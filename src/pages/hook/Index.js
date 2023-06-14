import React, {useEffect, useMemo, useState} from "react";
export default () => {
    const [ state, setState ] = useState({
        count: 0
    })
    function effect1() { console.log(state) }
    useEffect(effect1, [1])
    /**
     * 返回一个 memoized 值
     * 这种优化有助于避免在每次渲染时都进行高开销的计算
     */
    const [ name, setName ] = useState({
        count: 'zhangsan'
    })
    const allPrice = useMemo(() => {
        console.log('计算')
        return state.count * 10
    }, [state.count])
    function effect2() { console.log('effect2') }
    useEffect(effect2, [2])

    function handleAddClick() {
        setState({count: ++state.count})
        setState({count: ++state.count})
        setState({count: ++state.count})
        setState({count: ++state.count})
        setState({count: ++state.count})
        setState({count: ++state.count})
        setState({count: ++state.count})
        setState({count: ++state.count})
    }
    return <div>
        <p>
            <button onClick={() => setState({count: --state.count})}>-</button>
            数量：{ state.count }
            <button onClick={() => handleAddClick()}>+</button>
        </p>
        <p>总价{ allPrice }</p>
    </div>
}
// handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
// }
//
// render() {
//     return (
//         <input type="text" name="firstName" onChange={this.handleChange} />
//     <input type="text" name="lastName" onChange={this.handleChange} />
// );
// }
