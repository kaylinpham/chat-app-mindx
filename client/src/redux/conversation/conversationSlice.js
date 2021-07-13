import { createSlice } from "@reduxjs/toolkit";
// import { createConversation, getConversationByUserId } from "../../utils/api";

const initialState = {
  conversations: [],
  isFound: true,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addConversationSuccess: (state, action) => {
      state.conversations.push(action.payload.conversation);
      state.isFound = true;
    },
    addConversationFailed: (state) => {
      state.isFound = false;
    },

    receiveConvesation: (state, action) => {
      state.conversations.push(action.payload.conversation);
    },
    fetchConversation: (state, action) => {
      state.conversations = [...action.payload.conversations];
    },
  },
});

export const {
  addConversationSuccess,
  addConversationFailed,
  receiveConvesation,
  fetchConversation,
} = conversationSlice.actions;
export default conversationSlice.reducer;
