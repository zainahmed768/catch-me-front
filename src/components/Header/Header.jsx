import React, { useState } from "react";
import { Button, Col, Container, Figure, Nav, Row } from "react-bootstrap";
import { logo } from "../../constant";

const Header = () => {
  return (
    <>
      <header id="header">
        <Container>
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="logo-wrapper">
                <Figure.Image src={logo} className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="nav-links-wrapper">
                <Nav className="me-auto justify-content-center">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About Us</Nav.Link>
                  <Nav.Link href="#link">Features</Nav.Link>
                  <Nav.Link href="#link">Testimonials</Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col lg={3}>
              <div className="header-btn-wrapper text-end">
                <Button variant="light">Contact Us</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
