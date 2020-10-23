import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Col, Form } from "react-bootstrap";
import { UserContext } from "../../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const BookingForm = ({ modalIsOpen, closeModal, date, appointmentOn }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();
    fetch("https://obscure-journey-26618.herokuapp.com/addAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Registerd Succesfully");
          closeModal();
        }
      });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h4 className="primary-text-color font-weight-bold text-center">
        {appointmentOn}
      </h4>
      <small className="font-weight-bold text-center d-block mb-3">
        {date.toDateString()}
      </small>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="name"
            value={loggedInUser.name}
            ref={register({ required: true })}
          />
          {errors.name && (
            <small className="text-danger">This field is required</small>
          )}
          <br />
          <Form.Control
            type="tel"
            placeholder="Your Number"
            name="number"
            ref={register({ required: true })}
          />
          {errors.number && (
            <small className="text-danger">This field is required</small>
          )}
          <br />
          <Form.Control
            type="email"
            placeholder="Your Email"
            value={loggedInUser.email}
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <small className="text-danger">This field is required</small>
          )}
          <br />
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                as="select"
                ref={register({ required: true })}
                name="sex"
              >
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="number"
                placeholder="Your Age"
                ref={register({ required: true })}
                name="age"
              />
              {errors.age && (
                <small className="text-danger">This field is required</small>
              )}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="number"
                placeholder="Weight"
                ref={register({ required: true })}
                name="weight"
              />
              {errors.weight && (
                <small className="text-danger">This field is required</small>
              )}
            </Form.Group>
          </Form.Row>
        </Form.Group>

        <button type="submit" className="btn-grad font-weight-bold ml-auto">
          SEND
        </button>
      </Form>
    </Modal>
  );
};

export default BookingForm;
