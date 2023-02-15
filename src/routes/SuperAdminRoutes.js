import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AdminGuard from './RouteGuard/AdminGuard';
// const Starting = Loadable(lazy(() => import('views/pages/local/startingPage')));

const SuperAdminDashboard = Loadable(lazy(() => import('views/pages/superAdmin/dashboard')));
const SubAdmin = Loadable(lazy(() => import('views/pages/superAdmin/subAdmin')));
const Brand = Loadable(lazy(() => import('views/pages/superAdmin/brands')));
const BrandAdmin = Loadable(lazy(() => import('views/pages/superAdmin/brands/brandAdmin')));
const BrandCategory = Loadable(lazy(() => import('views/pages/superAdmin/brands/brandCategory')));
const Categories = Loadable(lazy(() => import('views/pages/superAdmin/categories')));
const NftManagement = Loadable(lazy(() => import('views/pages/superAdmin/nftManagement')));
const Category = Loadable(lazy(() => import('views/pages/brandAdmin/brandCategory')));
// ==============================|| MAIN ROUTING ||============================== //

const SuperAdminRoutes = {
    id: 'super_admin',
    path: '/',
    element: (
        <AdminGuard>
            <MainLayout />
        </AdminGuard>
    ),
    type: 'group',
    children: [
        // {
        //     path: '/',
        //     element: <Starting />
        // },
        {
            path: '/dashboard',
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
            path: '/brands/category',
            element: <BrandCategory />
        },
        {
            path: '/categories',
            element: <Categories />
        },
        {
            path: '/category',
            element: <Category />
        },
        {
            path: '/subAdminManagement',
            element: <SubAdmin />
        },
        {
            path: '/nftManagement',
            element: <NftManagement />
        },
        
    ]
};

export default SuperAdminRoutes;
