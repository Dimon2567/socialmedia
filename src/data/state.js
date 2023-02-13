let state = {
  profilePage: {
    postdata: [
      { Text: "Привет", id: 1, likes: 18 },
      { Text: "Завтра", id: 2, likes: 5 },
      { Text: "Утро", id: 3, likes: 34 },
      { Text: "Вечер", id: 4, likes: 20 },
      { Text: "Сегодня", id: 5, likes: 56 },
    ],
  },
  dialogsPage: {
    dialognames: [
      { name: "Петров Петр", id: 1 },
      { name: "Бил Гейтс", id: 2 },
      { name: "Илон Маск", id: 3 },
    ],
    messageitem: [
      { message: "Полетели на луну", id: 1 },
      { message: "Ок. Как раз собираюсь", id: 2 },
      {
        message: "Меня не забудьте хоть",
        id: 3,
      },
    ],
  },
  navbar: {
    friends: [
      { name: "Андрей", id: 1 },
      { name: "Роман", id: 2 },
      { name: "Игорь", id: 3 },
    ],
  },
};

export let addPost = (postText) => {
  let newPost = {
    text: postText,
    id: 34,
    likes: 46,
  };
  state.profilePage.postdata.unshift(newPost);
  console.log(state);
  // renderTree(state);
};
export let sendMessage = (message) => {
  let newMessage = {
    message: message,
    id: 54,
  };
  state.profilePage.postdata.unshift(newMessage);
  console.log(state);
};

export default state;
