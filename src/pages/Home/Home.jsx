import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  Accordion,
  Button,
  Col,
  Container,
  Figure,
  Row,
} from "react-bootstrap";
import {
  about_img,
  apple_pay,
  banner_img,
  feature1_img,
  feature2_img,
  feature3_img,
  feature4_img,
  feature5_img,
  google_pay,
  photo_img,
  playbtn_img,
} from "../../constant";
import "../../assets/css/style.css";
import { faqs } from "../../utils/data";
import {
  useFaqsQuery,
  useLandingPageContentQuery,
} from "../../redux/services/SiteSettingServices";

const Home = () => {
  const { data } = useLandingPageContentQuery();
  const { data: faqs } = useFaqsQuery();
  let homeContent = data?.response?.data;
  let homeFaqs = faqs?.response?.data;

  console.log(faqs);
  return (
    <>
      <Header />
      {/* banner starts here */}
      <section className="banner-sec">
        <Container>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="banner-content-wrapper mt-5">
                <div className="banner-heading-wrapper text-center">
                  <h1 className="text-white">{homeContent?.section1_title}</h1>
                  <p className="text-white">
                    {homeContent?.section1_sub_title}
                  </p>
                </div>
                <div className="banner-btn-wrappers text-center d-flex gap-2 justify-content-center">
                  <a href={homeContent?.apple_link}>
                    <img src={apple_pay} className="img-fluid" alt="" />
                  </a>
                  <a href={homeContent?.google_link}>
                    <img src={google_pay} className="img-fluid" alt="" />
                  </a>
                </div>
              </div>
              <div className="banner-img-wrapper">
                <img
                  src={homeContent?.section1_image}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      </section>
      {/* banner ends here */}
      {/* About starts here */}
      <section className="about-sec">
        <Container>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="about-first-row-wrapper">
                <div className="text-center">
                  <h2 className="text">{homeContent?.section2_title}</h2>
                  <p>{homeContent?.section2_sub_title}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 align-items-center">
            <Col lg={6}>
              <div className="about-img-wrapper">
                <Figure.Image src={homeContent?.section2_image} />
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="about-content-wrapper"
                dangerouslySetInnerHTML={{
                  __html: homeContent?.section2_content,
                }}
              >
                {/* <h2>Lorem ipsum dolor consectetur adipiscing elit</h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur. Elementum suspendisse
                  arcu sed aliquam ut nibh suspendisse posuere. Volutpat in
                  fusce nisi ipsum nec vehicula. Mattis nullam turpis est Lorem
                  ipsum dolor sit amet consectetur. Elementum suspendisse arcu
                  sed aliquam ut{" "}
                </p>
                <p>
                  nec vehicula. Mattis nullam turpis est Lorem ipsum dolor sit
                  amet consectetur. Elementum suspendisse arcu sed aliquam ut
                </p> */}
              </div>
              <div className="about-btn-wrapper mt-5">
                <Button variant="dark">Learn More</Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 align-items-center">
            <Col lg={6}>
              <div
                className="about-content-wrapper"
                dangerouslySetInnerHTML={{
                  __html: homeContent?.section3_content,
                }}
              >
                {/* <h2>Lorem ipsum dolor sit amet consectetur</h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur. Elementum suspendisse
                  arcu sed aliquam ut nibh suspendisse posuere. Volutpat in
                  fusce nisi ipsum nec vehicula. Mattis nullam turpis est Lorem
                  ipsum dolor sit amet consectetur. Elementum suspendisse arcu
                  sed aliquam ut
                </p>
                <p>
                  nec vehicula. Mattis nullam turpis est Lorem ipsum dolor sit
                  amet consectetur. Elementum suspendisse arcu sed aliquam ut
                </p> */}
              </div>
              <div className="about-btn-wrapper mt-5">
                <Button variant="dark">Learn More</Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-img-wrapper">
                <Figure.Image src={homeContent?.section3_image} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* About ends here */}
      {/* Trusted starts here */}
      <section className="trusted-sec bg-primary">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="trusted-wrap">
                <h2>Trusted by over multiple users</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elementum suspendisse
                  arcu sed aliquam ut nibh suspendisse posuere. V
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="stats-row-wrapper d-flex align-items-center gap-3">
                <div className="stats-wrapper">
                  <h2>100k</h2>
                  <p>entum suspendisse</p>
                </div>
                <div className="stats-wrapper">
                  <h2>99%</h2>
                  <p>entum suspendisse</p>
                </div>
                <div className="stats-wrapper">
                  <h2>100k</h2>
                  <p>entum suspendisse</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Trusted ends here */}
      {/* features starts here */}
      <section className="feature-sec">
        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
              <div className="feature-content-wrapper text-center">
                <h2>our amazing features</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elementum suspendisse
                  arcu sed aliquam ut nibh suspendisse posuere. Volutpat in
                  fusce nisi ipsum nec vehicula. Mattis null
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {homeContent?.section4?.map((feature) => {
              return (
                <Col lg={4}>
                  <div className="feature-card-wrapper">
                    <div className="feature-img-wrapper">
                      <Figure.Image src={feature?.image} />
                    </div>
                    <div className="feature-content-wrapper pt-3">
                      <h3>{feature?.title}</h3>
                      <p>{feature?.subtitle}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className="mt-5 pt-5">
            <Col lg={12}>
              <div className="feature-video-wrapper position-relative">
                <div className="feature-video-img-wrapper">
                  <img src={feature4_img} className="img-fluid" />
                </div>
                <div className="feature-content-wapper position-absolute bottom-0 w-100 d-flex justify-content-between pb-4 px-5">
                  <div className="feature-des-wrapper">
                    <h2 className="text-white">Lorem ipsum dolor sit</h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet consectetur. Tortor cras massa
                      nam adipiscing la
                    </p>
                  </div>
                  <div className="feature-play-btn-wrapper text-center">
                    <img src={playbtn_img} className="img-fluid" alt="" />
                    <p className="text-white text-center">PLAY VIDEO</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-stretch">
            <Col lg="6">
              <div className="feature-brown-wrapper mt-5 ">
                <div className="feature-brown-content-wrapper text-center px-5 pt-5">
                  <h2 className="text-white">Lorem ipsum dolor sit</h2>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur. Elementum
                    suspendisse arcu sed aliquam ut nibh suspendisse posuere.
                    Volutpat i
                  </p>
                </div>
                <div className="feature-brown-img-wrapper">
                  <img src={feature5_img} className="img-fluid" alt="" />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="feature-blue-wrapper mt-5 bg-info d-flex  align-items-center px-5">
                <div className="feature-brown-content-wrapper text-center pt-5">
                  <h2 className="text-white">Lorem ipsum dolor sit</h2>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur. Elementum
                    suspendisse arcu sed aliquam ut nibh suspendisse posuere.
                    Volutpat i
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* features ends here */}
      {/* FAQ starts here */}
      <section className="faq-sec bg-primary">
        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
              <div className="faq-heading-wrapper text-center">
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elementum suspendisse
                  arcu sed aliquam ut nibh suspendisse posuere. Volutpat in
                  fusce nisi ipsum nec vehicula. Mattis null
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={1}></Col>
            <Col lg={10}>
              <Accordion defaultActiveKey="0">
                {homeFaqs?.map((faq, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header>{faq?.question}</Accordion.Header>
                      <Accordion.Body>{faq?.answer}</Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      {/* FAQ ends here */}
      <Footer />
    </>
  );
};

export default Home;
