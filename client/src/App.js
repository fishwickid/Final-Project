import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { isAuthenticated } from "./lib";
import * as components from "./components";


import { TokenProvider } from "./lib/GlobalState";

const { Home, SignUp, LogIn, LogOut, JamSesh, PrivateRoute, Header, JamFeed } = components;
function App() {
  const [authenticated] = useState(isAuthenticated);

  return (
    <div className="App">
      <TokenProvider>
      <Header props={{ authenticated: authenticated }} />
        {/* <Navigation props={{ authenticated: authenticated }} /> */}
        <main>
          <Switch>
            <PrivateRoute exact path="/" component={JamSesh} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/logout" component={LogOut} />
            <Route path="/jamsesh" component={JamSesh} />
            <Route exact path="/jams/:id" component={JamFeed} />
          </Switch>
        </main>
      </TokenProvider>
    </div>
  );
}

export default App;
