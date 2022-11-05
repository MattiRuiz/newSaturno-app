import React from "react";

import CarruselBs from "./CarruselBs/CarruselBs";
import CardsProfesionales from "./CardsProfesionales/CardsProfesionales";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <Container className="py-3 px-0">
        <CarruselBs />
      </Container>
        <div>
        <Container className="pb-5">
          <h5 className="mb-4">Encontrá los mejores lugares en Rosario</h5>
          <CardsProfesionales />
          <h5 className="mb-4 mt-5">
            Locales con turnos disponibles esta semana
          </h5>
          <CardsProfesionales />
        </Container>
        </div>
    </>
  );
};

export default Home;
