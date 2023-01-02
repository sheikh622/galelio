import { lazy } from 'react';

// project imports
import UserGuard from './RouteGuard/UserGuard';
import UserLayout from 'layout/UserLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
import CompanyPage from 'views/pages/landing/companyPage';

//New Routing
const LandingPage = Loadable(lazy(() => import('views/pages/user/landingPage')));
const Marketplace = Loadable(lazy(() => import('views/pages/user/marketplace')));
const ProductDetails = Loadable(lazy(() => import('views/pages/user/productDetails')));
const DeliveryDashboard = Loadable(lazy(() => import('views/pages/user/deliveryDashboard')));
//Old Routing

const Profile = Loadable(lazy(() => import('views/pages/landing/creatorProfile')));


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
            path: '/',
            element: <LandingPage />
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
