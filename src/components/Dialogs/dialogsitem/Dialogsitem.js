import React from "react";
import { NavLink } from "react-router-dom";
const Dialogsitem = (props) => {
  return (
    <div className="user">
      <NavLink to={`/dialogs/${props.id}`}>{props.name} </NavLink>
    </div>
  );
};
export default Dialogsitem;
