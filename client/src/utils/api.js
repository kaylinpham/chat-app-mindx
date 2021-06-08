import { REQUEST_URL } from "../constants/global";
import axios from "axios";

export function getUserById(id) {
  return axios.get(`${REQUEST_URL}/user/${id}`).then((res) => {
    const { avatar, fullName } = res.data;
    return { avatar, fullName };
  });
}

export async function getConversationByUserId(id) {
  try {
    const res = await axios.get(`${REQUEST_URL}/conversation/${id}`);
    const conversations = res.data;

    const usersPromise = conversations.data.map(async (con) => {
      let receiverId = con.usersId.join("").replace(id, "");
      const receiverInfo = await getUserById(receiverId);
      return {
        conversationId: con._id,
        receiverId,
        ...receiverInfo,
      };
    });

    return await Promise.all(usersPromise);
  } catch (error) {
    console.log(error);
  }
}

export function getAllMessage(_idRoom, token) {
  return axios({
    method: "get",
    url: `${REQUEST_URL}/message/${_idRoom}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.data.data;
  });
}

export function createConversation(token, userName) {
  return axios({
    method: "post",
    url: `${REQUEST_URL}/conversation`,
    data: {
      userName,
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}
