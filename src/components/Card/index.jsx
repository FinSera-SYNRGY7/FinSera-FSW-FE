import React from "react";
import Success from "../../assets/img/Success.svg";
import Button from "./../Button/index";
import logobcablue from "../../assets/img/logobcablue.png";
import "./style.css";

export function CardVertical({ className, children, ...rest }) {
  return (
    <>
      <div className="d-flex justify-content-end mb-3 mb-sm-5">
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
      <div className={`card text-center ${className}`} {...rest}>
        <img
          className="m-auto my-3 my-md-5 w-25"
          src={Success}
          alt="Transfer Success"
        />
        <span role="label" aria-label="Transaksi Berhasil">
          <h1 className="fw-bold">Transaksi Berhasil</h1>
        </span>
        <div className="card-body">
          <span role="label" aria-label="Tanggal : 21 June 2024 | 12:45 WIB">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Tanggal</h5>
              <h5 className="fw-bold col-auto">21 Juni 2024 | 12:45 WIB</h5>
            </div>
          </span>
          <span role="label" aria-label="Nomor Transaksi : 12356676787878">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Nomor Transaksi</h5>
              <h5 className="fw-bold col-auto">12356676787878</h5>
            </div>
          </span>
          <hr />
          <span role="label" aria-label="Penerima : Putra Ardiansyah">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Penerima</h5>
              <h5 className="fw-bold col-auto">Putra Ardiansyah</h5>
            </div>
          </span>
          <span
            role="label"
            aria-label="Jenis Transaksi : Transfer Sesama Bank"
          >
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Jenis Transaksi</h5>
              <h5 className="fw-bold col-auto">Transfer Sesama Bank</h5>
            </div>
          </span>
          <span role="label" aria-label="Jumlah : Rp 2.000.000">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Jumlah</h5>
              <h5 className="fw-bold col-auto">Rp 2.000.000</h5>
            </div>
          </span>
          <span role="label" aria-label="Catatan : Bayar Utang">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Catatan</h5>
              <h5 className="fw-bold col-auto">Bayar Utang</h5>
            </div>
          </span>
          <div className="row justify-content-evenly mb-4 mb-sm-5">
            <Button
              className={"col-5 col-sm-4 base-color shadow-hover"}
              type="button"
              aria-label="Download"
            >
              <i class="fa fa-download me-2"></i> Download
            </Button>
            <Button
              className={"col-5 col-sm-4 base-color shadow-hover"}
              type="button"
              aria-label="Bagikan"
            >
              <i className="fa fa-share-alt  me-2"></i> Bagikan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export function CardHorizontal({ className, first, second, data, ...rest }) {
  return (
    <div className={`card ${className}`} {...rest}>
      <div className="d-flex">
        <div
          className={`${first} mx-sm-3 ms-1 d-flex align-items-center justify-content-center`}
        >
          <div className="circle">
            <p className="text">P</p>
          </div>
        </div>
        <div className={`${second} p-0`}>
          <div className="card-body px-0">
            <span role="label" aria-label="nama : Putri Kusuma">
              <h5 className="card-title">Putri Kusuma</h5>
            </span>
            <span role="label" aria-label="akun Bank BCA">
              <h6 class="card-subtitle text-body-secondary">Bank BCA</h6>
            </span>
            <span
              className="h-c"
              role="label"
              aria-label="update terakhir 5 hari lalu"
            >
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardTransfer({ className, first, second }) {
  return (
    <div className={`card ${className}`}>
      <div className="d-flex">
        <div
          className={`d-flex align-items-center justify-content-center me-1 me-sm-3`}
          style={{
            borderRadius: "5px 100px 100px 5px",
            backgroundColor: "#E4EDFFE5",
          }}
        >
          <img className="side-logo" src={logobcablue} alt="Bank BCA" />
        </div>
        <div className={`flex-grow-1 d-flex align-items-center me-0`}>
          <div className="card-body">
            <span role="label" aria-label="nomor rekening : 1234 567 897 890">
              <h5 className="fw-bold">1234 567 897 890</h5>
            </span>
            <span role="label" aria-label="nama : RAMADHAN ADI">
              <h5 class="card-subtitle text-body-secondary">RAMADHAN ADI</h5>
            </span>
            <span role="label" aria-label="Saldo : Rp 10.890.500,00">
              <h4 className="fw-bold text-primary">Rp 10.890.500,00</h4>
            </span>
          </div>
        </div>
        <div className={`col-auto justify-content-end d-flex me-3 pt-2`}>
          <a href="" aria-label="Ganti nomor rekening">
            <h5>Ganti</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

CardHorizontal.defaultProps = {
  first: "col-md-auto",
  second: "col-md-auto",
};

export default { CardVertical, CardTransfer, CardHorizontal };
