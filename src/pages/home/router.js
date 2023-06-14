import React from "react";
const routes = [
    {
        path: '/home',
        components: React.lazy(() => import('./index')),
        exact: true
    },{
        path: '/homeDetail/:id/:name',
        components: React.lazy(() => import('./homeDetail/homeDetail')),
        exact: true
    },

]
export default routes;
