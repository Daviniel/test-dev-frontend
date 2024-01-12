import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';
import Wallet from './pages/Wallet/index';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route path='/carteira' element={ <Wallet /> }/>
    </Routes>
  );
}

export default App;