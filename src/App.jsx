
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import InfoSaldo from '@/pages/InfoSaldo';
import TestComponent from '@/pages/TestComponent';
import AccountMutation from '@/pages/AccountMutation';
import Login from '@/pages/Login.jsx'
import Relog from '@/pages/Relog.jsx'
import TransferAntarBank from './pages/TransferAntarBank';
import Homepage from '@/pages/Homepage';
import Transfer from "./pages/Transfer";
import TransferInput from "./pages/TransferInput";
import TransferError from "./pages/TransferError";
import TransferSuccess from "./pages/TransferSuccess";
import TransferValid from "./pages/TransferValid";
import TransferPIN from "./pages/TransferPIN";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/relog" element={<Relog />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/info-saldo" element={<InfoSaldo />} />
      <Route path="/mutasi-rekening" element={<AccountMutation />} />
      <Route path="/test" element={<TestComponent />} />
      <Route path="/transfer-sesama-bank" element={<Transfer />} />
      <Route path="/transferInput" element={<TransferInput />} />
      <Route path="/transferError" element={<TransferError />} />
      <Route path="/transferSuccess" element={<TransferSuccess />} />
      <Route path="/transferValid" element={<TransferValid />} />
      <Route path="/transferPIN" element={<TransferPIN />} />
      <Route path="/transfer-antar-bank" element={<TransferAntarBank />} />
    </Routes>
  );
}

export default App;
