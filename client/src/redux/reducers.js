import { combineReducers } from "redux";
// import userReducer from "./user/userReducer";
// import conversationReducer from "./conversation/conversationReducer";

//REDUX TOOLKIT
import conversationReducer from "./conversation/conversationSlice";
import userReducer from "./user/userSlice";

const reducers = combineReducers({
  user: userReducer,
  conversation: conversationReducer,
});

export default reducers;
