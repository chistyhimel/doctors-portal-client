import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container fluid>
      <Navbar expand="md" className="pt-md-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto font-weight-bold">
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <Nav.Link href="#home" className="mr-md-5">
                Home
              </Nav.Link>
            </Link>
            <Link
              to="/patients"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Nav.Link href="#link" className="mr-md-5">
                Patient
              </Nav.Link>
            </Link>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Nav.Link href="#link" className="mr-md-5">
                Dashboard
              </Nav.Link>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Nav.Link href="#link" className="mr-md-5">
                Admin
              </Nav.Link>
            </Link>
            <Nav.Link href="#link" className="mr-md-5">
              Blog
            </Nav.Link>
            <Nav.Link href="#link" className="">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
