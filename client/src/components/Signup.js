import React, { useRef, useState } from "react";
import { isAuthenticated } from "../lib";
import { useTokenContext } from "../lib/GlobalState";
import { Redirect } from "react-router-dom";
import Footer from "./Footer";

//Material UI Imports
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Background from "../images/guitarLicks.png";

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${Background})`,
  position: "relative",
  objectFit: "cover",
};

// Button Styling
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width: "81%",
    padding: "0 30px",
    marginTop: "5px",
    marginBottom: "40px",
  },
});

export function SignUp(props) {
  const classes = useStyles();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [_, dispatch] = useTokenContext();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const params = new URLSearchParams();
    params.append("username", usernameRef.current.value);
    params.append("password", passwordRef.current.value);

    fetch("/api/signup", {
      method: "POST",
      body: params,
    })
      .then((body) => body.json())
      .then((data) => {
        dispatch({
          type: "setToken",
          token: data.token,
        });
        setIsLoggedIn(true);
      })
      .catch((error) => console.error(error));
  };

  return isLoggedIn ? (
    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
  ) : (
    <div style={sectionStyle}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={8} sm={8}>
          <Paper style={{ width: "100%", marginTop: "120px", padding: "20px" }}>
            <Typography
              className="testText"
              variant="h3"
              style={{ padding: "40px", color: "Black" }}
            >
              Sign Up
            </Typography>
            <form onSubmit={handleFormSubmit}>
              <div>
                <input
                  type="text"
                  name="Username"
                  placeholder="USERNAME"
                  pattern=".{2,20}"
                  ref={usernameRef}
                  required
                  variant="outlined"
                  color="secondary"
                  style={{
                    margin: "5px",
                    width: "80%",
                    height: "40px",
                    borderRadius: 3,
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  }}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  ref={passwordRef}
                  required
                  variant="outlined"
                  color="secondary"
                  style={{
                    margin: "5px",
                    width: "80%",
                    height: "40px",
                    borderRadius: 3,
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  }}
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Sign Up"
                  className={classes.root}
                  variant="contained"
                  color="secondary"
                />
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <div style={{ marginTop: "190px" }}>
      <Grid>
          <Footer style={{ paddingTop: "100px" }}/>
        </Grid>
        </div>
    </div>
  );
}

export default SignUp;
