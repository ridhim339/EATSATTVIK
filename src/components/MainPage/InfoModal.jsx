import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function InfoModal(props) {
  // const [show, setShow] = useState(false);

  const handleClose = () => props.setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <section>
      {/*<Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
  </Button>*/}

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ color: "black" }}
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            href={props.link}
            variant="success"
            style={{ backgroundColor: "#27AE60" }}
            target="_blank"
            onClick={handleClose}
          >
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
