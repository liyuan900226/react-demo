简易版的redux
    1、在需要的页面引入store
 
    2、获取状态：store.getState()
    
    constructor(props) {
        super(props)
        this.state = {
            num: 14,
            ...store.getState().user  // 不需要订阅
        }
    }
    
    3、修改状态
    action = {
        type: 'SET_USER',
        data: { name: 'zhangsan' }
    }
    store.dispatch(action)
    
    4、修改完state中的状态就会自动更新
