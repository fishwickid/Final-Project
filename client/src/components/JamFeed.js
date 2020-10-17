import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "../components/ui/Grid";
import Jumbotron from "../components/ui/Jumbotron";
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

export function JamFeed(props) {
  const [jam, setJam] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
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
            <Paper style={{
            width: "100%",
            marginTop: "70px",
            marginBottom: "100px",
            padding: "20px",
            
          }}>
              <h1>
                {jam.jamName} by {jam.jammer}
              </h1>
              <article>
                <h1>About this Jam Sesh</h1>
                <p>{jam.jamDetails}</p>
              </article>

              <Link to="/">← Return to Jam Requests</Link>
            </Paper>
          </Grid>
        </Container>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default JamFeed;
