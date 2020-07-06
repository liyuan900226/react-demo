import Index from './index'
import HomeDetail from './homeDetail/homeDetail'
const routes = [
    {
        path: '/home',
        components: Index,
        exact: true
    },{
        path: '/homeDetail/:id/:name',
        components: HomeDetail,
        exact: true
    },

]
export default routes;
