import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import "./SignUp.css";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const baseUsuarios = [
  {
    userName: "sofia12",
    nameLastname: "sofia corva",
    email: "sofia@gmail.com",
    phoneNumber: "123456",
    ubication: "Rosario",
    password: "1234",
  },
];

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [nameLastname, setNameLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ubication, setUbication] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [userData, setUserData] = useState(baseUsuarios);

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
      setErrors({ ...errors, phoneNumber: "Debe contener 10 números." });
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
      setErrors({ ...errors, validPassword: "Las contraseñas no coinciden." });
    } else {
      let _errors = { ...errors };
      delete _errors.validPassword;
      setErrors(_errors);
    }
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
      setUserData([usuarioDatos, ...baseUsuarios]);
      cleanInputs();
      window.localStorage.setItem("baseUsuario", JSON.stringify(userData));
      console.log(userData);
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
    <Container className="text-center py-5">
      <h2>Registrarse</h2>
      <form className="signUpForm">
        <label>Nombre de usuario: </label>
        <input onChange={userNameHandler} value={userName} type="text"></input>
        <label>Nombre y apellido: </label>
        <input
          onChange={nameLastnameHandler}
          value={nameLastname}
          type="text"
        ></input>
        <label>Email: </label>
        <input onChange={emailHandler} value={email} type="email"></input>
        <label>Número de celular: </label>
        <input
          onChange={phoneNumberHandler}
          value={phoneNumber}
          type="text"
        ></input>
        <label>Ubicación:</label>
        <select onChange={ubicationHandler} value={ubication}>
          <option value="Rosario">Rosario</option>
          <option value="Arroyo Seco">Arroyo Seco</option>
          <option value="VGG">Villa Gobernador Galvez</option>
          <option value="Baigorria">Granadero Baigorria</option>
        </select>
        <label>Contraseña: </label>
        <input
          onChange={passwordHandler}
          value={password}
          type="password"
        ></input>
        <label>Repita la contraseña: </label>
        <input
          onChange={validPasswordHandler}
          value={validPassword}
          type="password"
        ></input>
      </form>
      <div className="buttonForm">
        <Button
          onClick={saveBaseUsuarioHandler}
          className="botonEnviar"
          color="primary"
        >
          Enviar
        </Button>
        <Button onClick={cleanInputs}>Limpiar</Button>
      </div>
    </Container>
  );
};

export default SignUp;
