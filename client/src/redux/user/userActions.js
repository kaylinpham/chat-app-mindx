import { logIn, logOut } from "./userSlice";

export const login = (user = {}) => {
  return logIn({ user });
};

export const logout = () => {
  return logOut();
};
