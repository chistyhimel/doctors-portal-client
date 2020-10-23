import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import AppointmentHeader from "./AppointmentHeader";
import Footer from "../Home/Footer";
import AppointmentBooking from "./AppointmentBooking";
import BookingForm from "./BookingForm";

const Appointment = () => {
  const [date, onChange] = useState(new Date());
  

  return (
    <div className="appointment-header-container">
      <NavBar></NavBar>
          <AppointmentHeader handleDate={[date, onChange]}></AppointmentHeader>
          <AppointmentBooking date={[date, onChange]}></AppointmentBooking>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
