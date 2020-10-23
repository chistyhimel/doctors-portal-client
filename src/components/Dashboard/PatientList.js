import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("https://obscure-journey-26618.herokuapp.com/allAppointments")
      .then((response) => response.json())
      .then((data) => {
        const topTen = data.slice(0, 10);
        setPatients(topTen);
      });
  }, []);
  console.log(patients);
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar-container p-md-5">
          <SideBar></SideBar>
        </Col>

        <Col md={9} className="dashboard-container">
          <h5 className="pt-4 pb-4">Patients</h5>
          <div className="bg-light">
            <h6 className="primary-text-color p-4">All Patients</h6>
            <table className="table table-borderless  ">
              <thead>
                <tr className="text-secondary">
                  <th scope="col">Sr.Mo</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Age</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Contact</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, idx) => (
                  <tr>
                    <th scope="row">{idx + 1}</th>
                    <td>{patient.name}</td>
                    <td>{patient.email}</td>
                    <td>{patient.sex}</td>
                    <td>{patient.age}</td>
                    <td>{patient.weight}</td>
                    <td>{patient.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientList;
