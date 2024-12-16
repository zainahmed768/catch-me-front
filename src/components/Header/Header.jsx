import React, { useState } from "react";
import { Button, Col, Container, Figure, Nav, Row } from "react-bootstrap";
import { logo } from "../../constant";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hideMobileMenu = () => {
    setShowMenu(false);
  };

  const handleMobileMenu = () => {
    setShowMenu(true);
    // console.log(true);
  };
  return (
    <>
      <header id="header">
        <Container>
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="logo-wrapper d-flex justify-content-between align-items-center">
                <Link to="/">
                  <Figure.Image src={logo} className="img-fluid" />
                </Link>
                <ul id="mob" className="list-unstyled">
                  <li className="mobile nav-items">
                    <div
                      onClick={handleMobileMenu}
                      className="canvas-icon text-white"
                    >
                      <AiOutlineBars color="#006060" />
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} className="text-center d-none d-lg-block">
              <div className="nav-links-wrapper">
                <Nav className="me-auto justify-content-center">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#link">Testimonials</Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col lg={3}>
              <div className="header-btn-wrapper text-end d-none d-lg-block">
                <Button variant="light" href="#footer">
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className={showMenu ? "mobile-header show" : "mobile-header"}>
        <div onClick={hideMobileMenu} className="cancel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <ul className="mobile-nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>

          <li className="nav-item">
            <Link to="/">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Features</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
