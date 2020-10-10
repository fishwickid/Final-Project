import React, { useEffect } from 'react';
import {Redirect} from 'react-router-dom'
export function LogOut() {
    useEffect(() => {
        localStorage.removeItem("token");

    }, [])
    
    return(
        <Redirect to="/login"/>
    )
}

export default LogOut;