import { REQUEST_URL } from "../constants/global";

export function getUserById(id) {
  return fetch(`${REQUEST_URL}/user/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const { avatar, fullName } = data;
      return { avatar, fullName };
    });
}

export async function getConversationByUserId(id) {
  try {
    const res = await fetch(`${REQUEST_URL}/conversation/${id}`);
    const conversations = await res.json();

    const usersPromise = conversations.data.map(async (con) => {
      let receiverId = con.usersId.join("").replace(id, "");
      const receiverInfo = await getUserById(receiverId);
      return {
        conversationId: con._id,
        ...receiverInfo,
      };
    });

    return await Promise.all(usersPromise);
  } catch (error) {
    console.log(error);
  }
}
