import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Professional from './Components/Professional';
import Client from './Components/Client';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/buscar" element={<p>Esta es la pagina de Buscar</p>}/>
      <Route path="/profesionales" element={<p>Esta es la pagina de Profesionales</p>}/>
      <Route path="/contacto" element={<p>Esta es la pagina de Contacto</p>}/>
      <Route path="/sobrenosotros" element={<p>Esta es la pagina de Sobre Nosotros</p>}/>
      <Route path="/login" element={<p>Esta es la pagina de Login</p>}/>

      {/* <Route path='/professional' element={<Professional></Professional>}></Route>
      <Route path='/cliente' element={<Client></Client>}></Route> */}
    </Routes>
    <Footer/>
  </BrowserRouter>
);