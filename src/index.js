import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import routes from './router'

// react-redux
import { Provider } from 'react-redux'
import store from './redux/store'
// import * as serviceWorker from './serviceWorker';

// 全局样式、全局变量及方法
import './assets/scss/base.scss'
import './utils/tool'

// mock
require('./mock/index')


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Suspense fallback={ <div>加载中...</div> }>
                <HashRouter>
                    <Switch>
                        {
                            routes.map((item,key)=> {
                                if(item.exact) {
                                    return <Route key={key} exact path={item.path} component={item.components}/>
                                }else {
                                    return <Route key={key} path={item.path} component={item.components}/>
                                }
                            })
                        }
                        {/*如果都没有匹配到，重定向*/}
                        <Redirect to='/login' />
                    </Switch>
                </HashRouter>
            </Suspense>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
