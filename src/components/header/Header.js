import React from "react";
import "./header.css";
import logo from "../../img/logo.png";
function Header() {
  return (
    <div className="header">
      <img src={logo} />
      <h1>Chrome</h1>
    </div>
  );
}
export default Header;
