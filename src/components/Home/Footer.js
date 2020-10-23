import React from "react";
import { Col, Container, ListGroup, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="p-md-5">
          <Col md={3} className="flex-column">
            <h6 className="font-weight-bold">Emargency Dental Care</h6>
            <h6 className="font-weight-bold">Treatment of Personal Desease</h6>
            <h6 className="font-weight-bold">Tooth Extraction</h6>
            <h6 className="font-weight-bold">Check up</h6>
          </Col>
          <Col md={3} className="flex-column">
            <h3 className="font-weight-bold primary-text-color">SERVICES</h3>
            <h6 className="font-weight-bold">Emargency Dental Care</h6>
            <h6 className="font-weight-bold">Treatment of Personal Desease</h6>
            <h6 className="font-weight-bold">Tooth Extraction</h6>
            <h6 className="font-weight-bold">Check up</h6>
          </Col>
          <Col md={3} className="flex-column">
            <h3 className="font-weight-bold primary-text-color">ORAL HEALTH</h3>
            <h6 className="font-weight-bold">Emargency Dental Care</h6>
            <h6 className="font-weight-bold">Treatment of Personal Desease</h6>
            <h6 className="font-weight-bold">Tooth Extraction</h6>
            <h6 className="font-weight-bold">Check up</h6>
          </Col>
          <Col md={3} className="flex-column">
            <h3 className="font-weight-bold primary-text-color">OUR ADDRESS</h3>
            <h6 className="font-weight-bold">New York-101, Hudson Yeard</h6>

            <FontAwesomeIcon icon={faFacebook} size="3x" className="primary-text-color mr-4"/>
            <FontAwesomeIcon icon={faTwitter} size="3x" className="primary-text-color mr-4"/>
            <FontAwesomeIcon icon={faGooglePlus} size="3x" className="primary-text-color mr-4"/>
            <h6 className="font-weight-bold mt-5">Call now</h6>
            <button className="btn primary-bg text-white">+0123456789</button>

          </Col>
        </Row>
        <p className="lead text-center pt-5">
          Copyright © 2020 All Rights Reserved by Himel
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
