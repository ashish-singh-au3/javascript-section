import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaPaintBrush } from "react-icons/fa";
import Button from "react-bootstrap/Button";

import "./Nav2.css";

export default class Nav2 extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <h1 className="heading">
                Artistic
                <FaPaintBrush />
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/for-artists">
                  <h4 className="heading-sub-names">For Artists</h4>{" "}
                </Nav.Link>
                <Nav.Link href="/for-corporates">
                  <h4 className="heading-sub-names">Corporates</h4>{" "}
                </Nav.Link>
                <Nav.Link href="/for-art-collectors">
                  <h4 className="heading-sub-names">Art Collectors</h4>{" "}
                </Nav.Link>
                <Button className="login-btn" variant="outline-primary">
                  Login/SignUp{" "}
                </Button>{" "}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
