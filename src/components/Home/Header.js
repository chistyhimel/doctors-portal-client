import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import appointmentBg from "../../images/banner-bg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container fluid>
      <Row className="mt-5 pb-5">
        <Col md={5} className="pt-md-5 pb-md-5">
          <h1 className="display-4">
            Your New Smile <br />
            Starts Here
          </h1>
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the
          </p>
          <Link
            to="/appointments"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn-grad font-weight-bold mb-4">
              ADD APPOINTMENT
            </button>
          </Link>
        </Col>
        <Col md={7} className="text-right pt-md-5 pb-md-5">
          <img src={appointmentBg} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
