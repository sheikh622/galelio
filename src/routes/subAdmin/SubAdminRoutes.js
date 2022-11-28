import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import SubAdminGuard from './SubAdminGuard';

const SubAdminDashboard = Loadable(lazy(() => import('views/pages/subAdmin/dashboard')));
const Brand = Loadable(lazy(() => import('views/pages/superAdmin/brands')));
const BrandAdmin = Loadable(lazy(() => import('views/pages/superAdmin/brands/brandAdmin')));
const BrandCategory = Loadable(lazy(() => import('views/pages/superAdmin/brands/brandCategory')));
const Category = Loadable(lazy(() => import('views/pages/superAdmin/categories')));
const NftManagement = Loadable(lazy(() => import('views/pages/superAdmin/nftManagement')));

// ==============================|| MAIN ROUTING ||============================== //

const SubAdminRoutes = {
    path: '/',
    element: (
        <SubAdminGuard>
            <MainLayout />
        </SubAdminGuard>
    ),
    type: 'group',
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
            path: '/brands/category',
            element: <BrandCategory />
        },
        {
            path: '/categories',
            element: <Category />
        },

        {
            path: '/nftManagement',
            element: <NftManagement />
        }
    ]
};

export default SubAdminRoutes;
