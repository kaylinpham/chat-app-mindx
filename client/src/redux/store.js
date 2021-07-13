// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// import reducers from "./reducers";

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
// const store = createStore(reducers, composedEnhancer);

// export default store;

//REDUX TOOLKIT
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
const store = configureStore({ reducer: reducers });

export default store;
