import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../node_modules/bootstrap/dist/js/bootstrap.js'
const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavBar;
