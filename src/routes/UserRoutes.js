import { lazy } from 'react';

// project imports
import UserGuard from './RouteGuard/UserGuard';
import UserLayout from 'layout/UserLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
//New Routing
const ComingSoon = Loadable(lazy(() => import('views/pages/staticCode/comingSoon/ComingSoon')));
const LandingPage = Loadable(lazy(() => import('views/pages/user/landingPage')));
const Marketplace = Loadable(lazy(() => import('views/pages/user/marketplace')));
const ProductDetails = Loadable(lazy(() => import('views/pages/user/productDetails')));
const DeliveryDashboard = Loadable(lazy(() => import('views/pages/user/deliveryDashboard')));
//Old Routing

const Profile = Loadable(lazy(() => import('views/pages/staticCode/creatorProfile')));
const CompanyPage = Loadable(lazy(() => import('views/pages/staticCode/companyPage')));


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
            path: '/landingPage',
            element: <LandingPage />
        },
        {
            path: '/ComingSoon',
            element: <ComingSoon />
        },
        {
            path: '/marketplace',
            element: <Marketplace />
        },
        {
            path: '/productDetails',
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
        }
    ]
};

export default UserRoutes;
