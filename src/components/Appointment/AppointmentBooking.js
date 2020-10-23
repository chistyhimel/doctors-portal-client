import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AvailableBookingData from "../../data/AvailableBookingData";
import AppointmentBookingCard from "./AppointmentBookingCard";
import BookingForm from "./BookingForm";

const AppointmentBooking = (props) => {
  const [date, onChange] = props.date;

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container fluid>
      <h2 className="text-center font-weight-bold primary-text-color">
        Available Apointments on {date.toDateString()}
      </h2>
      <Row className="mt-5 mb-5">
        {AvailableBookingData.map((booking,idx) => (
          <AppointmentBookingCard data={booking} key={idx} date={date}></AppointmentBookingCard>
        ))}
      </Row>
    </Container>
  );
};

export default AppointmentBooking;
