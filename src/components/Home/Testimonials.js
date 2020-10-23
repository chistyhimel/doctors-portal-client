import React from "react";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import person1 from "../../images/person-1.png";
import person2 from "../../images/person-2.png";
import person3 from "../../images/person-3.png";

const testimonials = [
  {
    name: "Willson Harry",
    img: person1,
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis a optio sint maxime ab corrupti quisquam, id autem obcaecati animi corporis, quos quod doloremque voluptatibus.",
  },
  {
    name: "Maria Victoria",
    img: person2,
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis a optio sint maxime ab corrupti quisquam, id autem obcaecati animi corporis, quos quod doloremque voluptatibus.",
  },
  {
    name: "Yūko Takeuchi",
    img: person3,
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis a optio sint maxime ab corrupti quisquam, id autem obcaecati animi corporis, quos quod doloremque voluptatibus.",
  },
];

const Testimonials = () => {
  return (
    <Container fluid className="testimonial-container">
      <div className="mt-5">
        <h4 className="font-weight-bold primary-text-color">TESTEMONIALS</h4>
        <h1 className="font-weight-bold text-secondary">
          What our Patient <br /> says{" "}
        </h1>
        <CardDeck className="mt-5 pt-md-5">
          {testimonials.map((testimonial) => (
            <Card className="border-secondary">
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis a optio sint maxime ab corrupti quisquam, id autem
                  obcaecati animi corporis, quos quod doloremque voluptatibus.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="align-items-center d-flex justify-content-around border-0">
                <img src={testimonial.img} alt="" className="img-fluid" />
                <div>
                  <h5 className="font-weight-bold text-color">Willson Harry</h5>
                  <small className="text-secondary">California</small>
                </div>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>
      </div>
    </Container>
  );
};

export default Testimonials;
