import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

import ChatBox from "../../components/ChatBox";
import Default from "../../components/Default";
import SideBar from "../../components/SideBar";
// import NotFound from "../NotFound";
import "./style.css";

export const AuthContext = React.createContext();

const Home = () => {
  const [user, setUser] = useState({ token: "", userName: "", fullName: "" });
  let { path, url } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (!auth) {
      history.push("/error");
    } else {
      setUser(auth);
    }
  }, [history]);

  return (
    <AuthContext.Provider value={{ url, user }}>
      <div className="home__container">
        <SideBar />
        <Switch>
          <Route exact path={path} component={Default} />
          <Route
            path={`${path}/conversation/:conversationId`}
            component={ChatBox}
          />
          {/* <Route path={`${path}/*`} render={history.push("/error")} /> */}
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default React.memo(Home);
