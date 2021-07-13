// import {
//   ADD_CONVERSATION_SUCCESS,
//   ADD_CONVERSATION_FAILED,
//   RECEIVE_CONVERSATION,
//   FETCH_CONVERSATIONS,
// } from "./conversationTypes";

// const initialState = {
//   conversations: [],
//   isFound: true,
// };

// const conversationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CONVERSATION_SUCCESS:
//       return {
//         ...state,
//         conversations: [...state.conversations, action.payload.conversation],
//         isFound: true,
//       };
//     case ADD_CONVERSATION_FAILED:
//       return {
//         ...state,
//         isFound: false,
//       };

//     case RECEIVE_CONVERSATION:
//       return {
//         ...state,
//         conversations: [...state.conversations, action.payload.conversation],
//       };
//     case FETCH_CONVERSATIONS:
//       return {
//         ...state,
//         conversations: [...action.payload.conversations],
//       };
//     default:
//       return state;
//   }
// };

// export default conversationReducer;
