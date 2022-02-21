import React from "react";

import {
  Nav,
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: "white" }}>
              {" "}
              Shopping Cart
            </Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: "400px", marginRight: "100px" }}
              placeholder="Search"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            {" "}
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success" style={{ color: "white" }}>
                <FaShoppingCart
                  colour="white"
                  style={{ margin: "5px", color: "white" }}
                />
                <Badge bg="none">{10}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <span style={{ padding: "10px" }}>Cart is empty </span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
