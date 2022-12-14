import React, { useState, useRef } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

import { RegisterClient } from "../../functions/clientMethods";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [nameLastname, setNameLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ubication, setUbication] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  //const [userData, setUserData] = useState();
  const [errors, setErrors] = useState({});
  const [errorsValidation, setErrorsValidation] = useState("");
  const inputUserName = useRef(null);
  const inputNameLast = useRef(null);
  const inputEmail = useRef(null);
  const inputPhoneNumber = useRef(null);
  const inputUbication = useRef(null);
  const inputPassword = useRef(null);
  const inputValidPassword = useRef(null);

  const navigate = useNavigate();

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userNameValidation = () => {
    if (userName === "") {
      setErrors({ ...errors, userName: "Campo obligatorio." });
    } else if (userName.length < 4 || userName.length > 10) {
      setErrors({
        ...errors,
        userName: "Debe contener entre 4 y 10 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.userName;
      setErrors(_errors);
    }
  };

  const nameLastnameHandler = (e) => {
    setNameLastname(e.target.value);
  };

  const nameLastnameValidation = () => {
    if (nameLastname === "") {
      setErrors({ ...errors, nameLastname: "Campo obligatorio." });
    } else if (nameLastname.length < 5 || nameLastname.length > 25) {
      setErrors({
        ...errors,
        nameLastname: "Debe contener entre 5 y 25 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.nameLastname;
      setErrors(_errors);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = () => {
    const validEmail = "@";
    const correct = email.match(validEmail);
    if (email === "") {
      setErrors({ ...errors, email: "Campo obligatorio." });
    } else if (!correct) {
      setErrors({ ...errors, email: "Ingrese un email correcto." });
    } else {
      let _errors = { ...errors };
      delete _errors.email;
      setErrors(_errors);
    }
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const phoneNumberValidation = () => {
    if (phoneNumber === "") {
      setErrors({ ...errors, phoneNumber: "Campo obligatorio." });
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      setErrors({ ...errors, phoneNumber: "Debe contener 10 n??meros." });
    } else {
      let _errors = { ...errors };
      delete _errors.phoneNumber;
      setErrors(_errors);
    }
  };

  const ubicationHandler = (e) => {
    setUbication(e.target.value);
  };
  const ubicationValidation = () => {
    if (ubication === "") {
      setErrors({ ...errors, ubication: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.ubication;
      setErrors(_errors);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const passwordValidation = () => {
    if (password === "") {
      setErrors({ ...errors, password: "Campo obligatorio." });
    } else if (password.length < 5 || password.length > 10) {
      setErrors({
        ...errors,
        password: "Debe contener entre 5 y 10 caracteres.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.password;
      setErrors(_errors);
    }
  };

  const validPasswordHandler = (e) => {
    setValidPassword(e.target.value);
  };

  const validPasswordValidation = () => {
    if (validPassword === "") {
      setErrors({ ...errors, validPassword: "Campo obligatorio." });
    } else if (validPassword !== password) {
      setErrors({ ...errors, validPassword: "Las contrase??as no coinciden." });
    } else {
      let _errors = { ...errors };
      delete _errors.validPassword;
      setErrors(_errors);
    }
  };

  const saveBaseUsuarioHandler = () => {
    const usuarioDatos = {
      userName: userName,
      email: email,
      nombre: nameLastname,
      password: password,
      phoneNumber: phoneNumber,
      ubication: ubication,
    };

    if (
      Object.keys(errors).length === 0 &&
      userName &&
      nameLastname &&
      email &&
      phoneNumber &&
      ubication &&
      password &&
      validPassword
    ) {
      //AC?? VA EL REGISTRO DE USUARIO

      cleanInputs();
      //window.localStorage.setItem("user", JSON.stringify(userData));
      console.log(usuarioDatos);
      RegisterClient(usuarioDatos);
      navigate("/");
      setErrorsValidation("");
    } else {
      if (errors.userName) {
        inputUserName.current.focus();
      }
      if (errors.nameLastname) {
        inputNameLast.current.focus();
      }
      if (errors.email) {
        inputEmail.current.focus();
      }
      if (errors.phoneNumber) {
        inputPhoneNumber.current.focus();
      }
      if (errors.ubication) {
        inputUbication.current.focus();
      }
      if (errors.password) {
        inputPassword.current.focus();
      }
      if (errors.validPassword) {
        inputValidPassword.current.focus();
      }

      setErrorsValidation("Por favor ingrese los datos correctamente.");
    }
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
                onBlur={userNameValidation}
                value={userName}
                ref={inputUserName}
              />
              {errors.userName && (
                <div className="errors">{errors.userName}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Nombre y apellido:</Form.Label>
              <Form.Control
                onChange={nameLastnameHandler}
                value={nameLastname}
                onBlur={nameLastnameValidation}
                type="text"
                ref={inputNameLast}
              />
              {errors.nameLastname && (
                <div className="errors">{errors.nameLastname}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                onChange={emailHandler}
                value={email}
                onBlur={emailValidation}
                type="email"
                ref={inputEmail}
              />
              {errors.email && <div className="errors">{errors.email}</div>}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>N??mero de celular:</Form.Label>
              <Form.Control
                onChange={phoneNumberHandler}
                value={phoneNumber}
                onBlur={phoneNumberValidation}
                type="text"
                ref={inputPhoneNumber}
              />
              {errors.phoneNumber && (
                <div className="errors">{errors.phoneNumber}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Ubicaci??n:</Form.Label>
              <Form.Select
                onChange={ubicationHandler}
                value={ubication}
                onBlur={ubicationValidation}
                ref={inputUbication}
              >
                <option>Elija su ciudad</option>
                <option value="Rosario">Rosario</option>
                <option value="Arroyo Seco">Arroyo Seco</option>
                <option value="VGG">Villa Gobernador Galvez</option>
                <option value="Baigorria">Baigorria</option>
              </Form.Select>
              {errors.ubication && (
                <div className="errors">{errors.ubication}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Contrase??a:</Form.Label>
              <Form.Control
                onChange={passwordHandler}
                onBlur={passwordValidation}
                value={password}
                type="password"
                ref={inputPassword}
              />
              {errors.password && (
                <div className="errors">{errors.password}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Repita la contrase??a:</Form.Label>
              <Form.Control
                onChange={validPasswordHandler}
                onBlur={validPasswordValidation}
                value={validPassword}
                type="password"
                ref={inputValidPassword}
              />
              {errors.validPassword && (
                <div className="errors">{errors.validPassword}</div>
              )}
            </Form.Group>
            {<div className="errorsValidation">{errorsValidation}</div>}
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
