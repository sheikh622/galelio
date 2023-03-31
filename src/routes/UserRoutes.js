import { lazy } from 'react';

// project imports
import UserGuard from './RouteGuard/UserGuard';
import UserLayout from 'layout/UserLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
//New Routing
const ComingSoon = Loadable(lazy(() => import('views/pages/staticCode/comingSoon/ComingSoon')));
// const Starting = Loadable(lazy(() => import('views/pages/local/startingPage')));
const LandingPage = Loadable(lazy(() => import('views/pages/user/landingPage')));
const Starting = Loadable(lazy(() => import('views/pages/user/landingPage')));
const Marketplace = Loadable(lazy(() => import('views/pages/user/marketplace')));
const ProductDetails = Loadable(lazy(() => import('views/pages/user/productDetails')));
const DeliveryDashboard = Loadable(lazy(() => import('views/pages/user/deliveryDashboard')));
//static page routes

const Profile = Loadable(lazy(() => import('views/pages/staticCode/creatorProfile')));
const CompanyPage = Loadable(lazy(() => import('views/pages/staticCode/companyPage')));
const BMWPage = Loadable(lazy(() => import('views/pages/staticCode/BMWPage')));
const Tracking = Loadable(lazy(()=> import('views/pages/trackingTool')))


// ==============================|| market  ROUTING ||============================== //

const UserRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <UserGuard>
                <UserLayout />
            </UserGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/home',
            element: <LandingPage />
        },
        {
            path: '/',
            element: <Starting />
        },
        {
            path: '/ComingSoon',
            element: <ComingSoon />
        },
        {
            path: '/chart',
            element: <ComingSoon />
        },
        {
            path: '/bookmarks',
            element: <ComingSoon />
        },
        {
            path: '/downloads',
            element: <ComingSoon />
        },
        {
            path: '/tags',
            element: <ComingSoon />
        },
        {
            path: '/settings',
            element: <ComingSoon />
        },
        {
            path: '/marketplace',
            element: <Marketplace />
        },
        {
            path: '/productDetails/:id',
            element: <ProductDetails />
        },

        {
            path: '/creatorProfile',
            element: <Profile />
        },
        {
            path: '/deliveryDashboard',
            element: <DeliveryDashboard />
        },
        {
            path: '/companyPage',
            element: <CompanyPage />
        },
        {
            path: '/BMW',
            element: <BMWPage />
        },
        {
            path: '/*',
            element: <LandingPage />
        },
        {
            path: '/tracking',
            element: <Tracking />
        }
    ]
};

export default UserRoutes;
