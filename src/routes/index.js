import React from 'react';
import { useRoutes } from 'react-router-dom';


import { useSelector } from 'react-redux';
// routes
import SuperAdminRoutes from './superAdmin/SuperAdminRoutes';
import SubAdminRoutes from './subAdmin/SubAdminRoutes';
import BrandAdminRoutes from './BrandAdmin/BrandAdminRoutes';
import LoginRoutes from './LoginRoutes';
import UserRoutes from './UserRoutes'
import AuthenticationRoutes from './AuthenticationRoutes';



export default function ThemeRoutes() {
    const userData = useSelector((state) => state.auth);
   
    // const userData = useSelector((state) => state.auth);
    if (userData.user && userData.user.role == 'Super Admin') {
        return useRoutes([SuperAdminRoutes, LoginRoutes, AuthenticationRoutes,UserRoutes] );
    } else if (userData.user && userData.user.role == 'Admin') {
        return useRoutes([SubAdminRoutes, LoginRoutes, AuthenticationRoutes,UserRoutes]);
    } else if (userData.user && userData.user.role == 'Brand Admin') {
        return useRoutes([BrandAdminRoutes, LoginRoutes, AuthenticationRoutes,UserRoutes]);
    } 
    else{
        return useRoutes([LoginRoutes, AuthenticationRoutes,UserRoutes] );
    }
}
