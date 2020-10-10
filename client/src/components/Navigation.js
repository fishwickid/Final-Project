import React from "react";
import {Link} from 'react-router-dom'
export function Navigation() {
    return(
        <nav>
            <ul style={{display: "flex", listStyle: "none"}}>
                <li style={{margin: "0 1em"}}><Link to="/">Home</Link></li>
                <li style={{margin: "0 1em"}}><Link to="/signup">Sign Up</Link></li>
                <li style={{margin: "0 1em"}}><Link to="/login">Log In</Link></li>
                <li style={{margin: "0 1em"}}><Link to="/logout">Log Out</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;