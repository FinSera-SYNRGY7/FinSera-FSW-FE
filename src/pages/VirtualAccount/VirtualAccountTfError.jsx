import React from "react";
import Layout from "@/layout/Layout";
import Button from "@/components/Button/index";
import Error from "@/assets/img/Error.svg";
import { Link } from "react-router-dom";

const VirtualAccountTfError = () => {
  return (
    <Layout className={"haveStyle"}>
      <div className="d-flex align-items-baseline pt-5">
        <Link
          to="/home"
          className="m-0"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          role="button"
          aria-label="kembali ke halaman home"
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
          <span role="label" aria-label="Transfer Antar Bank">
            Transfer Antar Bank
          </span>
        </h1>
      </div>
      <Link
        to="/home"
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
};

export default VirtualAccountTfError;
