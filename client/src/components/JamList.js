import React, { useEffect, useState } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/ui/DeleteBtn";
import { Col, Row, Dontainer } from "../components/ui/Grid";
import { List, ListItem } from "../components/ui/List";
import { Input, TextArea, FormBtn } from "../components/ui/Form";
import Footer from "./Footer";
import Background from "../images/seshImage.png";

// Material UI Components
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export function JamList() {
  // Setting our component's initial state
  const [jams, setJams] = useState([]);
  const [formObject, setFormObject] = useState({
    jamName: "",
    jammer: "",
    jamDetails: "",
  });

  // Load all books and store them with setBooks
  useEffect(() => {
    loadJams();
  }, []);

  // Loads all books and sets them to books
  function loadJams() {
    API.getJams()
      .then((res) => setJams(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteJam(id) {
    API.deleteJam(id)
      .then((res) => loadJams())
      .catch((err) => console.log(err));

  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.jamName && formObject.jammer) {
      console.log("formobject", formObject);
      console.log("api call", API.saveJam);
      API.saveJam({
        jamName: formObject.jamName,
        jammer: formObject.jammer,
        jamDetails: formObject.jamDetails,
      })
        .then((res) => loadJams())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <Container>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={10}>
            <Paper
              style={{
                width: "100%",
                marginTop: "100px",
                marginBottom: "80px",
                padding: "20px",
              }}
            >
              <Typography variant="h4">
                Connect with another jam sesh
              </Typography>
              {jams.length ? (
                <List>
                  {jams.map((jam) => {
                    return (
                      <ListItem key={jam._id}>
                        <a href={"/jams/" + jam._id}>
                          <strong>
                            {jam.jamName} by {jam.jammer}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => deleteJam(jam._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Paper>
          </Grid>
        </Grid>
        {/* </Row> */}
      </Container>
      
    </div>
  );
}

export default JamList;
