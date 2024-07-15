import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import InfoSaldo from './pages/InfoSaldo';

function App() {
  return (
    <Routes>
      <Route path="/info-saldo" element={<InfoSaldo />} />
    </Routes>
  )
}

export default App
