import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/ui/Jumbotron";
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

// Background Image
var sectionStyle = {
  width: "100%",
  height: "700px",
  backgroundImage: `url(${Background})`,
  position: "relative",
  objectFit: "cover",
};

export function JamSesh() {
  // Setting our component's initial state
  const [jams, setJams] = useState([]);
  const [formObject, setFormObject] = useState({
    title: "",
    author: "",
    synopsis: "",
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

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      console.log("formobject", formObject);
      console.log("api call", API.saveJam);
      API.saveJam({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis,
      })
        .then((res) => loadJams())
        .catch((err) => console.log(err));
      // .then(() =>
      //   setFormObject({
      //     title: "",
      //     author: "",
      //     synopsis: "",
      //   })
      // )
      // .then(() => loadJams())
      // .catch((err) => console.log(err));
    }
  }

  return (
    <div style={sectionStyle}>
      <Container
        id="topSection"
        maxwidth="lg"
        style={{
          paddingBottom: "60px",
          color: "#2c2836",
        }}
      >
        <Typography
          className="testText"
          variant="h4"
          style={{ paddingTop: "80px", color: "white", fontFamily: "roboto", fontSize: "30px", fontStyle: "bold" }}
        >
          ORGANISE A JAM SESH AND CONNECT WITH OTHER MUSICIANS
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={10}>
            <Paper
              style={{ width: "100%", marginTop: "50px", padding: "20px" }}
            >
              <Typography variant="subtitle1" style={{ margin: "30px" }}>
                Create your jam sesh by letting people know what you want kind of jam you want to organise
              </Typography>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                  value={formObject.title}
                />
                <Input
                  onChange={handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                  value={formObject.author}
                />
                <TextArea
                  onChange={handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                  value={formObject.synopsis}
                />
                <FormBtn
                  // disabled={!(formObject.author && formObject.title)}
                  onClick={handleFormSubmit}
                >
                  Post Your Jam Sesh Request
                </FormBtn>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Results Section */}
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
              <Typography variant="h4">Connect with another jam sesh</Typography>
              {jams.length ? (
                <List>
                  {jams.map((jam) => {
                    return (
                      <ListItem key={jam._id}>
                        <a href={"/jams/" + jam._id}>
                          <strong>
                            {jam.title} by {jam.author}
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
      <Footer />
    </div>
  );
}

export default JamSesh;
