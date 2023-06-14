import React from "react";
const routes = [
    {
        path: '/my',
        components: React.lazy(() => import('./index')),
        exact: true
    }
]
export default routes;
