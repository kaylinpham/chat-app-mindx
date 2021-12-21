// import {
//   RECEIVE_CONVERSATION,
//   FETCH_CONVERSATIONS,
//   ADD_CONVERSATION_SUCCESS,
//   ADD_CONVERSATION_FAILED,
// } from "./conversationTypes";

import {
  addConversationSuccess,
  addConversationFailed,
  receiveConvesation,
  fetchConversation,
} from "./conversationSlice";

import { createConversation, getConversationByUserId } from "../../utils/api";

// export const addConversation = (token, userName) => {
//   return async function addConversationThunk(dispatch, getState) {
//     const res = await createConversation(token, userName);
//     console.log(res);
//     if (!res) {
//       dispatch({
//         type: ADD_CONVERSATION_FAILED,
//       });
//     } else {
//       const { avatar, conversationId, fullName, receiver } = res.data;
//       const newConversation = {
//         conversationId,
//         fullName,
//         avatar,
//         receiverId: receiver,
//       };

//       dispatch({
//         type: ADD_CONVERSATION_SUCCESS,
//         payload: { newConversation },
//       });
//     }
//   };
// };

// export const receiveConversation = (conversation = {}) => {
//   return {
//     type: RECEIVE_CONVERSATION,
//     payload: { conversation },
//   };
// };

// export const fetchConversations = async (dispatch, getState) => {
//   const { userId } = JSON.parse(localStorage.getItem("user"));
//   const conversations = await getConversationByUserId(userId);
//   dispatch(setConversations(conversations));
// };

// export const setConversations = (conversations) => {
//   return {
//     type: FETCH_CONVERSATIONS,
//     payload: { conversations },
//   };
// };
export const addConversation = (token, userName) => {
  return async function addConversationThunk(dispatch, getState) {
    const res = await createConversation(token, userName);
    if (!res) {
      dispatch(addConversationFailed());
    } else {
      const { avatar, conversationId, fullName, receiver } = res.data;
      const newConversation = {
        conversationId,
        fullName,
        avatar,
        receiverId: receiver,
      };

      dispatch(addConversationSuccess({ conversation: newConversation }));
    }
  };
};

export const receiveConversation = (conversation = {}) => {
  return receiveConvesation({ conversation });
};

export const fetchConversations = async (dispatch, getState) => {
  const { userId } = JSON.parse(localStorage.getItem("user"));
  const conversations = await getConversationByUserId(userId);
  dispatch(setConversations(conversations));
};

export const setConversations = (conversations) => {
  return fetchConversation({ conversations });
};
