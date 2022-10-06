import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button } from 'reactstrap';


import './App.css';
import ClientList from './Components/ClientList';

function App() {
  return (
    <div className="App">

      <p>asd</p>
      <h2>asdasd
      </h2>
      <Link to="/professional">
        <Button color='danger' type="button">
          Professional
        </Button>
      </Link>
      <Link to="/cliente">
        <button type="button">
          cliente
        </button>
      </Link>
    </div>
  );
}

export default App;