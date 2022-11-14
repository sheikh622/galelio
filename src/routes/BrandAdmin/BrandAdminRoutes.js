import React, { lazy } from 'react';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import BrandAdminGuard from './BrandAdminGuard';
import category from 'redux/categories/reducers';

const BrandAdmin = Loadable(lazy(() => import('views/pages/brandAdmin/dashboard')));
const Category = Loadable(lazy(() => import('views/pages/brandAdmin/categories')));
const NFTCategory = Loadable(lazy(() => import('views/pages/brandAdmin/nftCategory')));


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
            path: '/categories',
            element: <Category />
        },
        {
            path: '/:categoryName/:categoryId',
            element: <NFTCategory />
        }
   
   
    ]
};

export default BrandAdminRoutes;
