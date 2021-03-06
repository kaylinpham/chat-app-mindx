import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { socket, SocketContext } from "./utils/socket";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Router className="App">
        <Switch>
          <Redirect
            exact
            from="/"
            to={localStorage.getItem("user") ? "/home" : "/log-in"}
          />
          <Route path="/log-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
