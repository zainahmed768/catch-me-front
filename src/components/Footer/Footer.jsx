import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { apple_pay, footer_logo, google_pay, logo } from "../../constant";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-info">
        <Container>
          <Row>
            <Col lg={8}>
              <Row>
                <Col lg={6}>
                  <div className="footer-content-wrapper">
                    <h2 className="text-white">Do You Have Any Questions?</h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur. Eget nec nisi non
                      libero vitae massa. Aliquet malesuada fringilla non eg
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <div className="disclamer-wrapper">
                    <Link className="text-decoration-none" to="/">
                      <span className="txt">Disclaimer</span>{" "}
                      <FiPlus size="18px" />
                    </Link>
                  </div>
                  <div className="footer-menu-wrapper">
                    <ul className="list-unstyled d-flex gap-3 justify-content-between">
                      <li>
                        <Link className="text-decoration-none" to={"/"}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="text-decoration-none" to={"/"}>
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link className="text-decoration-none" to={"/"}>
                          FAQS
                        </Link>
                      </li>
                      <li>
                        <Link className="text-decoration-none" to={"/"}>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-info-wrapper d-flex gap-3">
                    <div className="phone-wrapper">
                      <h6>CONTACT </h6>
                      <Link to="tel:18901235261">+1 890 123-52-61</Link>
                    </div>
                    <div className="phone-wrapper">
                      <h6>Email </h6>
                      <Link to="mailto:info@logoipsum.com">
                        info@logoipsum.com
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <div className="footer-link-copyright-wrapper">
                    <div className="footer-end-links-wrapper">
                      <Link to={"/"} className="text-decoration-none">
                        Terms & Conditions
                      </Link>
                      <Link to={"/"} className="text-decoration-none">
                        Privacy Policy
                      </Link>
                    </div>
                    <div className="footer-copyright-wrapper">
                      <p className="mb-0">© 2024 — Copyright</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <div className="footer-contact-btn-wrapper text-end">
                <Button variant="light">Contact Us</Button>
              </div>
              <div className="footer-logo-wrapper text-end pt-5 mt-5">
                <Link to="/">
                  <img src={footer_logo} className="img-fluid" alt="" />
                </Link>
                <p className="text-white pe-3">Lorem ipsum dolor sit am</p>
              </div>
              <div className="play-icons-wrapper d-flex justify-content-end gap-2 pt-4">
                <Link>
                  <img src={apple_pay} className="img-fluid" alt="" />
                </Link>
                <Link>
                  <img src={google_pay} className="img-fluid" alt="" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
