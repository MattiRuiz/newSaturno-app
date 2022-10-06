import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>Endpoints</h1>
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