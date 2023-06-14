import React from "react";
const routes = [
    {
        path: '/hook',
        components: React.lazy(() => import('./Index')),
        exact: true
    }
]
export default routes;
