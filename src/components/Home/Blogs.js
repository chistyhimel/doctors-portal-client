import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import person1 from "../../images/person-1.png";
import person2 from "../../images/person-2.png";

const Blogs = () => {
  return (
    <Container fluid className="mt-5 mb-5">
      <h4 className="primary-text-color font-weight-bold text-center pt-5 pb-2">
        OUR BLOG
      </h4>
      <h1 className="text-center pb-5">From Our Blog News</h1>
      <CardDeck>
        <Card className="primary-bg text-white ">
          <Card.Body className="latest-blog-box ">
            <h5 className="font-weight-bold">Willson Harry</h5>
            <small className="text-secondary">13 January</small>
            <Card.Title>
              Check atleast a doctor in a year for your teeth
            </Card.Title>
          </Card.Body>
          <h5
            className="font-weight-bold text-color pl-3"
            style={{ fontSize: "50px" }}
          >
            →
          </h5>
        </Card>

        <Card>
          <div className="align-items-center d-flex justify-content-around pt-3">
            <img src={person1} alt="" className="img-fluid" />
            <div>
              <h5 className="font-weight-bold text-color">Willson Harry</h5>
              <small className="text-secondary">13 January</small>
            </div>
          </div>

          <Card.Body>
            <Card.Title>2 times brush a day can keep you healthy</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              eius. Similique ipsum distinctio excepturi numquam. Sequi totam
              magni earum id.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <div className="align-items-center d-flex justify-content-around pt-3">
            <img src={person2} alt="" className="img-fluid" />
            <div>
              <h5 className="font-weight-bold text-color">Maria Hadid</h5>
              <small className="text-secondary">19 April 2020</small>
            </div>
          </div>

          <Card.Body>
            <Card.Title>The tooth cancer is taking a challenge</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              totam laboriosam consequuntur saepe error, esse optio perspiciatis
              dolorem dolore provident.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default Blogs;
