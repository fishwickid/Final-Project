import React from "react";
import { Link } from "react-router-dom";
import { useTokenContext } from "../lib/GlobalState";

// App bar functions

export function Navigation() {
  const [state, _] = useTokenContext();

  return (
    <nav>
      <div className="nav-wrapper" style={{ color: "red" }}>
        {state.length === 0 || state[0].token === "" ? (
          <ul
            id="nav-mobile"
            class="right hide-on-med-and-down"
            style={{ display: "flex", listStyle: "none" }}
          >
            <li style={{ margin: "0 1em" }}>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li style={{ margin: "0 1em" }}>
              <Link to="/login">Log In</Link>
            </li>
            <li style={{ margin: "0 1em" }}>
              <Link to="/jamsesh">Jam Sesh</Link>
            </li>
          </ul>
        ) : (
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li style={{ margin: "0 1em" }}>
              <Link to="/jamsesh">Home</Link>
            </li>
            <li style={{ margin: "0 1em" }}>
              <Link to="/logout">Log Out</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
