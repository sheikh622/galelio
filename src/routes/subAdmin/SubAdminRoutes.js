import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import SubAdminGuard from './SubAdminGuard';

const SubAdminDashboard = Loadable(lazy(() => import('views/pages/subAdmin/dashboard')));
const Category = Loadable(lazy(() => import('views/pages/superAdmin/categories')));
const Brand = Loadable(lazy(() => import('views/pages/superAdmin/brands')));
const BrandAdmin = Loadable(lazy(() => import('views/pages/superAdmin/brands/brandAdmin')));

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
            path: '/',
            element: <SubAdminDashboard />
        },

        {
            path: '/brands',
            element: <Brand />
        },
        {
            path: '/brands/admin',
            element: <BrandAdmin />
        },
        {
            path: '/categories',
            element: <Category />
        }
    ]
};

export default SubAdminRoutes;
