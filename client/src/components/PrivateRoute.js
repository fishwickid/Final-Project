import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../lib";

export const PrivateRoute = ({ component : Component, ...rest}) => {
    console.log('isAuthenticated',isAuthenticated())
    return(
        <Route {...rest} render={props => 
            isAuthenticated() ? 
            (<Component {...props}/> ) :
            (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
            }>

        </Route>
    )
}

export default PrivateRoute;