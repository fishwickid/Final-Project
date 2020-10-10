import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import * as components from "./components";
console.log('componenets',components)
const { Home, SignUp, LogIn, LogOut, Navigation, PrivateRoute } = components
function App() {
  return (
    <div className="App">
      <Navigation/>
      <main>
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/logout" component={LogOut}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
