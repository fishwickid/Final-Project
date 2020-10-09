import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, Signup } from "./components";

const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Login />
      </Route>
    </Switch>
    </Router>
  );
};

export default App;
