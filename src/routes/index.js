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
console.log("UserRoutes",UserRoutes)
    if (userData.user && userData.user.role == 'Super Admin') {
        console.log('userData in Super Admin ThemeRoutes', userData);
        return useRoutes([SuperAdminRoutes]);
    } else if (userData.user && userData.user.role == 'Admin') {
        console.log('userData in Admin ThemeRoutes', userData);
        return useRoutes([SubAdminRoutes]);
    } else if (userData.user && userData.user.role == 'Brand Admin') {
        console.log('userData in Brand Admin ThemeRoutes', userData);
        return useRoutes([BrandAdminRoutes]);
    } else if (userData.user && userData.user.role == 'User') {
        console.log('userData in User ThemeRoutes', userData);
        return useRoutes([UserRoutes, LoginRoutes]);
    } else {
        console.log('userData in else condition of ThemeRoutes', userData);
        return useRoutes([UserRoutes, LoginRoutes]);
    }
}
