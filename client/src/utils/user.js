import { REQUEST_URL } from "../constants/global";
export const getUserById = async (id) => {
  return fetch(`${REQUEST_URL}/user/:${id}`)
    .then((res) => res.json())
    .then((data) => {
      const { avatar, fullName } = data;
      return { avatar, fullName };
    });
};

export const getConversationByUserId = async (id) => {
  const res = await fetch(`${REQUEST_URL}/conversation/${id}`);
  const conversation = await res.json();

  const userPromise = conversation.data.map(async (con) => {
    let receiverId = con.usersId.join("").replace(id, "");
    const receiverInfo = await getUserById(receiverId);
    return {
      conversationId: con._id,
      ...receiverInfo,
    };
  });

  return Promise.all(userPromise).then((res) => {
    console.log(res);
  });

  // return await Promise.all(userPromise);
};
