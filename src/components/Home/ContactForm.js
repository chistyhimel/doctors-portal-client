import React from 'react';
import { Container } from 'react-bootstrap';
import "./Home.css"

const ContactForm = () => {
    return (
        <section className="contact-container mt-5 mb-5 pt-5 pb-5">
        <Container>
          <h3 className="font-weight-bold primary-text-color text-center">CONTACT US</h3>
          <h1 className="font-weight-bold text-center text-white">Always Contact With us</h1>
          <div className="">
              <input type="text" className="form-control form-control-lg mb-4"/>
              <input type="text" className="form-control form-control-lg mb-4"/>
              <textarea class="form-control form-control-lg mb-3" rows="5"></textarea>
              <button className="btn btn-lg btn-grad text-white font-weight-bold d-block text-center">SUBMIT</button>
          </div>
        </Container>
      </section>
    );
};

export default ContactForm;