import React from "react";

const Option = (props) => {
  const removeOption = () => {
    props.removeOptionHandler(props.index);
  };
  return (
    <li className="options__flex list-group-item list-group-item-dark p-0 shadow-none">
      <div className="ml-2">
        {" "}
        {props.index + 1}. {props.optText}
      </div>
      <button
        href="#"
        onClick={removeOption}
        className="btn btn-link shadow-none text-decoration-none"
      >
        remove
      </button>
    </li>
  );
};

export default Option;
