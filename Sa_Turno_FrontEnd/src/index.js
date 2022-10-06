import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Professional from './Components/Professional'
import Client from './Components/Client'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/professional' element={<Professional></Professional>}></Route>
      <Route path='/cliente' element={<Client></Client>}></Route>
    </Routes>
  </BrowserRouter>
);