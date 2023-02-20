import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)

    const location = useLocation()

    console.log(user);



    if (user) {
        console.log("User ase");
        return children;
    }
    if (!user) {
        console.log("User nai", user);
        return (
            <Navigate to='/login' state={{ from: location }} />
        );
    }


};

export default PrivateRoute;