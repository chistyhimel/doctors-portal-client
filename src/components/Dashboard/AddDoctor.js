import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SideBar from "./SideBar";

const AddDoctor = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const photo = data.file;
    const formData = new FormData();
    formData.append("file", photo[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);
    fetch("https://obscure-journey-26618.herokuapp.com/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar-container p-md-5">
          <SideBar></SideBar>
        </Col>
        <Col md={9} className="dashboard-container">
          <h5 className="pt-4 pb-4">Doctor</h5>
          <div className="bg-light p-3">
            <h6 className="primary-text-color p-4">Add Doctor</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email..."
                name="email"
                className="form-control"
                ref={register({ required: true })}
              />
              {errors.email && (
                <small className="text-danger">This field is required</small>
              )}
              <br />
              <input
                type="text"
                placeholder="Name..."
                name="name"
                className="form-control"
                ref={register({ required: true })}
              />
              {errors.name && (
                <small className="text-danger">This field is required</small>
              )}
              <br />
              <input
                type="file"
                name="file"
                className="form-control"
                ref={register({ required: true })}
              />
              {errors.photo && (
                <small className="text-danger">This field is required</small>
              )}
              <br />
              <button className="btn-grad" type="submit">
                Submit
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddDoctor;
