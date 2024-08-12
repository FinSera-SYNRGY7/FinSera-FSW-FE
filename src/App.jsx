
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import InfoSaldo from '@/pages/InfoSaldo';
import SetupPin from '@/pages/SetupPin';
import ConfirmSetupPin from '@/pages/ConfirmSetupPin';
import AccountMutation from '@/pages/AccountMutation';
import Login from '@/pages/Login.jsx'
import Relog from '@/pages/Relog.jsx'
import InterbankTransfer from '@/pages/InterbankTransfer';
import InterbackTfInput from '@/pages/InterbankTfInput';
import InterbankTfConfirm from '@/pages/InterbankTfConfirm';
import InterbankTfPin from '@/pages/InterbankTfPin';
import InterbankTfSuccess from './pages/InterbankTfSuccess';
import InterbankTfError from './pages/InterbankTfError';
import Homepage from '@/pages/Homepage';
import Transfer from "@/pages/Transfer";
import TransferInput from "@/pages/TransferInput";
import TransferError from "@/pages/TransferError";
import TransferSuccess from "@/pages/TransferSuccess";
import TransferValid from "@/pages/TransferValid";
import TransferPIN from "@/pages/TransferPIN";
import Account from "@/pages/Account";
import Profile from "@/pages/Profile";
import TestQrCode from '@/pages/TestQrCode';
import VirtualAccount from '@/pages/VirtualAccount';
import VAInput from '@/pages/VAInput';
import VANextInput from './pages/VANextInput';
import VAConfirm from './pages/VAConfirm';
import VAPin from './pages/VAPin';
import VASuccess from './pages/VASuccess';
import VAError from './pages/VAError';

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
      <Route path="/transfer-antar-bank" element={<InterbankTransfer />} />
      <Route path="/transfer-antar-bank/form-input" element={<InterbackTfInput />} />
      <Route path="/transfer-antar-bank/konfirmasi" element={<InterbankTfConfirm />} />
      <Route path="/transfer-antar-bank/input-pin" element={<InterbankTfPin />} />
      <Route path="/transfer-antar-bank/success" element={<InterbankTfSuccess />} />
      <Route path="/transfer-antar-bank/error" element={<InterbankTfError />} />
      <Route path="/account" element={<Account />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/test-qr-code" element={<TestQrCode />} />
      <Route path="/virtual-account" element={<VirtualAccount />} />
      <Route path="/virtual-account/form-input" element={<VAInput />} />
      <Route path="/virtual-account/next-input" element={<VANextInput />} />
      <Route path="/virtual-account/konfirmasi" element={<VAConfirm />} />
      <Route path="/virtual-account/input-pin" element={<VAPin />} />
      <Route path="/virtual-account/success" element={<VASuccess />} />
      <Route path="/virtual-account/error" element={<VAError />} />
    </Routes>
  );
}

export default App;
