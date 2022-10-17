import React from "react";

import { Link } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./NavBar.css";

const NavBar = () => {
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
            <Link to={"/login"}>
              <Button color="primary">
                <FaRegUser /> Login
              </Button>
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
