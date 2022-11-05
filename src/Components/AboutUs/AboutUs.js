import React from "react";
import "./AboutUs.css";

import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const AboutUs = () => {
  const imgAboutUs = require("./saturnoApp.png");
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <Container className="py-3 px-0">
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4">
          <h1>Sobre nosotros</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="my-4">
          <h5>Quienes somos</h5>
          <p>
            El contenido de esta página es bastante dudoso, así que aca va un
            lorem ipsum. Ut commodo gravida neque, vitae pharetra ligula luctus
            dictum. Aliquam elit mauris, interdum ut urna vel, aliquam tristique
            odio. Etiam ac sollicitudin nisi. Etiam ante erat, consequat nec
            volutpat quis, eleifend at erat.
          </p>
        </Col>
        <Col xs={12} className="px-0">
          <Image className={theme} src={imgAboutUs} fluid />
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-5">
          <h5>Misión, visión y objetivos:</h5>
          <p>
            Etiam ac sollicitudin nisi. Etiam ante erat, consequat nec volutpat
            quis, eleifend at erat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec eu sollicitudin ante. Nunc feugiat id diam a
            auctor. Etiam ac sollicitudin nisi. Etiam ante erat, consequat nec
            volutpat quis, eleifend at erat.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
