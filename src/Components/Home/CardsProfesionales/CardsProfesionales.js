import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardProfesional from "./CardProfesional";

const CardsProfesionales = () => {
  return (
    <>
      <Row className="justify-content-around">
        <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
          <CardProfesional />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
          <CardProfesional />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
          <CardProfesional />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
          <CardProfesional />
        </Col>
      </Row>
    </>
  );
};

export default CardsProfesionales;
