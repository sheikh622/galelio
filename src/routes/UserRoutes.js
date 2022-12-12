import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import UserLayout from 'layout/UserLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
import CompanyPage from 'views/pages/landing/companyPage';

//New Routing
const LandingPage = Loadable(lazy(() => import('views/pages/user/landingPage')));
const Marketplace = Loadable(lazy(() => import('views/pages/user/marketplace')));
const ProductDetails = Loadable(lazy(() => import('views/pages/user/productDetails')));
//Old Routing

const Profile = Loadable(lazy(() => import('views/pages/landing/creatorProfile')));
// ==============================|| market  ROUTING ||============================== //

const UserRoutes = {
    path: '/',
    element: (
        <NavMotion>
            {/* {/ <GuestGuard> /} */}
                <UserLayout />
            {/* {/ </GuestGuard> /} */}
        </NavMotion>
    ),
    children: [
        {
            path: '/landingPage',
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
            element: <Profile />},
            {
            path: '/companyPage',
            element: <CompanyPage />
        }
    ]
};

export default UserRoutes;