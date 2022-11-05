import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

//import Professional from './Components/Professional';
//import Client from './Components/Client';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/AboutUs/AboutUs";
import SignUp from "./Components/SignUp/SignUp";
import Profesionales from "./Components/Profesionales/Profesionales";
import PerfilProfesional from "./Components/PerfilProfesional/PerfilProfesional";
import PerfilUsuario from "./Components/PerfilUsuario/PerfilUsuario";
import UserConfiguration from "./Components/UserConfiguration/UserConfiguration";
import RecoverPassword from "./Components/RecoverPassword/RecoverPassword";
import { useContext } from "react";
import ThemeContext from "./Contexts/ThemeContext/ThemeContext";

// 1) export NODE_OPTIONS=--openssl-legacy-provider 2) npm start

function App() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/buscar"
            element={
              <Container className="text-center py-5">
                <Search />
              </Container>
            }
          />
          <Route
            path="/profesionales"
            element={
              <Container className="text-center py-5">
                <Profesionales />
              </Container>
            }
          />
          <Route
            path="/contacto"
            element={
              <Container className="text-center py-5">
                <Contact />
              </Container>
            }
          />
          <Route
            path="/sobrenosotros"
            element={
              <Container className="text-center py-5">
                <AboutUs />
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
          <Route
            path="/signup"
            element={
              <Container className="text-center py-5">
                <SignUp />
              </Container>
            }
          />
          <Route
            path="/perfilProfesional"
            element={
              <Container className="text-center py-5">
                <PerfilProfesional />
              </Container>
            }
          />
          <Route
            path="/perfilUsuario"
            element={
              <Container className="text-center py-5">
                <PerfilUsuario />
              </Container>
            }
          />
          <Route
            path="/configuracionUsuario"
            element={
              <Container className="text-center py-5">
                <UserConfiguration />
              </Container>
            }
          />
          <Route
            path="/recoverPassword"
            element={
              <Container className="text-center py-5">
                <RecoverPassword />
              </Container>
            }
          />
          {/* <Route path='/professional' element={<Professional></Professional>}></Route>
        <Route path='/cliente' element={<Client></Client>}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
