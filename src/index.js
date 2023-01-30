import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./data/state.js";
import { addPost } from "./data/state.js";
// let postdata = [
//   { Text: "Привет", id: 1, likes: 18 },
//   { Text: "Завтра", id: 2, likes: 5 },
//   { Text: "Утро", id: 3, likes: 34 },
//   { Text: "Вечер", id: 4, likes: 20 },
//   { Text: "Сегодня", id: 5, likes: 56 },
// ];
// let dialognames = [
//   { name: "Петров Петр", id: 1 },
//   { name: "Бил Гейтс", id: 2 },
//   { name: "Илон Маск", id: 3 },
// ];
// let messageitem = [
//   { message: "Полетели на луну", id: 1 },
//   { message: "Ок. Как раз собираюсь", id: 2 },
//   {
//     message: "Меня не забудьте хоть",
//     id: 3,
//   },
// ]; данные передаются с state.js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      state={state}
      addPost={addPost}
      // postdata={postdata}
      // messageitem={messageitem}
      // dialognames={dialognames} данные берутся с массивов index.js
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
