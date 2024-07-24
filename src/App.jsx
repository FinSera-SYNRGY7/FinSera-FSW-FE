import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import InfoSaldo from '@/pages/InfoSaldo';
import TestComponent from '@/pages/TestComponent';
import MutasiRekening from '@/pages/MutasiRekening';
import Login from '@/pages/Login.jsx'
import Relog from '@/pages/Relog.jsx'
import TransferAntarBank from './pages/TransferAntarBank';
import Homepage from '@/pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/relog" element={<Relog />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/info-saldo" element={<InfoSaldo />} />
      <Route path="/mutasi-rekening" element={<MutasiRekening />} />
      <Route path="/transfer-antar-bank" element={<TransferAntarBank />} />
      <Route path="/test" element={<TestComponent />} /> 
    </Routes>
  )
}

export default App
