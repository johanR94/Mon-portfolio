import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          {" Portfolio | {meta.title} </title>"}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="mb-5 po_items_ho justify-content-center">
          {dataportfolio.map((data, i) => (
            <Col
              key={i}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 portfolio-col"
            >
              <div className="po_item">
                <img src={data.img} alt={data.alt} className="po_img" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
