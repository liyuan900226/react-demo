import React from "react";
const routes = [
    {
        path: '/login',
        components: React.lazy(() => import('./login')),
        exact: true
    },

]
export default routes;
