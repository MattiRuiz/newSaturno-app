import React from "react";

import "./CarruselBs.css";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const CarruselBs = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Row className="carruselContainer">
          <Col xs lg={2}></Col>
          <Col xs lg={6}></Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarruselBs;
