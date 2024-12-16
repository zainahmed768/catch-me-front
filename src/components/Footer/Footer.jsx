import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { apple_pay, footer_logo, google_pay, logo } from "../../constant";
import { useContactQueryMutation } from "../../redux/services/SiteSettingServices";
import { contactFormValidation } from "../../utils/HelperFunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PulseLoader } from "react-spinners";
const Footer = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState();
  const [contactQuery, response] = useContactQueryMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactFormValidation(query, setFormErrors)) {
      let data = new FormData();
      data.append("name", query?.name);
      data.append("email", query?.email);
      data.append("phone", query?.phone);
      data.append("message", query?.message);
      contactQuery(data);
    }
  };
  useEffect(() => {
    setQuery({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    if (response?.isSuccess) {
      toast.success("We'll get back to you shortly.", {
        position: "top-center", // Positions: top-right, top-center, bottom-left, etc.
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close when clicked
        pauseOnHover: true, // Pause auto close when hovered
        draggable: true, // Allow drag to dismiss
        theme: "light", // Themes: light, dark, colored
      });
    }
    if (response?.isError) {
      toast.error("Something went Wrong!", {
        position: "top-center", // Positions: top-right, top-center, bottom-left, etc.
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: false, // Show or hide the progress bar
        closeOnClick: true, // Close when clicked
        pauseOnHover: true, // Pause auto close when hovered
        draggable: true, // Allow drag to dismiss
        theme: "light", // Themes: light, dark, colored
      });
    }
  }, [response]);
  return (
    <>
      <ToastContainer />
      <footer className="footer bg-info">
        <Container>
          <Row>
            <Col lg={8}>
              <Row>
                <Col lg={6}>
                  <div className="footer-logo-wrapper text-lg-start text-center">
                    <Link to="/">
                      <img src={logo} className="img-fluid" alt="" />
                    </Link>
                    <p className="text-white pe-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laboriosam odit blanditiis minima porro provident ullam?
                      Tempore, expedita odio. Recusandae, libero.
                    </p>
                  </div>
                  <div className="play-icons-wrapper d-flex justify-content-lg-start justify-content-center gap-2 pt-2">
                    <Link>
                      <img src={apple_pay} className="img-fluid" alt="" />
                    </Link>
                    <Link>
                      <img src={google_pay} className="img-fluid" alt="" />
                    </Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="7">
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
                <Col lg="12"></Col>
              </Row>
            </Col>
            <Col lg={4}>
              <div className="footer-content-wrapper">
                <h2 className="text-white">Do You Have Any Questions?</h2>
              </div>
              <div className="contact-form-wrapper">
                <form action="">
                  <div className="form-group row py-3">
                    <div className="col-lg-6">
                      <label htmlFor="name" className="text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={query?.name}
                        onChange={(e) =>
                          setQuery({ ...query, name: e.target.value })
                        }
                      />
                      {formErrors?.name && (
                        <div className="errors">
                          <p className="text-dark mt-2 mb-0">
                            {formErrors?.name}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="email" className="text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={query?.email}
                        onChange={(e) =>
                          setQuery({ ...query, email: e.target.value })
                        }
                      />
                      {formErrors?.email && (
                        <div className="errors">
                          <p className="text-dark mt-2 mb-0">
                            {formErrors?.email}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group row  pb-3">
                    <div className="col-lg-6">
                      <label htmlFor="phone" className="text-white">
                        Phone Number
                      </label>
                      <input
                        type="phone"
                        className="form-control"
                        name="phone"
                        value={query?.phone}
                        onChange={(e) =>
                          setQuery({ ...query, phone: e.target.value })
                        }
                      />
                      {formErrors?.phone && (
                        <div className="errors">
                          <p className="text-dark mt-2 mb-0">
                            {formErrors?.phone}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group row pb-3">
                    <div className="col-lg-12">
                      <label htmlFor="phone" className="text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id=""
                        rows={3}
                        className="form-control"
                        value={query?.message}
                        onChange={(e) =>
                          setQuery({ ...query, message: e.target.value })
                        }
                      ></textarea>
                      {formErrors?.message && (
                        <div className="errors">
                          <p className="text-dark mt-2 mb-0">
                            {formErrors?.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group row  pb-3">
                    <div className="col-lg-12">
                      <div className="submit-btn-wrapper text-end">
                        <Button
                          variant="light"
                          onClick={handleSubmit}
                          disabled={response?.isLoading}
                        >
                          {response?.isLoading ? <PulseLoader /> : "Submit"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center pt-4">
            <Col lg={4}>
              <div className="footer-link-copyright-wrapper">
                <div className="footer-end-links-wrapper">
                  <Link to={"/terms"} className="text-decoration-none">
                    Terms & Conditions
                  </Link>
                  <Link to={"/privacy"} className="text-decoration-none">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer-copyright-wrapper text-center">
                <p className="mb-0">© 2024 — Copyright</p>
              </div>
            </Col>
            <Col lg={4}>
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
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
