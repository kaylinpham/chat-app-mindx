import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchConversations } from "../../redux/conversation/conversationActions";
import ChatBox from "../../components/ChatBox";
import Default from "../../components/Default";
import SideBar from "../../components/SideBar";
import NotFound from "../NotFound";
import "./style.css";
import { login } from "../../redux/user/userActions";

export const AuthContext = React.createContext();

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  let { path, url } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/error");
    } else {
      dispatch(login(user));
    }
  }, [history]);

  useEffect(() => {
    dispatch(fetchConversations);
  }, []);

  console.log("home");

  return (
    <AuthContext.Provider value={{ url }}>
      <div className="home__container">
        <SideBar />
        <Switch>
          <Route exact path={path} component={() => <Default />} />
          <Route
            path={`${path}/conversation/:conversationId&&:receiverId`}
            component={ChatBox}
          />
          <Route path={`${path}/*`} component={NotFound} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default Home;
