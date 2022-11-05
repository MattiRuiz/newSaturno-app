import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const baseUsuarios = [
  {
    userName: "",
    nameLastname: "sofia corva",
    email: "sofia@gmail.com",
    phoneNumber: "123456",
    ubication: "Rosario",
    password: "1234",
  },
];

const SignUp = () => {
  const [userName, setUserName] = useState(userName);
  const [nameLastname, setNameLastname] = useState(nameLastname);
  const [email, setEmail] = useState(email);
  const [phoneNumber, setPhoneNumber] = useState(phoneNumber);
  const [ubication, setUbication] = useState(ubication);
  const [password, setPassword] = useState(password);
  const [validPassword, setValidPassword] = useState(validPassword);
  const [userData, setUserData] = useState({});

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const nameLastnameHandler = (e) => {
    setNameLastname(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const ubicationHandler = (e) => {
    setUbication(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const validPasswordHandler = (e) => {
    setValidPassword(e.target.value);
  };

  const saveBaseUsuarioHandler = () => {
    const usuarioDatos = {
      userName: userName,
      nameLastname: nameLastname,
      email: email,
      phoneNumber: phoneNumber,
      ubication: ubication,
      password: password,
    };
    setUserData([usuarioDatos, ...baseUsuarios]);
    window.localStorage.setItem("baseUsuario", JSON.stringify(userData));
    console.log(userData);
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
                onChange={userNameHandler}
                value={userName}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Nombre y apellido:</Form.Label>
              <Form.Control
                type="text"
                onChange={nameLastnameHandler}
                value={nameLastname}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                onChange={emailHandler}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Número de celular:</Form.Label>
              <Form.Control
                type="tel"
                onChange={phoneNumberHandler}
                value={phoneNumber}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Ubicación:</Form.Label>
              <Form.Select
                aria-label="select your city"
                onChange={ubicationHandler}
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
                onChange={passwordHandler}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Repita la contraseña:</Form.Label>
              <Form.Control
                type="password"
                onChange={validPasswordHandler}
                value={validPassword}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="mt-4"
              onClick={saveBaseUsuarioHandler}
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
