import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PopupModal = (props) => (
  <Modal
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    show={props.active}
    onHide={props.modalOff}
  >
    <Modal.Body>
      <h4 class="text-primary text-center">Decision Made !</h4>
      <p class="text-center display-2">{props.decision}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.modalOff}>Okey</Button>
    </Modal.Footer>
  </Modal>
);

export default PopupModal;
