import React from "react";
import Post from "./post/post.js";
function Posts() {
  return (
    <div className="posts">
      <h2>My posts</h2>
      <input placeholder="Enter" />
      <button className="button"> That post</button>
      <Post message="Привет" />
      <Post message="Завтра" />
      <Post message="Утро" />
      <Post message="Вечер" />
      <Post message="Сегодня" />
    </div>
  );
}
export default Posts;
