import React, { useState } from "react";
import Pininput from "react-pin-input";
import { PinInput } from "@/components/PinInput";
import Layout from "@/layout/Layout";
import Button from "@/components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useTransferBank } from "@/features/transferBank/useTransferBank";
import { useForm } from "react-hook-form";

const InterbankTfPin = () => {
  const [pinInput, setPinInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline tp-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
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
      >
        <i className="fa fa-arrow-left" />
        <span className="ms-20">Back</span>
      </Button>
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
      {/* <form method="POST" onSubmit={handleSubmit(submit)}> */}
      <form method="POST">
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
          // disabled={isPending}
        >
          <h5 className="mb-0">Lanjutkan</h5>
        </Button>
      </form>
    </Layout>
  );
};
export default InterbankTfPin;
