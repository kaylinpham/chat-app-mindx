import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

import { getConversationByUserId, createConversation } from "../../utils/api";
import ChatBox from "../../components/ChatBox";
import Default from "../../components/Default";
import SideBar from "../../components/SideBar";
// import NotFound from "../NotFound";
import "./style.css";

export const AuthContext = React.createContext();

const Home = () => {
  const [user, setUser] = useState({ token: "", userName: "", fullName: "" });
  const [conversations, setConversations] = useState([]);
  const [isFound, setIsFound] = useState(true);

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

  useEffect(() => {
    if (user) {
      getConversationByUserId(user.userId).then((data) => {
        setConversations(data);
      });
    }
  }, []);

  const handleAddFriend = (userName) => {
    createConversation(user.token, userName)
      .then((res) => {
        console.log(res);
        const { avatar, conversationId, fullName, receiver } = res.data;
        const newConversation = {
          conversationId,
          fullName,
          avatar,
          receiverId: receiver,
        };
        setIsFound(true);
        setConversations([...conversations, newConversation]);
      })
      .catch((err) => {
        console.log(err);
        setIsFound(false);
      });
  };
  console.log("home");

  return (
    <AuthContext.Provider value={{ url, user, conversations }}>
      <div className="home__container">
        <SideBar />
        <Switch>
          <Route
            exact
            path={path}
            component={() => (
              <Default handleAddFriend={handleAddFriend} isFound={isFound} />
            )}
          />
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
