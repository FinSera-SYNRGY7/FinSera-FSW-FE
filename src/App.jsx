import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import SetupPin from "@/pages/Auth/SetupPin";
import ConfirmSetupPin from "@/pages/Auth/ConfirmSetupPin";
import Login from "@/pages/Auth/Login.jsx";
import Relog from "@/pages/Auth/Relog.jsx";

import InfoSaldo from "@/pages/InfoAmount/Main";

import AccountMutation from "@/pages/MutationBank/Main";

import InterbankTransfer from "@/pages/TransferInterBank/Main";
import InterbankTfCheck from "@/pages/TransferInterBank/InterbankTfCheck";
import InterbackTfInput from "@/pages/TransferInterBank/InterbankTfInput";
import InterbankTfConfirm from "@/pages/TransferInterBank/InterbankTfConfirm";
import InterbankTfPin from "@/pages/TransferInterBank/InterbankTfPin";
import InterbankTfSuccess from "./pages/TransferInterBank/InterbankTfSuccess";
import InterbankTfError from "./pages/TransferInterBank/InterbankTfError";

import Home from "@/pages/Home";

import Transfer from "@/pages/Transfer/Main";
import TransferCheck from "@/pages/Transfer/TransferCheck";
import TransferInput from "@/pages/Transfer/TransferInput";
import TransferError from "@/pages/Transfer/TransferError";
import TransferSuccess from "@/pages/Transfer/TransferSuccess";
import TransferValid from "@/pages/Transfer/TransferValid";
import TransferPIN from "@/pages/Transfer/TransferPIN";

import Account from "@/pages/ProfileAccount/Account";
import Profile from "@/pages/ProfileAccount/Profile";
import ChangePin from "@/pages/ProfileAccount/ChangePin";
import QRIS from '@/pages/QRIS/Main';
import Notification from '@/pages/Notification/Main';

import VirtualAccountTransfer from "@/pages/VirtualAccount/Main";
import VirtualAccountTfCheck from "@/pages/VirtualAccount/VirtualAccountTfCheck";
import VirtualAccountTfInput from "@/pages/VirtualAccount/VirtualAccountTfInput";
import VirtualAccountTfConfirm from "@/pages/VirtualAccount/VirtualAccountTfConfirm";
import VirtualAccountTfPin from "@/pages/VirtualAccount/VirtualAccountTfPin";
import VirtualAccountTfSuccess from "@/pages/VirtualAccount/VirtualAccountTfSuccess";
import VirtualAccountTfError from "@/pages/VirtualAccount/VirtualAccountTfError";

import Ewallet from "@/pages/Ewallet/Main";
import EwalletError from "@/pages/Ewallet/EwalletError";
import EwalletSuccess from "@/pages/Ewallet/EwalletSuccess";
import EwalletCheck from "@/pages/Ewallet/EwalletCheck";
import EwalletInput from "@/pages/Ewallet/EwalletInput";
import EwalletConfirm from "@/pages/Ewallet/EwalletConfirm";
import EwalletPIN from "@/pages/Ewallet/EwalletPIN";
import EwalletChoose from "@/pages/Ewallet/EwalletChoose";

import { useEffect } from "react";
import nProgress from "nprogress";

function App() {
  const location = useLocation();

  useEffect(() => {
    nProgress.start();
    nProgress.done();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/relog" element={<Relog />} />
      <Route path="/setup-pin" element={<SetupPin />} />
      <Route path="/setup-pin/confirm" element={<ConfirmSetupPin />} />
      <Route path="/home" element={<Home />} />
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
      <Route path="/transfer-virtual-account">
        <Route index element={<VirtualAccountTransfer />} />
        <Route path="check" element={<VirtualAccountTfCheck />} />
        <Route path="form-input" element={<VirtualAccountTfInput />} />
        <Route path="konfirmasi" element={<VirtualAccountTfConfirm />} />
        <Route path="input-pin" element={<VirtualAccountTfPin />} />
        <Route path="success" element={<VirtualAccountTfSuccess />} />
        <Route path="error" element={<VirtualAccountTfError />} />
      </Route>
      <Route path="/e-wallet">
        <Route index element={<Ewallet />} />
        <Route path="pilih" element={<EwalletChoose />} />
        <Route path="check" element={<EwalletCheck />} />
        <Route path="form-input" element={<EwalletInput />} />
        <Route path="konfirmasi" element={<EwalletConfirm />} />
        <Route path="input-pin" element={<EwalletPIN />} />
        <Route path="success" element={<EwalletSuccess />} />
        <Route path="error" element={<EwalletError />} />
      </Route>
      <Route path="/qris" element={<QRIS />} />
      <Route path="/account" element={<Account />} />
      <Route path="/ubah-pin" element={<ChangePin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
}

export default App;
