import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import InfoSaldo from './pages/InfoSaldo';
import TestComponent from './pages/TestComponent';
import MutasiRekening from './pages/MutasiRekening';
import Login from './pages/Login.jsx'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/info-saldo" element={<InfoSaldo />} />
      <Route path="/mutasi-rekening" element={<MutasiRekening />} />
      <Route path="/test" element={<TestComponent />} /> 
    </Routes>
  )
}

export default App
