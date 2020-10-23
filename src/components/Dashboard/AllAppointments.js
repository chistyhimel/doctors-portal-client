import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "./SideBar";

const AllAppointments = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("https://obscure-journey-26618.herokuapp.com/allAppointments")
      .then((response) => response.json())
      .then((data) => {
        const topTen = data.slice(0, 5);
        setPatients(topTen);
      });
  }, []);
  console.log(patients);
  return (
    <Row>
      <Col md={3} className="sidebar-container p-md-5">
        <SideBar></SideBar>
      </Col>
      <Col md={9} className="dashboard-container">
        <h5 className="pt-4 pb-4">Appointments</h5>
        <Row>
          <Col md={3}>
            <div
              className="rounded-lg mb-3"
              style={{ backgroundColor: "#F1536E" }}
            >
              <div className="d-flex justify-content-center align-items-center box-text text-white">
                <h1>09</h1>
                <div className="">
                  <p>Pending</p>
                  <p className="mt-0">Appointments</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div
              className="rounded-lg mb-3"
              style={{ backgroundColor: "#3DA5F4" }}
            >
              <div className="d-flex justify-content-center align-items-center box-text text-white">
                <h1>19</h1>
                <div className="">
                  <p>Todays</p>
                  <p className="mt-0">Appointments</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div
              className="rounded-lg mb-3"
              style={{ backgroundColor: "#00C689" }}
            >
              <div className="d-flex justify-content-center align-items-center box-text text-white">
                <h1>34</h1>
                <div className="">
                  <p>Total</p>
                  <p className="mt-0">Appointments</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div
              className="rounded-lg mb-3"
              style={{ backgroundColor: "#FDA006" }}
            >
              <div className="d-flex justify-content-center align-items-center box-text text-white">
                <h1>78</h1>
                <div className="">
                  <p>Total</p>
                  <p className="mt-0">Patients</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="bg-light">
          <h6 className="primary-text-color p-4">All Appointments</h6>
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
  );
};

export default AllAppointments;
