// 导入路由模块
import HomeRouter from '@/pages/home/router'
import MessageRouter from '@/pages/redux/router'
import MyRouter from '@/pages/my/router'
import RegisterRouter from '@/pages/register/router'
import Hook from '@/pages/hook/router'
import Login from '@/pages/login/router'

export default [ ...Login,
    ...HomeRouter, ...MessageRouter, ...MyRouter, ...RegisterRouter, ...Hook
];
