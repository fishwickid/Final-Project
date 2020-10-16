import React from "react";

// Material UI Components
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const footer = () => {
  return (
    <Container
      id="topSection"
      maxwidth="lg"
      style={{
        padding: "60px",
        backgroundColor: "#282728",
      }}
    >
      <Grid style={{ color: "#ffffff" }}>
        <h4>Thanks for jamming on Jam Sesh</h4>
      </Grid>
    </Container>
  );
};

export default footer;
