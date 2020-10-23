import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import exceptionalServiceImg from "../../images/exceptional-service-img.png";

const ExceptionalService = () => {
  return (
    <Container fluid>
      <Row className="mt-5 pt-md-5 ">
        <Col md={5}>
          <img src={exceptionalServiceImg} className="img-fluid" alt="..." />
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <div>
            <h2 className="font-weight-bold">
              Exceptional Dental <br /> Care, on your Terms
            </h2>
            <p className="lead pr-md-5 text-justify mt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using ‘Content here, content
              here’, making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="mt-md-4 btn-grad mt-3">LEARN MORE</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExceptionalService;
