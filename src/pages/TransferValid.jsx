import React from "react";
import Layout from "./../layout/Layout";
import { CardHorizontal, CardTransfer } from "./../components/Card/index";
import Button from "./../components/Button/index";

function TransferValid() {
  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline">
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
      <CardHorizontal
        className={"p-0 border-0 mb-3"}
        aria-label="akun tujuan transfer"
      />
      <span role="label" aria-label="Nominal Transfer : Rp 100.000">
        <div className="row justify-content-between mb-3 mb-sm-5">
          <h5 className="col-auto">Nominal Transfer</h5>
          <h5 className="fw-bold col-auto">Rp 100.000</h5>
        </div>
      </span>
      <span role="label" aria-label="Jenis Transfer : Transfer Sesama Bank">
        <div className="row justify-content-between mb-3 mb-sm-5">
          <h5 className="col-auto">Jenis Transfer</h5>
          <h5 className="fw-bold col-auto">Transfer Sesama Bank</h5>
        </div>
      </span>
      <span role="label" aria-label="Catatan : Bayar Utang">
        <div className="row justify-content-between mb-3 mb-sm-5">
          <h5 className="col-auto">Catatan</h5>
          <h5 className="fw-bold col-auto">Bayar Utang</h5>
        </div>
      </span>
      <h4 className="fw-bold mb-3 pt-3 text-start">
        <span role="label" aria-label="Sumber rekening">
          Sumber rekening
        </span>
      </h4>
      <CardTransfer
        className={"shadow p-0 border-0 mb-5"}
        first="col-1"
        second="col-2"
      />
      <Button
        className={"btn base-color col-12 mb-5 shadow-hover"}
        type="button"
        aria-label="Lanjutkan"
      >
        <h5 className="mb-0">Lanjutkan</h5>
      </Button>
    </Layout>
  );
}

export default TransferValid;
