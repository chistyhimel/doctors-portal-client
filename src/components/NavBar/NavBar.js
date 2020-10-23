import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container fluid>
      <Navbar expand="md" className="pt-md-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto font-weight-bold">
            <Nav.Link href="#home" className="mr-md-5">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="mr-md-5">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="mr-md-5">
              Dental Service
            </Nav.Link>
            <Nav.Link href="#link" className="mr-md-5">
              Review
            </Nav.Link>
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
