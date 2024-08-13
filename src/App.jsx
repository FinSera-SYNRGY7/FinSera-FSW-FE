
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import InfoSaldo from '@/pages/InfoSaldo';
import SetupPin from '@/pages/SetupPin';
import ConfirmSetupPin from '@/pages/ConfirmSetupPin';
import AccountMutation from '@/pages/AccountMutation';
import Login from '@/pages/Login.jsx'
import Relog from '@/pages/Relog.jsx'

import InterbankTransfer from '@/pages/TransferInterBank/Main';
import InterbankTfCheck from '@/pages/TransferInterBank/InterbankTfCheck';
import InterbackTfInput from '@/pages/TransferInterBank/InterbankTfInput';
import InterbankTfConfirm from '@/pages/TransferInterBank/InterbankTfConfirm';
import InterbankTfPin from '@/pages/TransferInterBank/InterbankTfPin';
import InterbankTfSuccess from './pages/TransferInterBank/InterbankTfSuccess';
import InterbankTfError from './pages/TransferInterBank/InterbankTfError';

import Homepage from '@/pages/Homepage';

import Transfer from "@/pages/Transfer/Main";
import TransferCheck from '@/pages/Transfer/TransferCheck'
import TransferInput from "@/pages/Transfer/TransferInput";
import TransferError from "@/pages/Transfer/TransferError";
import TransferSuccess from "@/pages/Transfer/TransferSuccess";
import TransferValid from "@/pages/Transfer/TransferValid";
import TransferPIN from "@/pages/Transfer/TransferPIN";

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
      <Route path="/transfer-sesama-bank">
        <Route index element={<Transfer />} />
        <Route path="check" element={<TransferCheck />} />
        <Route path="form-input" element={<TransferInput />} />
        <Route path="konfirmasi" element={<TransferValid />} />
        <Route path="input-pin" element={<TransferPIN />} />
        <Route path="success" element={<TransferSuccess />} />
        <Route path="error" element={<TransferError />} />
      </Route>
      <Route path="/transfer-antar-bank">
        <Route index element={<InterbankTransfer />} />
        <Route path="check" element={<InterbankTfCheck />} />
        <Route path="form-input" element={<InterbackTfInput />} />
        <Route path="konfirmasi" element={<InterbankTfConfirm />} />
        <Route path="input-pin" element={<InterbankTfPin />} />
        <Route path="success" element={<InterbankTfSuccess />} />
        <Route path="error" element={<InterbankTfError />} />
      </Route>
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
