import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://obscure-journey-26618.herokuapp.com/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data));
  }, []);
  console.log(doctors);
  return (
    <Container fluid className="mt-5">
      <h2 className="font-weight-bold text-center primary-text-color mb-5">
        Our Doctors
      </h2>
      <Row>
        {doctors.map((doctor) => (
          <Col md={4} key={doctor._id}>
            <Card className="text-center border-0">
              <Card.Img
                variant="top"
                src={`data:image/png;base64,${doctor.image.img}`}
                className="img-fluid"
              />
              <Card.Body className="align-items-center d-flex flex-column justify-content-center">
                <h3 className="font-weight-bold text-color">{doctor.name}</h3>
                <h5 className="font-weight-bold">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="primary-text-color"
                  />{" "}
                  +123456789
                </h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
