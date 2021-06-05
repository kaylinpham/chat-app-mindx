import { REQUEST_URL } from "../constants/global";
export const getUserById = async (id) => {
  return fetch(`${REQUEST_URL}/user/:${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
