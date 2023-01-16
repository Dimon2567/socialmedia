import React from "react";
import ava_mini from "../../../../img/elon_mini.jpg";
import Profileinfo from "../../profileinfo/profileinfo";
function Post(props) {
  return (
    <div className="post">
      <Profileinfo />
      <p>{props.Text}</p>
      <span>{props.likes}</span> likes
    </div>
  );
}
export default Post;
