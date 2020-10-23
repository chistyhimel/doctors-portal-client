import React, { useState } from 'react';
import { Card, Col } from "react-bootstrap";
import BookingForm from './BookingForm';

const AppointmentBookingCard = ({ data, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <Col md={6} lg={4} className="mb-4">
        <Card className="text-center">
          <Card.Body>
            <h5 className="font-weight-bold primary-text-color">{data.subject}</h5>
            <h6 className="font-weight-bold">{data.visitingHour}</h6>
            <small className="font-weight-bold">
              {data.totalSpace} SPACES AVAILABLE
            </small>
            <button
              onClick={openModal}
              className="btn-grad font-weight-bolder mx-auto mt-3"
            >
              BOOK Appointment
            </button>
            <BookingForm
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              appointmentOn={data.subject}
              date={date}
            ></BookingForm>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default AppointmentBookingCard;