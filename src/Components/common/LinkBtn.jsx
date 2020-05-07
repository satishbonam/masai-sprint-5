import React from "react";
import { Link } from "react-router-dom";

const LinkBtn = (props) => {
  return (
    <li className="nav-item">
      <Link to={props.to} className={`nav-link`}>
        {props.label}
      </Link>
    </li>
  );
};

export default LinkBtn;
