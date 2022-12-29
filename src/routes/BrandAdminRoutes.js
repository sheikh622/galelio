import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AdminGuard from './RouteGuard/AdminGuard';

const BrandAdminDashboard = Loadable(lazy(() => import('views/pages/brandAdmin/dashboard')));
const Category = Loadable(lazy(() => import('views/pages/brandAdmin/brandCategory')));
const DeliveryDashboard = Loadable(lazy(() => import('views/pages/brandAdmin/deliveryDashboard')));
const NftManagement = Loadable(lazy(() => import('views/pages/brandAdmin/nftManagement')));


const BrandAdminRoutes = {
    path: '/',
    element: (
        <AdminGuard>
            <MainLayout />
        </AdminGuard>
    ),
    children: [
        {
            path: '/dashboard',
            element: <BrandAdminDashboard />
        },
        {
            path: '/categories',
            element: <Category />
        },
        {
            path: '/deliveryDashboard',
            element: <DeliveryDashboard />
        },
        {
            path: '/nftManagement',
            element: <NftManagement />
        }
    ]
};

export default BrandAdminRoutes;
