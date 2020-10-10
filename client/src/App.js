import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { isAuthenticated } from './lib';
import * as components from "./components";


import { TokenProvider } from "./lib/GlobalState"

const { Home, SignUp, LogIn, LogOut, Navigation, PrivateRoute } = components
function App() {

  const [authenticated, setAuthenticated] = useState(isAuthenticated);
  
  return (
    <div className="App">
      <TokenProvider>
        <Navigation props={{authenticated: authenticated}}/>
        <main>
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/logout" component={LogOut}/>
          </Switch>
        </main>
      </TokenProvider>   
    </div>
  );
}

export default App;
