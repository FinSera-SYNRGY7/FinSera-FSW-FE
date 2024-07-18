import React from "react";
import Layout from "./../layout/Layout";
import InputForm from "../components/Input/index";
import Button from "../components/Button/index";

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
      <div className="row"></div>

      <Button className={"btn btn-primary col-md-12"} type="button">
        Lanjutkan
      </Button>
    </Layout>
  );
}

export default Transfer;
