import React from "react";
import Post from "./post/post.js";

function Posts(props) {
  return (
    <div className="posts">
      <h2>My posts</h2>
      <input placeholder="Enter" />
      <button className="button"> That post</button>
      {props.postdata.map((e) => (
        <Post Text={e.Text} id={e.id} likes={e.likes} />
      ))}
    </div>
  );
}
export default Posts;
