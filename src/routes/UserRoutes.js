import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import UserLayout from 'layout/UserLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
import CompanyPage from 'views/pages/user/companyPage';

// market routing
const LandingPage = Loadable(lazy(() => import('views/pages/user/BiggestNFTMarketplace/index')));
const Marketplace = Loadable(lazy(() => import('views/pages/user/marketplace')));
const ProductDetails = Loadable(lazy(() => import('views/pages/user/ProductDetails')));
// const BiggestNFTMarketplace = Loadable(lazy(() => import('views/pages/')));
const Profile = Loadable(lazy(() => import('views/pages/user/creatorProfile')));


// ==============================|| market  ROUTING ||============================== //

const UserRoutes = {
    path: '/',
    element: (
        <NavMotion>
            {/* <GuestGuard> */}
                <UserLayout />
         {/* </GuestGuard> */}
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
            path: '/ProductDetails',
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