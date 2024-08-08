
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import InfoSaldo from '@/pages/InfoSaldo';
import SetupPin from '@/pages/SetupPin';
import ConfirmSetupPin from '@/pages/ConfirmSetupPin';
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
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import TestQrCode from './pages/TestQrCode';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/relog" element={<Relog />} />
      <Route path="/setup-pin" element={<SetupPin />} />
      <Route path="/setup-pin/confirm" element={<ConfirmSetupPin />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/info-saldo" element={<InfoSaldo />} />
      <Route path="/mutasi-rekening" element={<AccountMutation />} />
      <Route path="/transfer-sesama-bank" element={<Transfer />} />
      <Route path="/transfer-sesama-bank/form-input" element={<TransferInput />} />
      <Route path="/transfer-sesama-bank/konfirmasi" element={<TransferValid />} />
      <Route path="/transfer-sesama-bank/input-pin" element={<TransferPIN />} />
      <Route path="/transfer-sesama-bank/success" element={<TransferSuccess />} />
      <Route path="/transfer-sesama-bank/error" element={<TransferError />} />
      <Route path="/transfer-antar-bank" element={<TransferAntarBank />} />
      <Route path="/account" element={<Account />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/test-qr-code" element={<TestQrCode />} />
    </Routes>
  );
}

export default App;
