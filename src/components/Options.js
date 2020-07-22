import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div className="options px-3 py-3">
      <div className="options__flex">
        <h3>Options</h3>
        {/* Remove All Options*/}
        <button
          className="btn btn-link shadow-none text-decoration-none"
          onClick={props.removeAllOptionsHandler}
        >
          Remove All Options
        </button>
      </div>
      {/* Message if options is empty */}
      {props.options.length === 0 && (
        <p className="text-center my-3 text-secondary">
          please add some options
        </p>
      )}

      {/* Generating Options */}
      <ol className="list-group">
        {props.options.map((option, index) => (
          <Option
            key={index}
            index={index}
            optText={option}
            removeOptionHandler={props.removeOptionHandler}
          />
        ))}
      </ol>
    </div>
  );
};

export default Options;
