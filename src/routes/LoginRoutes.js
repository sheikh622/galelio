import { lazy } from 'react';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
// login routing
const AuthLogin = Loadable(lazy(() => import('views/auth/login')));
const AuthForgot = Loadable(lazy(() => import('views/auth/forgetPassword')));
const AuthRsetPassword = Loadable(lazy(() => import('views/auth/resetPassword')));
const SignUpMarketPlace = Loadable(lazy(() => import('views/auth/signUp')));
const SocialLogin = Loadable(lazy(() => import('views/auth/socialLogin')));
const ChangePassword = Loadable(lazy(() => import('shared/changePassword/component/ChangePassword')));
const Starting = Loadable(lazy(() => import('views/pages/local/startingPage')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <MinimalLayout />
        </NavMotion>
    ),
    children: [
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '/',
            element: <Starting />
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
            path: '/signUp',
            element: <SignUpMarketPlace />
        },
        {
            path: '/ChangePassword',
            element: <ChangePassword />
        },
        {
            path: '/socialLogin',
            element: <SocialLogin />
        }
    ]
};

export default LoginRoutes;
