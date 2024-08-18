import React, { useState } from "react";
import Pininput from "react-pin-input";
import { PinInput } from "@/components/PinInput";
import Layout from "@/layout/Layout";
import Button from "@/components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEWallet } from "@/features/eWallet/useEWallet";
import { useForm } from "react-hook-form";

function EwalletPIN() {
  const { register, handleSubmit } = useForm();

  const [pinInput, setPinInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { state } = useLocation();
  
  console.log(state)

  const lastTransferAct = ({
    ewallet_name,
    ewallet_account_name,
    ewallet_account,
    ewallet_id,
  }) => {
    const getLastTransfers =
      localStorage.getItem("last_transfer_e-wallets") == null
        ? []
        : JSON.parse(localStorage.getItem("last_transfer_e-wallets"));

    const cloneArr = [...getLastTransfers];

    if (
      getLastTransfers.findIndex(
        (elem) => elem.ewallet_account == ewallet_account
      )
    ) {
      cloneArr.push({
        ewallet_name,
        ewallet_account_name,
        ewallet_account,
        ewallet_id,
      });
    }

    localStorage.setItem("last_transfer_e-wallets", JSON.stringify(cloneArr));
  };

  const { mutate, isPending } = useEWallet({
    onSuccess: (success, data) => {
      lastTransferAct({
        ewallet_name: state.ewallet_name,
        ewallet_account_name: state.ewallet_account_name,
        ewallet_account: state.ewallet_account,
        ewallet_id: state.ewallet_id,
      });

      navigate("/e-wallet/success", {
        state: {
          transaction_date: success.data.transactionDate,
          transaction_num: success.data.transactionNum,
          accountnum_recipient: success.data.ewalletAccount,
          name_recipient: success.data.ewalletAccountName,
          ewallet_name: success.data.ewalletName, 
          nominal: success.data.nominal,
          note: success.data.note,
        },
      });
    },
    onError: (error, data) => {
      setErrorMessage(error.message.response.data.message);
    },
  });

  const submit = (value) => {
    const data = {
      ewalletAccount: state.ewallet_account,
      ewalletId: state.ewallet_id,
      nominal: state.nominal,
      note: state.note,
      pin: pinInput,
    };

    mutate(data);
  };

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
          onClick={() => {
            navigate("/e-wallet/konfirmasi", {
              state: {
                ewallet_name: state.ewallet_name,
                ewallet_account_name: state.ewallet_account_name,
                ewallet_account: state.ewallet_account,
                ewallet_id: state.ewallet_id,
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
          navigate("/e-wallet/konfirmasi", {
            state: {
              ewallet_name: state.ewallet_name,
              ewallet_account_name: state.ewallet_account_name,
              ewallet_account: state.ewallet_account,
              ewallet_id: state.ewallet_id,
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
          >
            {errorMessage}{" "}
          <button className="btn-close" aria-label="tutup error" role="close" onClick={() => {
            setErrorMessage('')
          }}/>
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
}

export default EwalletPIN;
