import React from "react";
import Layout from "@/layout/Layout";
import Button from "@/components/Button/index";
import Error from "@/assets/img/Error.svg";

function TransferError() {
  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
        <Button
          className="d-sm-none p-0"
          type="button"
          aria-label="kembali ke halaman sebelumnya"
        >
          <i className="fa fa-arrow-left" />
        </Button>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="Transfer Sesama Bank">
            Transfer Sesama Bank
          </span>
        </h1>
      </div>
      <Button
        className={"d-none d-sm-block col-sm-12 base-color text-sm-start mb-5"}
        type="button"
        aria-label="kembali ke halaman sebelumnya"
      >
        <i className="fa fa-arrow-left" />
        <span className="ms-20">Back</span>
      </Button>
      <div className="container text-center p-5">
        <img className="w-100" src={Error} alt="Error" />
        <span role="label" aria-label="Oops! Sepertinya ada masalah">
          <h4 className="card-title fw-bold">Oops! Sepertinya ada masalah</h4>
        </span>
        <span
          role="label"
          aria-label="Pastikan perangkat anda terhubung pada jaringan"
        >
          <h5 className="card-subtitle  mb-2 text-body-secondary">
            Pastikan perangkat anda terhubung pada jaringan. Tunggu beberapa
            saat dan coba lagi akses halaman web.
          </h5>
        </span>
      </div>
    </Layout>
  );
}

export default TransferError;
