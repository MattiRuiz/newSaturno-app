import React from "react";

import "./Content1.css";

import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Content1 = () => {
  const empleada1 = require("./empleada1.jpg");
  return (
    <>
      <Row className="justify-content-center content1 py-4 align-items-center">
        <Col xs={8} md={3}>
          <Image src={empleada1} fluid roundedCircle />
        </Col>
        <Col xs={10} md={4} className="my-3 my-lg-0">
          <h1 className="text-white font-weight-bold">
            El gestor de turnos que tu negocio estaba necesitando
          </h1>
          <Link to={"/signup"}>
            <Button color="primary">
              <FaRegUser /> Crear cuenta
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Content1;
