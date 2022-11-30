import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/auth/login')));
const AuthForgot = Loadable(lazy(() => import('views/auth/forgetPassword')));
const AuthRsetPassword = Loadable(lazy(() => import('views/auth/resetPassword')));
const ProductDetails = Loadable(lazy(() => import('views/pages/landing/ProductDetails')));
const BiggestNFTMarketplace = Loadable(lazy(() => import('views/pages/landing/biggestNFTMarketplace')));
const LoginMarketPlace = Loadable(lazy(() => import('views/pages/landing/auth/login')));
const Marketplace = Loadable(lazy(() => import('views/pages/marketplace/index')));
const Profile = Loadable(lazy(() => import('views/pages/landing/creatorProfile')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <GuestGuard>
                <MinimalLayout />
            </GuestGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        {
            path: '/forgetPassword',
            element: <AuthForgot />
        },
        {
            path: '/resetPassword',
            element: <AuthRsetPassword />
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
        },
        {
            path: '/login',
            element: <LoginMarketPlace />
        },

    ]
};

export default LoginRoutes;
