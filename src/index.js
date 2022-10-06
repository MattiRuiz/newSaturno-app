import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import App from './App';
import Professional from './Components/Professional'
import Client from './Components/Client'

import "./index.css"


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