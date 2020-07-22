import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    onRequestClose={props.resetHandler}
    isOpen={!!props.selectedOption}
    contentLabel="decision selected"
  >
    <h1>Decision Taken</h1>
    <p>{props.selectedOption}</p>
    <button onClick={props.resetHandler}>close</button>
  </Modal>
);

export default OptionModal;
