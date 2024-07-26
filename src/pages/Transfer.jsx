import React from "react";
import Layout from "./../layout/Layout";
import Button from "../components/Button/index";
import { CardHorizontal } from "./../components/Card/index";

function Transfer() {
  return (
    <Layout className="haveStyle">
      <h3 className="fw-bold mb-3">Transfer Sesama Bank</h3>
      <div className="row justify-content-between mb-5">
        <Button
          className={"col-md-7 btn-primary align-text-left"}
          style={{ textAlign: "left" }}
          type="button"
        >
          <i className="fa fa-arrow-left"></i> Back
        </Button>
        <Button className={"col-md-auto btn-outline-primary"} type="button">
          <i className="fa fa-plus me-2"></i> Tambah Penerima Baru
        </Button>
      </div>
      <h3 className="fw-bold mb-3">Transfer Terakhir</h3>
      <div className="row mb-5">
        <div className="col-md-3">
          <CardHorizontal className={"shadow p-0 border-0"}></CardHorizontal>
        </div>
        <div className="col-md-3">
          <CardHorizontal className={"shadow p-0 border-0"}></CardHorizontal>
        </div>
        <div className="col-md-3">
          <CardHorizontal className={"shadow p-0 border-0"}></CardHorizontal>
        </div>
        <div className="col-md-3">
          <CardHorizontal className={"shadow p-0 border-0"}></CardHorizontal>
        </div>
      </div>
      <h3 className="fw-bold mb-3">Daftar Tersimpan</h3>
      <CardHorizontal className={"shadow p-0 border-0 mb-3"}></CardHorizontal>
      <CardHorizontal className={"shadow p-0 border-0 mb-3"}></CardHorizontal>
    </Layout>
  );
}

export default Transfer;
