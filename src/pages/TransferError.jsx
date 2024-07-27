import React from "react";
import Layout from "./../layout/Layout";
import Button from "./../components/Button/index";
import Error from "../assets/img/Error.svg";

function TransferError() {
  return (
    <Layout className={"haveStyle"}>
      <h3 className="fw-bold mb-3">Transfer Sesama Bank</h3>
      <Button
        className={"col-md-12 btn-primary align-text-left"}
        style={{ textAlign: "left" }}
        type="button"
      >
        <i className="fa fa-arrow-left"></i> Back
      </Button>
      <div className="container text-center p-5">
        <img src={Error} alt="" />
        <h2 className="card-title">Oops! Sepertinya ada masalah</h2>
        <h4 className="card-subtitle mb-2 text-body-secondary">
          Pastikan perangkat anda terhubung pada jaringan. Tunggu beberapa saat
          dan coba lagi akses halaman web.
        </h4>
      </div>
    </Layout>
  );
}

export default TransferError;
