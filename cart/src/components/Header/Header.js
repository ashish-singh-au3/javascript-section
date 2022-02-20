import React from "react";

import {
  Nav,
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand>
            <a href="/">Shopping Cart</a>
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
              <Dropdown.Toggle variant="success">
                <FaShoppingCart style={{ margin: "5px" }} />
                <Badge style={{ color: "white" }}>{10}</Badge>
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
