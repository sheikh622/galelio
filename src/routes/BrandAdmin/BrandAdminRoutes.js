import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import BrandAdminGuard from './BrandAdminGuard';

const BrandAdminDashboard = Loadable(lazy(() => import('views/pages/brandAdmin/dashboard')));
const Category = Loadable(lazy(() => import('views/pages/brandAdmin/categories')));
const NFTCategory = Loadable(lazy(() => import('views/pages/brandAdmin/nftCategory')));


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
        // {
        //     path: '/:categoryName/:categoryId',
        //     element: <NFTCategory />
        // }
    ]
};

export default BrandAdminRoutes;
