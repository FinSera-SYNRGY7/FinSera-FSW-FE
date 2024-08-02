import React, { useRef } from "react";
import Layout from "./../layout/Layout";
import Button from "../components/Button/index";
import { CardHorizontal } from "./../components/Card/index";
import { useNavigate } from "react-router-dom";

function Transfer() {
  return (
    <Layout className="haveStyle">
      <div className="d-flex align-items-baseline">
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
      <div className="d-flex justify-content-end justify-content-sm-between gap-5 mb-5">
        <Button
          className={
            "d-none d-sm-block flex-grow-1 base-color text-sm-start d-flex shadow-hover"
          }
          type="button"
          aria-label="kembali ke halaman sebelumnya"
        >
          <i className="fa fa-arrow-left"></i>
          <span className="ms-20">Back</span>
        </Button>
        <Button className={"btn-outline-base-color"} type="button">
          <span role="button" aria-label="Tambah penerima baru">
            <i className="fa fa-plus me-2"></i> Tambah Penerima Baru
          </span>
        </Button>
      </div>
      <h1 className="fw-bold mb-3 pt-3">
        <span role="label" aria-label="Transfer Terakhir">
          Transfer Terakhir
        </span>
      </h1>
      <div className="row mb-5">
        <div className="col-lg-3 col-md-4 col-6">
          <CardHorizontal
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <CardHorizontal
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
          />
        </div>
        <div className="d-none d-md-block col-lg-3 col-md-4">
          <CardHorizontal
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
          />
        </div>
        <div className="d-none d-lg-block col-lg-3">
          <CardHorizontal
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
          />
        </div>
      </div>
      <h3 className="fw-bold mb-3">Daftar Tersimpan</h3>
      <CardHorizontal
        className={"shadow p-0 border-0 mb-3 outline"}
        aria-label="akun transfer tersimpan"
      />
      <CardHorizontal
        className={"shadow p-0 border-0 mb-3 outline"}
        aria-label="akun transfer tersimpan"
      />
      <div className="mb-5"></div>
    </Layout>
  );
}

export default Transfer;
