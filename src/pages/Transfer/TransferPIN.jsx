import React, { useState } from "react";
import Pininput from "react-pin-input";
import { PinInput } from "@/components/PinInput";
import Layout from "@/layout/Layout";
import Button from "@/components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useTransferBank } from "@/features/transferBank/useTransferBank";
import { useForm } from "react-hook-form";

function TransferPIN() {
  const { register, handleSubmit } = useForm();

  const [pinInput, setPinInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { state } = useLocation();

  const lastTransferAct = ({
    accountnum_recipient,
    name_recipient,
    bank_name,
  }) => {
    const getLastTransfers =
      localStorage.getItem("last_transfers") == null
        ? []
        : JSON.parse(localStorage.getItem("last_transfers"));

    const cloneArr = [...getLastTransfers];

    if (
      getLastTransfers.findIndex(
        (elem) => elem.accountnum_recipient == accountnum_recipient
      )
    ) {
      cloneArr.push({
        accountnum_recipient,
        name_recipient,
        bank_name,
      });
    }

    localStorage.setItem("last_transfers", JSON.stringify(cloneArr));
  };

  const { mutate, isPending } = useTransferBank({
    onSuccess: (success, data) => {
      lastTransferAct({
        accountnum_recipient: success.data.accountnum_recipient,
        name_recipient: success.data.name_recipient,
        bank_name: "BCA",
      });

      navigate("/transfer-sesama-bank/success", {
        state: {
          transaction_date: success.data.transaction_date,
          transaction_num: success.data.transaction_num,
          accountnum_recipient: success.data.accountnum_recipient,
          name_recipient: success.data.name_recipient,
          nominal: success.data.nominal,
          note: success.data.note,
        },
      });
    },
    onError: (error, data) => {
      console.log("cek error", error)
      setErrorMessage(error.message.response.data.message);
    },
  });

  const submit = (value) => {
    
    if(pinInput == '') {
      setErrorMessage('Pin Kosong!')
    } else if(pinInput.toString().length < 6) {
      setErrorMessage('Pin Kurang Dari 6 digit')
    } else {
      const data = {
        accountnum_recipient: state.accountnum_recipient,
        nominal: state.nominal,
        note: state.note,
        pin: pinInput,
      };
  
      mutate(data);
    }
    
  };

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
          onClick={() => {
            navigate("/transfer-sesama-bank/konfirmasi", {
              state: {
                accountnum_recipient: state.accountnum_recipient,
                name_recipient: state.name_recipient,
                bank_name: state.bank_name,
                nominal: state.nominal,
                note: state.note,
              },
            });
          }}
        >
          <i className="fa fa-arrow-left" />
        </Button>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="Konfirmasi Transaksi">
            Konfirmasi Transaksi
          </span>
        </h1>
      </div>
      <Button
        className={
          "d-none d-sm-block col-sm-12 base-color text-sm-start mb-5 shadow-hover"
        }
        type="button"
        aria-label="kembali ke halaman sebelumnya"
        onClick={() => {
          navigate("/transfer-sesama-bank/konfirmasi", {
            state: {
              accountnum_recipient: state.accountnum_recipient,
              name_recipient: state.name_recipient,
              bank_name: state.bank_name,
              nominal: state.nominal,
              note: state.note,
            },
          });
        }}
      >
        <i className="fa fa-arrow-left" />
        <span className="ms-20">Back</span>
      </Button>
      {errorMessage != "" ? (
        <div
          className="alert alert-danger alert-dismissible"
          aria-label={`Pesan Error ${errorMessage}`}
          role="alert"
        >
          {errorMessage}{" "}
          <button className="btn-close" aria-label="tutup error" role="close" onClick={() => {
            setErrorMessage('')
          }} />
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
            inputMode="numeric"
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
}

export default TransferPIN;
