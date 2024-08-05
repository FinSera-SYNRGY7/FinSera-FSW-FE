import React, { useRef } from "react";
import Layout from "./../layout/Layout";
import Button from "../components/Button/index";
import { CardHorizontal } from "./../components/Card/index";
import { useNavigate, Link } from "react-router-dom";

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
      <div className="d-flex justify-content-end justify-content-sm-between gap-5 mb-sm-4">
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
        <Link to="/transfer-sesama-bank/form-input" className="m-0" style={{
          textDecoration: 'none',
          color:'inherit'
        }}
        role="button"
        aria-label="Tambah penerima baru">
          <Button
            className={"d-flex align-items-center btn-outline-base-color"}
            type="button"
            role="button"
            aria-label="Tambah penerima baru"
          >
            <i className="fa fa-plus me-2"></i>
            {/* <p className="m-0">Tambah Penerima Baru</p> */}
            Tambah Penerima Baru
          </Button>
        </Link>
      </div>
      <h4 className="fw-bold mb-3 pt-3">
        <span role="label" aria-label="Transfer Terakhir">
          Transfer Terakhir
        </span>
      </h4>
      <div className="d-flex flex-wrap gap-2 gap-sm-3 mb-5">
        <div className="flex-fill">
          <CardHorizontal
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
            data={{
              name_recipient:'Kusuma Dewi',
              bank_name:'Bank BCA'
            }}
          />
        </div>
        <div className="flex-fill">
          <CardHorizontal
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
            data={{
              name_recipient:'Kusuma Dewi',
              bank_name:'Bank BCA'
            }}
          />
        </div>
        <div className="d-none d-md-block flex-fill">
          <CardHorizontal
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
            data={{
              name_recipient:'Kusuma Dewi',
              bank_name:'Bank BCA'
            }}
          />
        </div>
        <div className="d-none d-lg-block flex-fill">
          <CardHorizontal
            className={"shadow p-0 border-0 outline"}
            aria-label="akun transfer terakhir"
            data={{
              name_recipient:'Kusuma Dewi',
              bank_name:'Bank BCA'
            }}
          />
        </div>
      </div>
      <h4 className="fw-bold mb-3">Daftar Tersimpan</h4>
      <CardHorizontal
        className={"shadow p-0 border-0 mb-3 outline"}
        aria-label="akun transfer tersimpan"
        data={{
          name_recipient:'Kusuma Dewi',
          bank_name:'Bank BCA'
        }}
      />
      <CardHorizontal
        className={"shadow p-0 border-0 mb-3 outline"}
        aria-label="akun transfer tersimpan"
        data={{
          name_recipient:'Kusuma Dewi',
          bank_name:'Bank BCA'
        }}
      />
      <div className="mb-5"></div>
    </Layout>
  );
}

export default Transfer;
