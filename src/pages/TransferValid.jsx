import React from "react";
import Layout from "./../layout/Layout";
import { CardHorizontal, CardTransfer } from "./../components/Card/index";
import Button from "./../components/Button/index";

function TransferValid() {
  return (
    <Layout className={"haveStyle"}>
      <h3 className="fw-bold mb-3">Konfirmasi Transaksi</h3>
      <Button
        className={"col-md-12 btn-primary align-text-left mb-5"}
        style={{ textAlign: "left" }}
        type="button"
      >
        <i className="fa fa-arrow-left"></i> Back
      </Button>
      <CardHorizontal
        className={"p-0 border-0 mb-3"}
        first="col-md-1"
        second="col-md-2"
      />
      <div className="row justify-content-between mb-5">
        <h4 className="col-auto">Nominal Transfer</h4>
        <h4 className="fw-bold col-auto">Rp 100.000</h4>
      </div>
      <div className="row justify-content-between mb-5">
        <h4 className="col-auto">Jenis Transfer</h4>
        <h4 className="fw-bold col-auto">Transfer Sesama Bank</h4>
      </div>
      <div className="row justify-content-between mb-5">
        <h4 className="col-auto">Catatan</h4>
        <h4 className="fw-bold col-auto">Bayar Utang</h4>
      </div>
      <CardTransfer
        className={"shadow p-0 border-0 mb-3"}
        first="col-md-1"
        second="col-md-2"
      />
      <Button className={"btn btn-primary col-md-12"} type="button">
        Lanjutkan
      </Button>
    </Layout>
  );
}

export default TransferValid;
