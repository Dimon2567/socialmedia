import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./data/state.js";
import { addPost } from "./data/state.js";
import { sendMessage } from "./data/state.js";
export let rerenderTree = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} sendMessage={sendMessage} />
    </React.StrictMode>
  );
};
rerenderTree();
reportWebVitals();
