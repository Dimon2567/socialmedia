import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink to="/profile">Profile</NavLink>

      <NavLink to="/message">Messages</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/dialogs">Dialogs</NavLink>
      <div className="friends">
        <p>friends:</p>
        {props.navbar.friends.map((e) => {
          return (
            <NavLink to="/dialogs">
              <p>{e.name}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
export default Navbar;
