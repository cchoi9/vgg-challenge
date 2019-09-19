import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

export default function Navigate() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Navbar.Brand href="#homepage">
        <img alt="Viagogo" src={require("../img/vgg.png")} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#homepage">Home</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#help">Help Center</Nav.Link>
          <Nav.Link href="#sell">Sell Tickets</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
