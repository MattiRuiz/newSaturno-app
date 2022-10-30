import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import CardProfesional from "../Home/CardsProfesionales/CardProfesional";

const PerfilUsuario = () => {
  const fotoUsuario = require("./foto-usuario.jpg");
  return (
    <>
      <Container>
        <Row className="justify-content-center text-start">
          <Col xs={11} className="border rounded py-4">
            <Row className="justify-content-center align-items-center pt-3">
              <Col xs={3}>
                <Image src={fotoUsuario} alt="" roundedCircle fluid />
              </Col>
              <Col xs={7}>
                <h1>Mariano del Rio</h1>
                <h5 className="fw-light">Rosario - Santa Fe</h5>
              </Col>
              <Col xs={10} className="border-bottom mt-5">
                <h6>Tus turnos</h6>
              </Col>
              <Col xs={10}>
                <Row className="mt-4">
                  <Col xs={4}>
                    <CardProfesional />
                  </Col>
                  <Col xs={4}>
                    <CardProfesional />
                  </Col>
                </Row>
              </Col>
              <Col xs={10} className="text-center mt-5">
                <p>
                  <strong>¿Problemas con un turno?</strong> Envinos un{" "}
                  <Link to={"/contacto"} className="colorLink">
                    mensaje
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PerfilUsuario;
