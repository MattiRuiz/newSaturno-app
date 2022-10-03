import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Professional from './Components/Professional'
import Client from './Components/Client'

import './App.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route path='/professional' element={<Professional></Professional>}></Route>
      <Route path='/client' element={<Client></Client>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
