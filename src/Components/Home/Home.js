import React from "react";
import Carrusel from "./Carrusel/Carrusel";

import Container from "react-bootstrap/Container";
import CarruselBs from "./CarruselBs/CarruselBs";

const Home = () => {
  return (
    <Container className="py-3 px-0">
      {/* <CarruselBs /> */}
      <Carrusel />
    </Container>
  );
};

export default Home;
