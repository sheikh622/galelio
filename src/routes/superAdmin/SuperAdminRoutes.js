import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import SuperAdminGuard from './SuperAdminGuard';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
const SuperAdminDashboard = Loadable(lazy(() => import('views/pages/superAdmin/dashboard')));
const Brand = Loadable(lazy(() => import('views/pages/superAdmin/brands')));
const AdminManagement = Loadable(lazy(() => import('views/pages/superAdmin/adminManagement')));
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
            path: '/dashboard',
            element: <SuperAdminDashboard />
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
            path: '/adminManagement',
            element: <AdminManagement />
        },
 
    ]
};

export default SuperAdminRoutes;
