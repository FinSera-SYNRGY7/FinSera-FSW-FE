import React, { useState } from "react";
import Pininput from "react-pin-input";
import { PinInput } from "@/components/PinInput";
import Layout from "@/layout/Layout";
import Button from "@/components/Button";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTransferInterBank } from "@/features/transferInterBank/useTransferInterBank";
import { useForm } from "react-hook-form";

const InterbankTfPin = () => {
  const [pinInput, setPinInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const { handleSubmit } = useForm()
  const { state } = useLocation()
  const navigate = useNavigate()
  
  const lastTransferAct = ({
    accountnum_recipient,
    name_recipient,
    bank_id,
    bank_name
  }) => {
    const getLastTransfers = localStorage.getItem('last_transfers_inter_bank') == null ? [] : JSON.parse(localStorage.getItem('last_transfers_inter_bank'))
    
    const cloneArr = [...getLastTransfers]
    
    if (getLastTransfers.findIndex((elem) => elem.accountnum_recipient == accountnum_recipient)) {
      cloneArr.push(
        {
          accountnum_recipient,
          name_recipient,
          bank_id,
          bank_name
        }
      )
    }
    
    localStorage.setItem('last_transfers_inter_bank', JSON.stringify(cloneArr))
  }
  
  const { mutate, isPending } = useTransferInterBank({
    onSuccess: (success, data) => {
      
      lastTransferAct({
        accountnum_recipient: success.data.accountnum_recipient,
        name_recipient: success.data.name_recipient,
        bank_id: state.bank_id,
        bank_name:state.bank_name
      })
      
      navigate('/transfer-antar-bank/success', {
        state:{
          transaction_date:success.data.transaction_date,
          transaction_num:success.data.transaction_num,
          accountnum_recipient:success.data.accountnum_recipient,
          name_recipient:success.data.name_recipient,
          nominal:success.data.nominal,
          admin_fee:success.data.admin_fee,
          note:success.data.note
        }
      })
    },
    onError: (error, data) => {
      setErrorMessage('Error')
    }
  })
  
  const submit = (data) => {
    const getValue = {
      accountnum_recipient: state.accountnum_recipient,
      bank_id:state.bank_id,
      nominal: state.nominal,
      note: state.note,
      pin: pinInput,
    }
    
    mutate(getValue)
  }

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
      <Link
          to="/transfer-antar-bank/konfirmasi"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          aria-label="kembali ke halaman sebelumnya"
          role="button"
        >
          <Button
            className="d-sm-none p-0"
            type="button"
            aria-label="kembali ke halaman sebelumnya"
          >
            <i className="fa fa-arrow-left" />
          </Button>
        </Link>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="Konfirmasi Transaksi">
            Konfirmasi Transaksi
          </span>
        </h1>
      </div>
      <Link
        to="/transfer-antar-bank/konfirmasi"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        aria-label="kembali ke halaman sebelumnya"
        role="button"
      >
        <Button
          className={
            "d-none d-sm-block col-sm-12 base-color text-sm-start mb-5 shadow-hover"
          }
          type="button"
          aria-label="kembali ke halaman sebelumnya"
        >
          <i className="fa fa-arrow-left" />
          <span className="ms-20">Back</span>
        </Button>
      </Link>
      {errorMessage != "" ? (
        <div
          className="alert alert-danger"
          aria-label={`Pesan Error ${errorMessage}`}
        >
          {errorMessage}{" "}
          <button className="btn-close" aria-label="tutup error" role="close">
            X
          </button>
        </div>
      ) : (
        ""
      )}
      <form method="POST" onSubmit={handleSubmit(submit)}>
        <div
          className="row m-auto align-items-center text-center mb-5"
          style={{ height: "30vh" }}
        >
          <span role="label" aria-label="Masukkan PIN">
            <h4 className="fw-bold">Masukkan PIN</h4>
          </span>
          <Pininput
            length={6}
            type="numeric"
            focus
            secret
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
            name="pin"
            ariaLabel="Pin Transaksi"
            onChange={(value) => {
              setPinInput(value);
            }}
          />
          {/* <PinInput /> */}
        </div>
        <Button
          className={"btn base-color col-12 mb-5 shadow-hover"}
          type="submit"
          aria-label="Lanjutkan"
          disabled={isPending}
        >
          <h5 className="mb-0">Lanjutkan</h5>
        </Button>
      </form>
    </Layout>
  );
};
export default InterbankTfPin;
