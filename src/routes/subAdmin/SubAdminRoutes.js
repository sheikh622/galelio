import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import SubAdminGuard from './SubAdminGuard';

const SubAdmin = Loadable(lazy(() => import('views/pages/subAdmin/dashboard')));


// ==============================|| MAIN ROUTING ||============================== //

const SubAdminRoutes = {
    path: '/',
    element: (
        <SubAdminGuard>
            <MainLayout />
        </SubAdminGuard>
    ),
    children: [
        {
            path: '/dashboard',
            element: <SubAdmin />
        },
   
    ]
};

export default SubAdminRoutes;
