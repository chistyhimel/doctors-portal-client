import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "./Appointment.css";
import "react-calendar/dist/Calendar.css";
import bannerBg from "../../images/banner-bg.png";

const AppointmentHeader = (props) => {
const [date, onChange] = props.handleDate
  return (
    <Container fluid>
      <Row>
        <Col md={5} className="pt-md-5 pb-md-5">
          <h1 className="mb-4 text-secondary">Appointment</h1>
          <Calendar onChange={onChange} value={date} />
        </Col>
        <Col md={7} className="text-right pt-md-5 pb-md-5">
          <img src={bannerBg} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentHeader;
