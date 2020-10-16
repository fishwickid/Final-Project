import React from "react";
import { Link } from "react-router-dom";
import { useTokenContext } from "../lib/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

// Material UI elements

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
            {/* <li style={{ margin: "0 1em" }}>
            <Link to="/">Home</Link>
          </li> */}
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
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: "0 1em" }}>
              <Link to="/logout">Log Out</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );

  // return (
  //   <nav>
  //     {state.length === 0 || state[0].token === "" ? (
  //       <ul style={{ display: "flex", listStyle: "none" }}>
  //         <li style={{ margin: "0 1em" }}>
  //           <Link to="/signup">Sign Up</Link>
  //         </li>
  //         <li style={{ margin: "0 1em" }}>
  //           <Link to="/login">Log In</Link>
  //         </li>
  //       </ul>
  //     ) : (
  //       <ul style={{ display: "flex", listStyle: "none" }}>
  //         <li style={{ margin: "0 1em" }}>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li style={{ margin: "0 1em" }}>
  //           <Link to="/logout">Log Out</Link>
  //         </li>
  //       </ul>
  //     )}
  //   </nav>
  // );
}

export default Navigation;
