import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import doctorImg from "../../images/doctor-lg.png"
const MakeAppointment = () => {
  return (
    <Container fluid>
      <section className="make-appointment">
          <Row>
            <Col className="col-md-5 d-none d-md-block">
              <img src={doctorImg} alt="" />
            </Col>
            <Col className="col-md-7 text-white py-5">
              <h5 className="text-uppercase primary-text-color ">Appointment</h5>
              <h1 className="my-4 ">
                Make an Appointment <br /> Today
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                magnam ad consequuntur assumenda saepe hic amet nemo ea facere
                a!
              </p>
              <button className="btn-grad">Learn More</button>
            </Col>
          </Row>
      </section>
    </Container>
  );
};

export default MakeAppointment;
