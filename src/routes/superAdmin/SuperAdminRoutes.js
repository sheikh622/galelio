import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import SuperAdminGuard from './SuperAdminGuard';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';

const SuperAdminDashboard = Loadable(lazy(() => import('views/pages/superAdmin/dashboard')));
const SubAdmin = Loadable(lazy(() => import('views/pages/superAdmin/subAdmin')));
const Brand = Loadable(lazy(() => import('views/pages/superAdmin/brands')));
const BrandAdmin = Loadable(lazy(() => import('views/pages/superAdmin/brands/brandAdmin')));
const Category = Loadable(lazy(() => import('views/pages/superAdmin/categories')));


// ==============================|| MAIN ROUTING ||============================== //

const SuperAdminRoutes = {
    id: 'super_admin',
    path: '/',
    element: (
        <SuperAdminGuard>
            <MainLayout />
        </SuperAdminGuard>
    ),
    type: 'group',
    children: [
        {
            path: '/',
            element: <SuperAdminDashboard />
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
        },
        {
            path: '/subAdminManagement',
            element: <SubAdmin />
        },
       
    ]
};

export default SuperAdminRoutes;
