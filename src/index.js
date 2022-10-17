import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Professional from './Components/Professional';
//import Client from './Components/Client';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import SignUp from "./SignUp/SignUp";

import Container from "react-bootstrap/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/buscar"
        element={
          <Container className="text-center py-5">
            <p>Esta es la pagina de Buscar</p>
          </Container>
        }
      />
      <Route
        path="/profesionales"
        element={
          <Container className="text-center py-5">
            <p>Esta es la pagina de Profesionales</p>
          </Container>
        }
      />
      <Route
        path="/contacto"
        element={
          <Container className="text-center py-5">
            <p>Esta es la pagina de Contacto</p>
          </Container>
        }
      />
      <Route
        path="/sobrenosotros"
        element={
          <Container className="text-center py-5">
            <p>Esta es la pagina de Sobre Nosotros</p>
          </Container>
        }
      />
      <Route
        path="/login"
        element={
          <Container className="text-center py-5">
            <Login />
          </Container>
        }
      />
      <Route path="/signup" element={<SignUp />} />

      {/* <Route path='/professional' element={<Professional></Professional>}></Route>
      <Route path='/cliente' element={<Client></Client>}></Route> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);
