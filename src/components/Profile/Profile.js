import React from "react";
import "./profile.css";
import ava from "../../img/elon.jpg";
import Posts from "./posts/posts.js";
function Profile(props) {
  return (
    <div className="profile">
      <div className="me">
        <img src={ava} />
        <p> {props.name}</p>
      </div>
      <Posts postdata={props.postdata} addPost={props.addPost} />
    </div>
  );
}
export default Profile;
