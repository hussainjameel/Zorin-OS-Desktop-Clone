import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Terminal.css";
import CloseButton from "react-bootstrap/CloseButton";
import Draggable from "react-draggable";

function Terminal(props) {
  const { onClose } = props;
  return (
    <>
      <Draggable>
        <div className="terminal-container">
          <Container fluid>
            <Row className="terminal-head">
              <Col
                xs={4}
                lg={6}
                className="d-flex justify-content-start align-items-center"
              >
                Terminal
              </Col>
              <Col
                xs={8}
                lg={6}
                className="d-flex justify-content-end align-items-center"
              >
                <CloseButton variant="black" onClick={onClose} />{" "}
              </Col>
            </Row>
          </Container>

          <div className="terminal-body"></div>
        </div>
      </Draggable>
    </>
  );
}

export default Terminal;
