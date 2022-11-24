import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import BrandAdminGuard from './BrandAdminGuard';

const BrandAdminDashboard = Loadable(lazy(() => import('views/pages/brandAdmin/dashboard')));
const Category = Loadable(lazy(() => import('views/pages/brandAdmin/brandCategory')));
const NftManagement = Loadable(lazy(() => import('views/pages/brandAdmin/nftManagement')));


const BrandAdminRoutes = {
    path: '/',
    element: (
        <BrandAdminGuard>
            <MainLayout />
        </BrandAdminGuard>
    ),
    children: [
        {
            path: '/',
            element: <BrandAdminDashboard />
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

export default BrandAdminRoutes;
