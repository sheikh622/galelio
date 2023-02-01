import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
// routes
import SuperAdminRoutes from './SuperAdminRoutes';
import SubAdminRoutes from './SubAdminRoutes';
import BrandAdminRoutes from './BrandAdminRoutes';
import UserRoutes from './UserRoutes';
import LoginRoutes from './LoginRoutes';

export default function ThemeRoutes() {
    const userData = useSelector((state) => state.auth);

    if (userData.user && userData.user.role == 'Super Admin') {
        return useRoutes([SuperAdminRoutes]);
    } else if (userData.user && userData.user.role == 'Admin') {
        return useRoutes([SubAdminRoutes , UserRoutes ]);
    } else if (userData.user && userData.user.role == 'Brand Admin') {
        return useRoutes([BrandAdminRoutes]);
    } else if (userData.user && userData.user.role == 'User') {
        return useRoutes([UserRoutes, LoginRoutes]);
    } else {
        return useRoutes([UserRoutes, LoginRoutes]);
    }
}
