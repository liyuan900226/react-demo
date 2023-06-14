1、setState() 重载
多次调用合并渲染
1、当多次调用 setState 函数时，react 做了性能优化。


同步代码环境中调用 setState：在正常的 react 的事件流里，一个类式组件多次执行 setState 或者函数组件某个 useState 中的 setXXX 多次执行，只会调用一次重新渲染 render，称为合并渲染​

如果没有合并渲染，在每次执行 setState 更新函数时，组件都要重新 render 一次，会造成无效渲染，浪费时间（因为最后一次渲染会覆盖掉前面所有的渲染效果）
所以 react 会把一些可以一起更新的 setState 放在一起，进行合并，只渲染最后一次。



2、异步代码环境中调用 setState：在 setTimeout，Promise.then 等异步事件中，多次执行 setState 和 useState 中的 setXXX，每次执行都会调用 render 渲染函数

setTimeout 已经超出了 react 的控制范围，react 无法对 setTimeout 的回调代码前后加上事务逻辑（除非 react 重写 setTimeout）。
当遇到 setTimeout/setInterval/Promise.then(fn)/fetch 回调/xhr 网络回调 时，react 都是无法控制的。

作者：梓梁
链接：https://juejin.cn/post/7032916821959245861
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
