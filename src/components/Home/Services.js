import React from "react";
import { Card, CardDeck, Container, Col, Row } from "react-bootstrap";
import serviceImg1 from "../../images/service-img-1.png";
import serviceImg2 from "../../images/service-img-2.png";
import serviceImg3 from "../../images/service-img-3.png";

const Services = () => {
  return (
    <Container fluid>
      <h3 className="text-center font-weight-bold primary-text-color mt-5 pt-md-5">OUR SERVICES</h3>
      <h1 className="text-center pt-3">SERVICES WE PROVIDE</h1>
      <CardDeck>
        <Card className="text-center text-justify border-0">
          <Card.Img
            variant="top"
            src={serviceImg1}
            style={{ width: "135px" }}
            className="mx-auto pt-5"
          />
          <Card.Body>
            <Card.Title>Flouride Treatement</Card.Title>
            <Card.Text className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              incidunt, ipsa eaque consectetur dolores repellat!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center text-justify border-0">
          <Card.Img
            variant="top"
            src={serviceImg2}
            style={{ width: "120px" }}
            className="mx-auto pt-5"
          />
          <Card.Body>
            <Card.Title>Cavity Filling</Card.Title>
            <Card.Text className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              incidunt, ipsa eaque consectetur dolores repellat!
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center text-justify border-0">
          <Card.Img
            variant="top"
            src={serviceImg3}
            style={{ width: "120px" }}
            className="mx-auto pt-5"
          />
          <Card.Body>
            <Card.Title>Teeth Whitening</Card.Title>
            <Card.Text className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              incidunt, ipsa eaque consectetur dolores repellat!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Services;
