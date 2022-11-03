import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import SubAdminGuard from './SubAdminGuard';

const SubAdmin = Loadable(lazy(() => import('views/pages/subAdmin/dashboard')));
const Category = Loadable(lazy(() => import('views/pages/superAdmin/categories')));
const Brand = Loadable(lazy(() => import('views/pages/superAdmin/brands')));
const BrandManagement = Loadable(lazy(() => import('views/pages/superAdmin/brandManagement')));
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
        {
            path: '/brands',
            element: <Brand />
        },
        {
            path: '/categories',
            element: <Category />
        },
        {
            path: '/brandManagement',
            element: <BrandManagement />
        },
   
    ]
};

export default SubAdminRoutes;
