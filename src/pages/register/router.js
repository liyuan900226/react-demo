import React from "react";
const routes = [
    {
        path: '/register',
        components: React.lazy(() => import('./index')),
        exact: true
    }
]
export default routes;
