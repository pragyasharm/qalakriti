import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouter = () => {
    const isAuthenticated = useSelector((state)=> state.user.isAuthenticated)
    console.log(isAuthenticated);
   return isAuthenticated ? <Outlet/> : <Navigate to="login" replace/>;
}

export default ProtectedRouter