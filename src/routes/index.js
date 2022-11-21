import React from 'react';
import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

import { useSelector } from 'react-redux';
// routes
import SuperAdminRoutes from './superAdmin/SuperAdminRoutes';
import SubAdminGuard from './subAdmin/SubAdminRoutes';
import BrandAdminGuard from './BrandAdmin/BrandAdminRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import Loadable from 'ui-component/Loadable';


const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));
// ==============================|| ROUTING RENDER ||============================== //
export default function ThemeRoutes() {
    return useRoutes([{ path: '/', element: <PagesLanding /> },
     AuthenticationRoutes, LoginRoutes, SuperAdminRoutes]);
}
// export default function ThemeRoutes() {
//     const userData = useSelector((state) => state.auth);
   
//     // const userData = useSelector((state) => state.auth);
//     if (userData.user && userData.user.role == 'Super Admin') {
//         return useRoutes([SuperAdminRoutes, LoginRoutes, AuthenticationRoutes] );
//     } else if (userData.user && userData.user.role == 'Admin') {
//         return useRoutes([SubAdminGuard, LoginRoutes, AuthenticationRoutes]);
//     } else if (userData.user && userData.user.role == 'Brand Admin') {
//         return useRoutes([BrandAdminGuard, LoginRoutes, AuthenticationRoutes]);
//     } 
//     else{
//         return useRoutes([LoginRoutes, AuthenticationRoutes] );
//     }
// }
