import React from "react";
import "./AboutUs.css";

import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

const AboutUs = () => {
  const imgAboutUs = require("./saturnoApp.png");
  return (
    // <div className='aboutUsDiv'>
    //   <h2>Sobre nosotros</h2>
    //   <div className='div1'>
    //       <h5>Quienes somos:</h5>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //   </div>
    //   <img
    //       className="contactImg"
    //       alt="motivation"
    //       src={require("./saturnoApp.png")}/>
    //   <div className='div2'>
    //     <h5>Misión, visión y objetivos:</h5>
    //     <p>Etiam ac sollicitudin nisi. Etiam ante erat, consequat nec volutpat quis, eleifend at erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sollicitudin ante. Nunc feugiat id diam a auctor. Etiam ac sollicitudin nisi. Etiam ante erat, consequat nec volutpat quis, eleifend at erat.</p>
    //   </div>
    // </div>
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
          <Image src={imgAboutUs} fluid />
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
