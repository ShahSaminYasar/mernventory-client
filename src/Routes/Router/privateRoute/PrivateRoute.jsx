import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/UseAuth';


const PrivateRoute = ({ children }) => {


    const { user, loading } = useAuth()


    const location = useLocation();
    //  console.log(location);


    if (loading) {
        return <div className='flex items-center justify-center min-h-[90vh]'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/Register ' ></Navigate>;
};

export default PrivateRoute;