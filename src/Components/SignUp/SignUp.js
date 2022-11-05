import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const registerResponseData = {};

const SignUp = () => {
  const [userName, setUserName] = useState(null);
  const [nameLastname, setNameLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [ubication, setUbication] = useState(null);
  const [password, setPassword] = useState(null);
  const [validPassword, setValidPassword] = useState(null);
  const [userData, setUserData] = useState();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "userName") {
      setUserName(value);
    }
    if (id === "nameLastname") {
      setNameLastname(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "phoneNumber") {
      setPhoneNumber(value);
    }
    if (id === "ubication") {
      setUbication(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    
  }

  const saveBaseUsuarioHandler = () => {
    const usuarioDatos = {
      userName: userName,
      nameLastname: nameLastname,
      email: email,
      phoneNumber: phoneNumber,
      ubication: ubication,
      password: password,
    };
    setUserData([usuarioDatos]);
    window.localStorage.setItem("baseUsuario", JSON.stringify(usuarioDatos));
    registerResponseData = [...usuarioDatos] 
    console.log(usuarioDatos);
    
  };

  const cleanInputs = () => {
    setUserName("");
    setNameLastname("");
    setEmail("");
    setPhoneNumber("");
    setUbication("");
    setPassword("");
    setValidPassword("");
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4 mb-4">
          <h1>Registrarse</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-2">
          <Form>
            <Form.Group>
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                type="text"
                id="userName"
                onChange={(e) => handleInputChange(e)}
                value={userName}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Nombre y apellido:</Form.Label>
              <Form.Control
                type="text"
                id="nameLastname"
                onChange={(e) => handleInputChange(e)}
                value={nameLastname}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                id="email"
                onChange={(e) => handleInputChange(e)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Número de celular:</Form.Label>
              <Form.Control
                type="tel"
                id="phoneNumber"
                onChange={(e) => handleInputChange(e)}
                value={phoneNumber}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Ubicación:</Form.Label>
              <Form.Select
                aria-label="select your city"
                id="ubication"
                onChange={(e) => handleInputChange(e)}
                value={ubication}
              >
                <option>Elija su ciudad</option>
                <option value="Rosario">Rosario</option>
                <option value="Arroyo Seco">Arroyo Seco</option>
                <option value="VGG">Villa Gobernador Galvez</option>
                <option value="Baigorria">Baigorria</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(e) => handleInputChange(e)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Repita la contraseña:</Form.Label>
              <Form.Control
                type="password"
                id="passwordValidation"
                onChange={(e) => handleInputChange(e)}
                value={validPassword}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="mt-4"
              onClick={() => saveBaseUsuarioHandler()}
            >
              Enviar
            </Button>
            <Button
              variant="secondary"
              className="mt-4 mx-2"
              onClick={cleanInputs}
            >
              Resetear
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


export default SignUp;
