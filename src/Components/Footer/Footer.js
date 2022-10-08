import React from "react";
import "./Footer.css";

import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container fluid sticky="bottom" className="bottom-fixed footer">
      <p>
        Inserte el contenido de un footer aquí. Todos los derechos reservados al
        Grupo 4 ©
      </p>
    </Container>
  );
};

export default Footer;
