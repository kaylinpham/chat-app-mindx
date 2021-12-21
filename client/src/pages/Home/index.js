import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchConversations } from "../../redux/conversation/conversationActions";
import ChatBox from "../../components/ChatBox";
import Default from "../../components/Default";
import SideBar from "../../components/SideBar";
import NotFound from "../NotFound";
import "./style.scss";
import { login } from "../../redux/user/userActions";
import { SocketContext } from "../../utils/socket";

export const AuthContext = React.createContext();

const Home = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const dispatch = useDispatch();

  let { path, url } = useRouteMatch();
  let history = useHistory();
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (!user) {
      history.push("/log-in");
    } else {
      dispatch(login(user));
    }
  }, [history]);

  useEffect(() => {
    if (user) {
      dispatch(fetchConversations);
      socket.emit("new_user", user);
    }
  }, []);

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
