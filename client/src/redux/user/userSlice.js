import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { avatar: "", fullName: "", token: "", userId: "", userName: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = { ...action.payload.user };
    },
    logOut: (state) => {
      state = { ...initialState };
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
