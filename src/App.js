import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Routers from './routes';


function App() {
  return ( 
    <BrowserRouter>
      <Routers />
    </ BrowserRouter>

  );
}

export default App;
