import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import Footer from "./Footer";

// Material UI Components
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const buttonStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 35,
    width: "60%",
    padding: "15px 15px",
    marginBottom: "30px",
    marginTop: "20px",
  },
});

export function JamFeed(props) {
  const [jam, setJam] = useState({});
  const buttonStyle = buttonStyles();

  const { id } = useParams();
  useEffect(() => {
    API.getJam(id)
      .then((res) => setJam(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Grid>
            <Paper
              style={{
                width: "100%",
                marginTop: "70px",
                marginBottom: "100px",
                padding: "20px",
              }}
            >
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                Jam Sesh by {jam.jammer}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                Posted @ {jam.date}
              </Typography>
              <Typography
                style={{
                  fontFamily: "pacifico",
                  fontSize: "50px",
                  padding: "30px",
                }}
              >
                {jam.jamName}
              </Typography>

              <Typography style={{ textAlign: "left" }}>
                <div>
                  <h3>About this Jam Sesh</h3>
                  <p>{jam.jamDetails}</p>
                </div>
              </Typography>
              <Typography style={{ textAlign: "left" }}>
                <div>
                  <h3>My instrument of choice:</h3>
                  <p>{jam.instrument}</p>
                </div>
              </Typography>
              <Typography style={{ textAlign: "left" }}>
                <div>
                  <h3>What I can teach</h3>
                  <p>{jam.whatTeach}</p>
                </div>
              </Typography>
              <Typography style={{ textAlign: "left" }}>
                <div>
                  <h3>What I would Like to learn</h3>
                  <p>{jam.whatLearn}</p>
                </div>
              </Typography>
              <Button href={"mailto:" + jam.email} className={buttonStyle.root}>
                Connect with {jam.jammer}
              </Button>
            </Paper>
          </Grid>
        </Container>

        {/* section 2 */}
        <Container fixed>
          <Grid>
            <Paper
              style={{
                width: "100%",
                marginTop: "70px",
                marginBottom: "100px",
                padding: "20px",
                boxShadow: "none",
              }}
            >
              <Link to="/jamsesh">← Return to Jam Requests</Link>
            </Paper>
          </Grid>
        </Container>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default JamFeed;
