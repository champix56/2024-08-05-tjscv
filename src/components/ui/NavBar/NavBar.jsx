import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">thumbnail</Nav.Link>
            <Nav.Link href="#features">edit id:1</Nav.Link>
            <Nav.Link href="#pricing">Nouveau</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavBar;
