import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

/**
 * createStore只接收两个参数
 * 配置 redux 中间件
 */
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
