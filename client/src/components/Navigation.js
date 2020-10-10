import React from "react";
import { Link } from 'react-router-dom';
import { useTokenContext } from "../lib/GlobalState";

export function Navigation() {

    const [state, _] = useTokenContext()

    return (
        <nav>
            {
                (state.length === 0 || state[0].token === "") ?
                    <ul style={{ display: "flex", listStyle: "none" }}>
                        <li style={{ margin: "0 1em" }}><Link to="/signup">Sign Up</Link></li>
                        <li style={{ margin: "0 1em" }}><Link to="/login">Log In</Link></li>
                    </ul>
                    :
                    <ul style={{ display: "flex", listStyle: "none" }}>
                        <li style={{ margin: "0 1em" }}><Link to="/">Home</Link></li>
                        <li style={{ margin: "0 1em" }}><Link to="/logout">Log Out</Link></li>
                    </ul>

            }
        </nav >
    )
}

export default Navigation;