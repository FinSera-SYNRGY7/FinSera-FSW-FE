import React, { useState } from "react";
import Pininput from "react-pin-input";
import { PinInput } from "@/components/PinInput";
import Layout from "@/layout/Layout";
import Button from "@/components/Button";
import styles from "@/assets/css/VAPin.module.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTransferBank } from "@/features/transferBank/useTransferBank";
import { useForm } from "react-hook-form";


const VAPin = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handlePinSubmit = (pin) => {
    console.log("PIN submitted:", pin);
  };  

  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
      <Link
          to="/virtual-account/konfirmasi"
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
        to="/virtual-account/konfirmasi"
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
      {/* <form method="POST" onSubmit={handleSubmit(submit)}> */}
      <form method="POST">
        <div
          className={`row m-auto align-items-center text-center ${styles.containerPin}`}
        >
          <span role="label" aria-label="Masukkan PIN">
            <h4 className="fw-bold">Masukkan PIN</h4>
          </span>
          <PinInput
            className={styles.pinInput}
            onComplete={handlePinSubmit}
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

export default VAPin;