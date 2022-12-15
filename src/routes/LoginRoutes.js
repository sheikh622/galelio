import { lazy } from 'react';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
// login routing
const AuthLogin = Loadable(lazy(() => import('views/auth/login')));
const AuthForgot = Loadable(lazy(() => import('views/auth/forgetPassword')));
const AuthRsetPassword = Loadable(lazy(() => import('views/auth/resetPassword')));
const SignUpMarketPlace = Loadable(lazy(() => import('views/auth/signUp')));

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
        }
    ]
};

export default LoginRoutes;
