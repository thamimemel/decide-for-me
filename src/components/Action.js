import React from "react";

const Action = (props) => {
  return (
    <button
      onClick={props.actionHandler}
      disabled={!props.hasOptions}
      type="button"
      className="btn btn-primary btn-lg btn-block my-3"
    >
      Pick Decision
    </button>
    /*
    <div>
      <button onClick={props.actionHandler} disabled={!props.hasOptions}>
        Decide for me
      </button>
    </div>
    */
  );
};
export default Action;
