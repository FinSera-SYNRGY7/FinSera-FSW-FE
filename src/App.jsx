import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import InfoSaldo from "./pages/InfoSaldo";
import TestComponent from "./pages/TestComponent";
import MutasiRekening from "./pages/MutasiRekening";
import Login from "./layout/Login.jsx";
import Transfer from "./pages/Transfer";
import TransferInput from "./pages/TransferInput";
import TransferError from "./pages/TransferError";
import TransferSuccess from "./pages/TransferSuccess";
import TransferValid from "./pages/TransferValid";
import TransferPIN from "./pages/TransferPIN";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/info-saldo" element={<InfoSaldo />} />
      <Route path="/mutasi-rekening" element={<MutasiRekening />} />
      <Route path="/test" element={<TestComponent />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/transferInput" element={<TransferInput />} />
      <Route path="/transferError" element={<TransferError />} />
      <Route path="/transferSuccess" element={<TransferSuccess />} />
      <Route path="/transferValid" element={<TransferValid />} />
      <Route path="/transferPIN" element={<TransferPIN />} />
    </Routes>
  );
}

export default App;
