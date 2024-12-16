import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { usePagesQuery } from "../../redux/services/SiteSettingServices";

const PrivacyPolicy = () => {
  const { data: pages } = usePagesQuery("privacy-policy");
  console.log(pages);
  return (
    <>
      <Header />
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-header-heading-wrapper">
                <h1 className="text-white">Privacy Policy</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="terms py-5 my-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="term-content-wrapper">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  et culpa sit voluptates quasi eligendi quis ullam officia
                  dicta rem quae suscipit nemo minus libero accusantium,
                  dignissimos deserunt! Expedita voluptatem, assumenda officiis,
                  esse dolorem harum numquam corrupti corporis excepturi commodi
                  molestias odio eaque aperiam atque laborum cum eius, veritatis
                  inventore! Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Vel et culpa sit voluptates quasi eligendi quis ullam
                  officia dicta rem quae suscipit nemo minus libero accusantium,
                  dignissimos deserunt! Expedita voluptatem, assumenda officiis,
                  esse dolorem harum numquam corrupti corporis excepturi commodi
                  molestias odio eaque aperiam atque laborum cum eius, veritatis
                  inventore!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  et culpa sit voluptates quasi eligendi quis ullam officia
                  dicta rem quae suscipit nemo minus libero accusantium,
                  dignissimos deserunt! Expedita voluptatem, assumenda officiis,
                  esse dolorem harum numquam corrupti corporis excepturi commodi
                  molestias odio eaque aperiam atque laborum cum eius, veritatis
                  inventore!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  et culpa sit voluptates quasi eligendi quis ullam officia
                  dicta rem quae suscipit nemo minus libero accusantium,
                  dignissimos deserunt! Expedita voluptatem, assumenda officiis,
                  esse dolorem harum numquam corrupti corporis excepturi commodi
                  molestias odio eaque aperiam atque laborum cum eius, veritatis
                  inventore!
                </p>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                  et culpa sit voluptates quasi eligendi quis ullam officia
                  dicta rem quae suscipit nemo minus libero accusantium,
                  dignissimos deserunt! Expedita voluptatem, assumenda officiis,
                  esse dolorem harum numquam corrupti corporis excepturi commodi
                  molestias odio eaque aperiam atque laborum cum eius, veritatis
                  inventore!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
