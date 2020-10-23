import React, { useContext } from "react";
import firebaseConfig from "./firebaseConfig";
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginImg from "../../images/login-img.png";
import { useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import GoogleButton from "react-google-button";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  var provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        const { displayName, email } = result.user;
        const newUser = { ...user };
        newUser.name = displayName;
        newUser.email = email;
        setUser(newUser);
        setLoggedInUser(newUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="align-self-center">
          <h3 className="text-center">{newUser ? "Signup" : "Login"}</h3>

          <Form onSubmit={handleSubmit}>
            {newUser && (
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                />
              </Form.Group>
            )}

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="name"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
              <Form.Text className="text-muted">
                Password must be more than six characters and contains a number.
              </Form.Text>
            </Form.Group>

            <button
            onClick={handleGoogleSignIn}
              className=" btn-grad w-100 font-weight-bold mb-3"
            >
              Sign in
               
            </button>
          </Form>

          <p className="text-center">
            Don't have an account?{" "}
            <span
              className="text-color"
              onClick={() => setNewUser(!newUser)}
              style={{ cursor: "pointer" }}
            >
              Sign up
            </span>
          </p>

          <GoogleButton className="mx-auto" onClick={handleGoogleSignIn} />
        </Col>
        <Col md={6} className="d-none d-md-block">
          <img src={loginImg} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
