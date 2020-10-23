import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import doctorImg from "../../images/doctor-sm.png";

const Doctors = () => {
  return (
    <Container fluid className="mt-5">
      <h2 className="font-weight-bold text-center primary-text-color mb-5">Our Doctors</h2>
      <CardDeck>
        <Card className="text-center border-0">
          <Card.Img variant="top" src={doctorImg} />
          <Card.Body className="align-items-center d-flex flex-column justify-content-center">
            <h3 className="font-weight-bold text-color">Dr Jon Snow</h3>
            <h5 className="font-weight-bold">
              <FontAwesomeIcon icon={faPhone} className="primary-text-color" />{" "}
              +123456789
            </h5>
          </Card.Body>
        </Card>

        <Card className="text-center border-0">
          <Card.Img variant="top" src={doctorImg} />
          <Card.Body className="align-items-center d-flex flex-column justify-content-center">
            <h3 className="font-weight-bold text-color">Dr Morment</h3>
            <h5 className="font-weight-bold">
              <FontAwesomeIcon icon={faPhone} className="primary-text-color" />{" "}
              +123456789
            </h5>
          </Card.Body>
        </Card>

        <Card className="text-center border-0">
          <Card.Img variant="top" src={doctorImg} />
          <Card.Body className="align-items-center d-flex flex-column justify-content-center">
            <h3 className="font-weight-bold text-color">Dr Aaegon</h3>
            <h5 className="font-weight-bold">
              <FontAwesomeIcon icon={faPhone} className="primary-text-color" />{" "}
              +123456789
            </h5>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Doctors;
