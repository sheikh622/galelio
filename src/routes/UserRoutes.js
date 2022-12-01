import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import UserLayout from 'layout/UserLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';
import CompanyPage from 'views/pages/companyPage';

// login routing
const LandingPage = Loadable(lazy(() => import('views/pages/landingPage')));
const Marketplace = Loadable(lazy(() => import('views/pages/marketplace')));

// ==============================|| AUTH ROUTING ||============================== //

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
            path: '/companyPage',
            element: <CompanyPage />
        }
    ]
};

export default UserRoutes;
