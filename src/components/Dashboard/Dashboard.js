import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideBar from "./SideBar";
import "./Dashboard.css";
import Calendar from "react-calendar";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, onChange] = useState(new Date());
  console.log(date.toDateString());
  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [date]);
  console.log(appointments);
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar-container p-md-5">
          <SideBar></SideBar>
        </Col>

        <Col md={9} className="dashboard-container">
            <h5>Appointments</h5>
            <Row>
              <Col md={6}>
                <Calendar onChange={onChange} value={date} />
              </Col>
              <Col md={6} className="">
                <div className="d-flex justify-content-between">
                  <h6 className="primary-text-color">Appointments</h6>
                  <h6 className="text-secondary">{date.toDateString()}</h6>
                </div>
                {appointments.length ? (
                  <table className="table table-borderless bg-light ">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment._id}>
                          <td>{appointment.name}</td>
                          <td>{appointment.number}</td>
                          <td>{appointment.service}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center lead mt-3">
                    You have no appointment today.
                  </p>
                )}
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
