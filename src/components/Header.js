import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand mx-auto" href="#">
        {props.title}
      </a>
    </nav>
    /*
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    */
  );
};
export default Header;
