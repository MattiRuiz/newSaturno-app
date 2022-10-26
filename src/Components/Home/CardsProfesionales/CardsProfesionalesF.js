import React, { useState, useEffect, Fragment } from "react";
import { getProfessionals } from "../../../functions/professionalMethods";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardProfesionalF from "./CardProfesionalF";

const CardsProfesionales = () => {
  const [professional, setProfessional] = useState([]);

  useEffect(() => {
    async function loadProfessional() {
      const response = await getProfessionals();
      try {
        console.log("Entra a la data");
        setProfessional(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadProfessional(); //Poner un try catch
  }, []);

  return (
    <>
      <Row className="justify-content-around">
        {professional.length < 1 ? (
          <h1> No hay datos disponibles </h1>
        ) : (
          professional.map((item) => (
            <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
              <CardProfesionalF data={item} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default CardsProfesionales;