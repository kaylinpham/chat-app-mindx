import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

let socket;
const CONNECTION_PORT = "http://localhost:8080/";

function App() {
  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

  return (
    <Router className="App">
      <Switch>
        <Redirect
          exact
          from="/"
          to={localStorage.getItem("user") ? "/home" : "log-in"}
        />
        <Route path="/log-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
