import React, { useState, useEffect } from "react";
import Layout from "@/layout/Layout";
import InputForm from "@/components/Input/index";
import Button from "@/components/Button/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEWalletCheck } from "@/features/eWallet/useEWalletCheck";

function EwalletCheck() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { register, handleSubmit, setValue } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate, isPending } = useEWalletCheck({
    onSuccess: (success, data) => {
      navigate("/e-wallet/form-input", {
        state: {
          ewallet_name: success.data.ewalletName,
          ewallet_account_id: success.data.ewalletAccountId,
          ewallet_account: success.data.ewalletAccount,
          ewallet_account_name: success.data.ewalletAccountName
        },
      });
    },
    onError: (error, data) => {
      console.log(data)
      setErrorMessage(error.message.response.data.message);
    },
  });

  const submit = (value) => {
    const data = {
      ...value,
      ewalletId:state.ewalletId
    }
    mutate(data);
  };

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
        >
          <Link
            to="/e-wallet"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            aria-label="kembali ke halaman sebelumnya"
            role="button"
          >
            <i className="fa fa-arrow-left" />
          </Link>
        </Button>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="E-wallet">
            E-wallet
          </span>
        </h1>
      </div>
      <Link
        to="/e-wallet"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        aria-label="kembali ke halaman sebelumnya"
        role="button"
      >
        <Button
          className={
            "d-none d-sm-block col-sm-12 base-color shadow-hover text-sm-start mb-5"
          }
          type="button"
          aria-label="kembali ke halaman sebelumnya"
          onClick={() => console.log("sip")}
        >
          <i className="fa fa-arrow-left" />
          <span className="ms-20">Back</span>
        </Button>
      </Link>
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
        <InputForm className={"my-4"}>
          <InputForm.Label to="rek" id="rek-label">
            <h4 className="fw-bold mb-3">
              <span role="input" aria-label="nomor Telfon">
                Nomor Telfon
              </span>
            </h4>
          </InputForm.Label>
          <InputForm.Input
            className="py-sm-3 ps-sm-5 fz-input input"
            type="text"
            placeholder="Masukkan nomor Telfon"
            aria-labelledby="rek-label"
            required
            {...register("ewalletAccount")}
          />
        </InputForm>
        <div style={{marginBottom:"12rem"}}></div>
        <Button
          className={"btn base-color col-12 mb-5 shadow-hover"}
          aria-label="Lanjutkan"
          type="submit"
          disabled={isPending}
        >
          <h5 className="mb-0">Lanjutkan</h5>
        </Button>
      </form>
    </Layout>
  );
}

export default EwalletCheck;
