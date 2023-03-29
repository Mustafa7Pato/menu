import React, { useState } from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Row,
} from "react-bootstrap";
import "../style/navbar.css";

function NavBars({ filterBySearch }) {
  const [searchValue, setSearchValue] = useState("");
  const handleFilterBySearch = () => {
    filterBySearch(searchValue);
    setSearchValue("");
  };
  return (
    <Row className="nav__bar ">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="fs-3 logo">
            مطعم امك
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <Form.Control
                type="text"
                placeholder="ابحث.."
                className="me-2 fs-5 search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button
                className="btn-search me-2"
                onClick={handleFilterBySearch}
              >
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBars;
