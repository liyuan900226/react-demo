import { createStore } from 'redux'
import resucers from './reducers'
export default createStore(
    resucers,
    // chrome工具
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
