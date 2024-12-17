import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { usePagesQuery } from "../../redux/services/SiteSettingServices";

const PrivacyPolicy = () => {
  const { data: pages } = usePagesQuery();

  let page = pages?.response?.data?.data;
  let privacyContent = page?.filter((page) => page?.slug == "privacy-policy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                {privacyContent?.map((content) => {
                  return (
                    <>
                      <p
                        dangerouslySetInnerHTML={{ __html: content?.content }}
                      ></p>
                    </>
                  );
                })}
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
