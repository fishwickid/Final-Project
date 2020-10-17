import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

// Button Styling

const buttonStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 12,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 55,
    width: "80%",
    padding: "20px",
    marginTop: "10px",
    marginBottom: "30px",
  },
});

// exporting forms, text and buttons

export function Input(props) {
  return (
    <div>
      <TextField
        {...props}
        variant="outlined"
        color="secondary"
        style={{ width: "80%", margin: "10px" }}
      />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div>
      <TextField
        {...props}
        variant="outlined"
        color="secondary"
        style={{ width: "80%", margin: "10px" }}
      />
    </div>
  );
}

export function FormBtn(props) {
  const classes = buttonStyles();
  return (
    <Button
      className={classes.root}
      {...props}
      variant="contained"
      color="secondary"
    >
      {props.children}
    </Button>
  );
}
