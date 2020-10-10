import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useTokenContext } from "../lib/GlobalState";

export const PrivateRoute = ({ component : Component, ...rest}) => {
    const [state, _] = useTokenContext();
    return(
        <Route {...rest} render={props => 
            !(state.length === 0 || state[0].token === "") ? 
            (<Component {...props}/> ) :
            (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
            }>
        </Route>
    )
}

export default PrivateRoute;