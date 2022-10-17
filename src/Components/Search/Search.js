import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5>Buscá a tu local favorito</h5>
            <input type="text"></input>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Search;
