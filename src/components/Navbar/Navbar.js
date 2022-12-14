import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/profile">Profile</NavLink>

      <NavLink to="/message">Messages</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/dialogs">Dialogs</NavLink>
    </div>
  );
}
export default Navbar;
