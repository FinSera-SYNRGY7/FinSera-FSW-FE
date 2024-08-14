import React, { useState, useEffect } from "react";
import Layout from "@/layout/Layout";
import InputForm from "@/components/Input/index";
import Button from "@/components/Button/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTransferBankCheck } from "@/features/transferBank/useTransferBankCheck";

function TransferCheck() {
  
  const navigate = useNavigate();
  const { state } = useLocation();
  
  const { register, handleSubmit, setValue } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate, isPending } = useTransferBankCheck({
    onSuccess: (success, data) => {
      navigate("/transfer-sesama-bank/form-input", {
        state: {
          accountnum_recipient: success.data.accountnum_recipient,
          name_recipient: success.data.name_recipient,
          bank_name: 'BCA'
        },
      });
    },
    onError: (error) => {
      setErrorMessage(error.message.response.data.message);
    },
  });

  const submit = (value) => {
    mutate(value);
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
            to="/transfer-sesama-bank"
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
          <span role="label" aria-label="Transfer Sesama Bank">
            Transfer Sesama Bank
          </span>
        </h1>
      </div>
      <Link
        to="/transfer-sesama-bank"
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
          className="alert alert-danger"
          aria-label={`Pesan Error ${errorMessage}`}
        >
          {errorMessage}{" "}
          <button className="close" aria-label="tutup error" role="close">
            X
          </button>
        </div>
      ) : (
        ""
      )}
      <form method="POST" onSubmit={handleSubmit(submit)}>
        <InputForm className={"my-4"}>
          <InputForm.Label to="rek" id="rek-label">
            <h4 className="fw-bold mb-3">
              <span role="input" aria-label="nomor rekening">
                Nomor Rekening
              </span>
            </h4>
          </InputForm.Label>
          <InputForm.Input
            className="py-sm-3 ps-sm-5 fz-input input"
            type="text"
            placeholder="Masukkan nomor rekening"
            aria-labelledby="rek-label"
            required
            {...register("accountnum_recipient")}
          />
        </InputForm>
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

export default TransferCheck;
