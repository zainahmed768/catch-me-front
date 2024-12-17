import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { usePagesQuery } from "../../redux/services/SiteSettingServices";

const TermsCondition = () => {
  const { data: pages } = usePagesQuery();

  let page = pages?.response?.data?.data;
  let termsContent = page?.filter(
    (page) => page?.slug == "terms-and-conditions-of-use"
  );

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
                <h1 className="text-white">Terms & Conditions</h1>
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
                {termsContent?.map((content) => {
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

export default TermsCondition;
