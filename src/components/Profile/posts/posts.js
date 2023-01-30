import React from "react";
import Post from "./post/post.js";

let postText = React.createRef();
function Posts(props) {
  let addPost = () => {
    // alert(document.querySelector("input").value);
    console.log(postText);
    props.addPost(postText.current.value);
  };
  return (
    <div className="posts">
      <h2>My posts</h2>
      <input ref={postText} placeholder="Enter" />
      <button className="button" onClick={addPost}>
        Add post
      </button>
      {props.postdata.map((e) => (
        <Post Text={e.Text} id={e.id} likes={e.likes} />
      ))}
    </div>
  );
}
export default Posts;
