import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

import "./NavBar.css";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const NavBar = () => {
  //Modal de cerrar sesión
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <Navbar bg="white" expand="lg" className="navBar index1">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              className="logoApp"
              alt="logoApp"
              src={require("./logo.png")}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end text-center"
        >
	<ButtonTheme/>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/buscar"}>Buscar</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/profesionales"}>Profesionales</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/contacto"}>Contacto</Link>
          </Nav.Link>
          <Nav.Link className="navBar-options mt-3 mt-lg-0">
            <Link to={"/sobrenosotros"}>Sobre nosotros</Link>
          </Nav.Link>
          <Nav.Link className="my-3 my-lg-0">
            {/* <Link to={"/login"}>
              <Button color="primary">
                <FaRegUser /> Login
              </Button>
            </Link> */}
            <Dropdown as={ButtonGroup}>
              <Button variant="primary">
                <Link to={"/login"} className="text-white">
                  <FaRegUser /> Login
                </Link>
              </Button>
              <Dropdown.Toggle split variant="primary" id="dropdown-user" />
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to={"/perfilUsuario"}>Mi cuenta</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to={"/configuracionUsuario"}>Configuraciones</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleShow}>
                  Cerrar sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Navbar.Collapse>
        <Modal className={theme} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cerrar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>¿Estas seguro que quieres cerrar sesión?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Volver
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Cerrar sesión
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Navbar>
  );
};

export default NavBar;
