import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';


const SuperAdminDashboard = Loadable(lazy(() => import('views/pages/superAdmin/dashboard/index')));
const Brand = Loadable(lazy(() => import('views/pages/superAdmin/brands')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
     
        {
            path: '/dashboard',
            element: <SuperAdminDashboard />
        },
        
        {
            path: '/brands',
            element: <Brand />
        },
       
    
      
    ]
};

export default MainRoutes;
