import React from "react";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css"

const PortalInfo = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4} >
          <Card className="mb-3 primary-bg" text="light" style={{height:"180px"}}>
            <Card.Body className="align-items-center d-flex justify-content-around">
              <FontAwesomeIcon icon={faClock} size="3x" className="icons" />
              <div>
                <h5 className="font-weight-bold">Opening Hour</h5>
                <small>Everyday (9am- 6pm)</small>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} >
          <Card text="light" className="mb-3 secondary-color" style={{height:"180px"}}>
            <Card.Body className="align-items-center d-flex justify-content-around">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="icons" />
              <div>
                <h5 className="font-weight-bold">Visit our location</h5>
                <small>Brooklyn NY, United States</small>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} >
          <Card text="light" className="mb-3 primary-bg" style={{height:"180px"}}>
            <Card.Body className="align-items-center d-flex justify-content-around">
              <FontAwesomeIcon icon={faPhone} size="3x" className="icons" />
              <div>
                <h5 className="font-weight-bold">Contact us</h5>
                <small>+880123756789</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PortalInfo;
