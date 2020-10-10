import React, { useRef, useState } from 'react';
import { isAuthenticated } from "../lib";
import { Redirect } from "react-router-dom";

export function LogIn(props){
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

    const handleFormSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const params = new URLSearchParams()
        params.append('username', usernameRef.current.value)
        params.append('password', passwordRef.current.value)

        fetch("/api/login", {
            method: "POST",
            body: params
        }).then(body => body.json())
            .then(data => {
                localStorage.setItem("token", data.token);
                setIsLoggedIn(true);
            })
            .catch(error => console.error(error))
    }

    return (
        isLoggedIn ? <Redirect to={{ pathname: "/", state: { from: props.location } }} /> :
            <div>
                <h2>Log In</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Username: </label>
                        <input type="text" name="username" pattern=".{2,20}" ref={usernameRef} required />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" ref={passwordRef} required />
                    </div>
                    <div>
                        <input type="submit" value="Log In" />
                    </div>
                </form>
            </div>
    )
}

export default LogIn;