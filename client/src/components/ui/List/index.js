import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Card styles

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

// This file exports both the List and ListItem components

export function List({ children }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <CardContent>
      <Card className={classes.root} variant="outlined">
        <ul>{children}</ul>
      </Card>
    </CardContent>
  );
}

export function ListItem({ children }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <CardContent>
      <Card
        className={classes.root}
        variant="outlined"
        style={{ height: "50px", textAlign: "centre", paddingTop: "20px"}}
      >
        <li className="list-group-item">{children}</li>
      </Card>
    </CardContent>
  );
}
