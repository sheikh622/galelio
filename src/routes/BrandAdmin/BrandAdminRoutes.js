import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import BrandAdminGuard from './BrandAdminGuard';

const BrandAdmin = Loadable(lazy(() => import('views/pages/brandAdmin/dashboard')));


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
   
    ]
};

export default BrandAdminRoutes;
