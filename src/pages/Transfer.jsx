import React from "react";
import Layout from "./../layout/Layout";
import Button from "../components/Button/index";
import Card from "./../components/Card/index";

function Transfer() {
  return (
    <Layout>
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
          <Card className={"shadow p-0 border-0"}></Card>
        </div>
        <div className="col-md-3">
          <Card className={"shadow p-0 border-0"}></Card>
        </div>
        <div className="col-md-3">
          <Card className={"shadow p-0 border-0"}></Card>
        </div>
        <div className="col-md-3">
          <Card className={"shadow p-0 border-0"}></Card>
        </div>
      </div>
      <h3 className="fw-bold mb-3">Daftar Tersimpan</h3>
      <Card className={"shadow p-0 border-0 mb-3"}></Card>
      <Card className={"shadow p-0 border-0 mb-3"}></Card>
    </Layout>
  );
}

export default Transfer;
