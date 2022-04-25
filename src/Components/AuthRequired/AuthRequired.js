import React,{useContext} from 'react';
import {useLocation, Navigate,} from "react-router-dom"
import {userContext} from '../../App'

const AuthRequired = ({children}) => {
    let location = useLocation();
    const [loggedInUser] = useContext(userContext)
    if(!loggedInUser.email){
        return <Navigate to="/login" state={{from:location}} replace />;
    }
    return children;
};

export default AuthRequired;