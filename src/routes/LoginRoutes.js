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
// Market login routing
const LoginMarketPlace = Loadable(lazy(() => import('views/pages/landing/auth/login')));
const SignUpMarketPlace = Loadable(lazy(() => import('views/pages/landing/auth/signUp')));
const ForgotMarketPlace = Loadable(lazy(() => import('views/pages/landing/auth/forgot')));
const ResetMarketPlace = Loadable(lazy(() => import('views/pages/landing/auth/reset')));

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
            path: '/login',
            element: <LoginMarketPlace />
        },
        {
            path: '/signUp',
            element: <SignUpMarketPlace />
        },
        {
            path: '/forgot',
            element: <ForgotMarketPlace />
        },
        {
            path: '/reset',
            element: <ResetMarketPlace />
        }
    ]
};

export default LoginRoutes;
