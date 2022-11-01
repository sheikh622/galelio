import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import BrandAdminGuard from './BrandAdminGuard';

const BrandAdmin = Loadable(lazy(() => import('views/pages/brandAdmin/dashboard')));

const Category = Loadable(lazy(() => import('views/pages/superAdmin/categories')));
const Brand = Loadable(lazy(() => import('views/pages/superAdmin/brands')));
// ==============================|| MAIN ROUTING ||============================== //

const BrandAdminRoutes = {
    path: '/',
    element: (
        <BrandAdminGuard>
            <MainLayout />
        </BrandAdminGuard>
    ),
    children: [
        {
            path: '/dashboard',
            element: <BrandAdmin />
        },
        {
            path: '/brands',
            element: <Brand />
        },
        {
            path: '/categories',
            element: <Category />
        },
   
    ]
};

export default BrandAdminRoutes;
