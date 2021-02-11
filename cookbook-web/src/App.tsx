import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Catalog } from './pages/catalog';

function App() {

  console.log(process.env.REACT_APP_SERVICES_URI);
  return (
    <div className="App">
      <Catalog />
    </div>
  );
}

export default App;
