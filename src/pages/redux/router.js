import React from "react";
const routes = [
    {
        path: '/redux',
        components: React.lazy(() => import('./index')),
        exact: true
    }
]
export default routes;
