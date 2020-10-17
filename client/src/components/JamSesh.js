import React, { useEffect, useState } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/ui/DeleteBtn";
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
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// Background Image
var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`,
  position: "relative",
};

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
    width: "30%",
    padding: "0 30px",
    marginBottom: "30px",
  },
});

const cardStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #f8f8f8 30%, #f2f2f2 90%)",
    border: 0,
    borderRadius: 25,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#232323",
    width: "90%",
    margin: "20px",
  },
});

export function JamSesh() {
  // Setting our component's initial state
  const [jams, setJams] = useState([]);
  const buttonStyle = buttonStyles();
  const cardStyle = cardStyles();
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

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
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
      <section style={sectionStyle}>
        <Container
          id="topSection"
          width="100%"
          style={{
            paddingBottom: "50px",
            color: "#2c2836",
          }}
        >
          <Typography
            className="testText"
            variant="h4"
            style={{
              paddingTop: "120px",
              color: "white",
              fontFamily: "roboto",
              fontSize: "30px",
              fontStyle: "bold",
            }}
          >
            ORGANISE A JAM SESH AND CONNECT WITH OTHER MUSICIANS
          </Typography>

          <Paper
            style={{
              display: "inline-grid",
              width: "70%",
              marginTop: "50px",
              marginBottom: "50px",
              padding: "20px",
            }}
          >
            <Typography variant="subtitle1" style={{ margin: "30px" }}>
              Create your jam sesh by letting people know what you want kind of
              jam you want to organise
            </Typography>
            <form>
              <Input
                onChange={handleInputChange}
                name="jamName"
                placeholder="Name your Jam Sesh (required)"
                value={formObject.jamName}
              />
              <Input
                onChange={handleInputChange}
                name="jammer"
                placeholder="Your name (required)"
                value={formObject.jammer}
              />
              <TextArea
                onChange={handleInputChange}
                name="jamDetails"
                placeholder="Tell other jammers what type of jam sesh you're looking for (Optional)"
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
        </Container>
      </section>

      {/* Jam List starts here */}
      <Container
        style={{
          width: "100%",
          marginTop: "20px",
          marginBottom: "30px",
          padding: "20px",
          
        }}
      >
        <Paper
          style={{
            width: "100%",
            marginTop: "10px",
            marginBottom: "50px",
            padding: "20px",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontFamily: "pacifico",
              fontSize: "50px",
              letterSpacing: "1.2px",
            }}
          >
            Join a jam sesh
          </Typography>
          {jams.length ? (
            <List>
              {jams.map((jam) => {
                return (
                  <Card className={cardStyle.root}>
                    <CardContent>
                      <Typography key={jam._id}>
                        {jam.jamName} by {jam.jammer}
                      </Typography>
                      <Button className={buttonStyle.root}>
                        <Link to={"/jams/" + jam._id}>SEE JAM REQUEST</Link>
                      </Button>
                      <DeleteBtn onClick={() => deleteJam(jam._id)} />
                    </CardContent>
                  </Card>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Paper>
      </Container>

      <Footer />
    </div>
  );
}

export default JamSesh;
