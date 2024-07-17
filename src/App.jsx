import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import InfoSaldo from './pages/InfoSaldo';
import TestComponent from './pages/TestComponent';
import MutasiRekening from './pages/MutasiRekening';

function App() {
  return (
    <Routes>
      <Route path="/info-saldo" element={<InfoSaldo />} />
      <Route path="/mutasi-rekening" element={<MutasiRekening />} />
      {/* For Tesing Component */}
      <Route path="/test" element={<TestComponent />} /> 
      
    </Routes>
  )
}

export default App
