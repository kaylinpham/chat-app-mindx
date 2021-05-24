import React from "react";
import ChatBox from "../../components/ChatBox";
import Default from "../../components/Default";
import SideBar from "../../components/SideBar";
import "./style.css";
const Home = () => {
  return (
    <div className="home__container">
      <SideBar />
      <Default />
      {/* <ChatBox /> */}
    </div>
  );
};

export default Home;
