import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import UserLayout from 'layout/UserLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';

// market routing
const LandingPage = Loadable(lazy(() => import('views/pages/landing/biggestNFTMarketplace')));
const Marketplace = Loadable(lazy(() => import('views/pages/marketplace')));
const ProductDetails = Loadable(lazy(() => import('views/pages/landing/ProductDetails')));
const BiggestNFTMarketplace = Loadable(lazy(() => import('views/pages/landing/biggestNFTMarketplace')));
const Profile = Loadable(lazy(() => import('views/pages/landing/creatorProfile')));
// ==============================|| market  ROUTING ||============================== //

const UserRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <GuestGuard>
                <UserLayout />
            </GuestGuard>
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
            path: '/BiggestNFTMarketplace',
            element: <BiggestNFTMarketplace />
        },
        {
            path: '/creatorProfile',
            element: <Profile />
        }
    ]
};

export default UserRoutes;
