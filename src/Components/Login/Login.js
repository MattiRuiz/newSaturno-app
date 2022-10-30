import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { login } from "../../functions/loginAuth";

const Login = () => {
  const navigate = useNavigate(); // Allows us to redirect
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = () => {
    login(userName, password)
      .then(() => {
        window.localStorage.setItem("current_user", JSON.stringify(userName)); // Saving the current session
        navigate("/"); // Redirect
        console.log("Successful login, user: " + userName);
      })
      .catch((err) => {
        alert(err);
      });

    setUserName("");
    setPassword("");
  };

  return (
    // <Container className="text-center py-5">
    //    <h1 className='h1Login'>Iniciar sesión</h1>
    //    <form className='inputLogin'>
    //         <label>Nombre de usuario: </label>
    //         <input id="userName" onChange={(event) => setUserName(event.target.value) } value={userName} type="text"></input>
    //         <label>Contraseña: </label>
    //         <input id="password" onChange={(event) => setPassword(event.target.value) } value ={password}type="password"></input>
    //         <Button className='buttonLogin' onClick={loginHandler} color="primary">Entrar</Button>
    //    </form>
    //    <div className='helpLogin'>
    //         <p>¿Olvidaste tu contraseña? Haz click <a href='#'>aquí.</a></p>
    //         <p>¿No tenes cuenta? Has click <Link to={"/signup"}>acá</Link> para registrarte.</p>
    //    </div>
    // </Container>
    <Container className="py-3">
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4">
          <h1>Iniciar sesión</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-4">
          <Form>
            <Form.Group>
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                type="text"
                id="userName"
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
              />
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </Form.Group>
            <Button onClick={loginHandler} color="primary" className="mb-4">
              Entrar
            </Button>
          </Form>
          <p className="mb-1">
            <b>¿Olvidaste tu contraseña?</b> Has click{" "}
            <Link to={"/perfilUsuario"} className="colorLink">
              acá
            </Link>
          </p>
          <p>
            <b>¿No tenes cuenta?</b> Has click{" "}
            <Link to={"/signup"} className="colorLink">
              acá
            </Link>{" "}
            para registrarte
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
