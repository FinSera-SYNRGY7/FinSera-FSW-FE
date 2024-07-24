import React, { useState } from "react";
import Pininput from "react-pin-input";
import Layout from "./../layout/Layout";
import Button from "../components/Button";

function TransferPIN() {
  return (
    <Layout>
      <h3 className="fw-bold mb-3">Konfirmasi Transaksi</h3>
      <Button
        className={"col-md-12 btn-primary align-text-left mb-5"}
        style={{ textAlign: "left" }}
        type="button"
      >
        <i className="fa fa-arrow-left"></i> Back
      </Button>

      <div
        className="row m-auto align-items-center text-center mb-5"
        style={{ height: "30vh" }}
      >
        <h2 className="fw-bold">Masukkan PIN</h2>
        <Pininput
          length={6}
          type="numeric"
          focus
          secret
          inputStyle={{
            borderRadius: "100%",
            margin: "1rem",
            border: "none",
            backgroundColor: "#B3B3B3",
          }}
        />
      </div>
      <Button className={"btn btn-primary col-md-12"} type="button">
        Lanjutkan
      </Button>
    </Layout>
  );
}

export default TransferPIN;
