import React from "react";
import Success from "../../assets/img/Success.svg";
import Button from "./../Button/index";
import logobcablue from "../../assets/img/logobcablue.png";
import "./style.css";

export function CardVertical({ className, children, ...rest }) {
  return (
    <>
      <div className="d-flex justify-content-end mb-5">
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
      <div className={`card text-center ${className}`} {...rest}>
        <img className="m-auto" src={Success} alt="" />
        <h2 className="fw-bold">Transaksi Berhasil</h2>
        <div className="card-body">
          <div className="row justify-content-between mb-5">
            <h4 className="col-auto">Tanggal</h4>
            <h4 className="fw-bold col-auto">21 Juni 2024 | 12:45 WIB</h4>
          </div>
          <div className="row justify-content-between mb-5">
            <h4 className="col-auto">Nomor Transaksi</h4>
            <h4 className="fw-bold col-auto">12356676787878</h4>
          </div>
          <hr />
          <div className="row justify-content-between mb-5">
            <h4 className="col-auto">Penerima</h4>
            <h4 className="fw-bold col-auto">Putra Ardiansyah</h4>
          </div>
          <div className="row justify-content-between mb-5">
            <h4 className="col-auto">Jenis Transaksi</h4>
            <h4 className="fw-bold col-auto">Transfer Sesama Bank</h4>
          </div>
          <div className="row justify-content-between mb-5">
            <h4 className="col-auto">Jumlah</h4>
            <h4 className="fw-bold col-auto">Rp 2.000.000</h4>
          </div>
          <div className="row justify-content-between mb-5">
            <h4 className="col-auto">Catatan</h4>
            <h4 className="fw-bold col-auto">Bayar Utang</h4>
          </div>
          <div className="row justify-content-evenly mb-5">
            <Button className={"col-md-4 btn-primary"} type="button">
              <i class="fa fa-download me-2"></i> Download
            </Button>
            <Button className={"col-md-4 btn-primary"} type="button">
              <i className="fa fa-share-alt  me-2"></i> Bagikan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export function CardHorizontal({ className, children, first, second }) {
  return (
    <div className={`card ${className}`}>
      <div className="row">
        <div
          className={`${first} d-flex align-items-center justify-content-center`}
        >
          <div className="circle">
            <p className="text">P</p>
          </div>
        </div>
        <div className={`${second} p-0`}>
          <div className="card-body px-0">
            <h5 className="card-title">Putri Kusuma</h5>
            <h6 class="card-subtitle text-body-secondary">Bank BCA</h6>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardTransfer({ className, first, second }) {
  return (
    <div className={`card ${className}`}>
      <div className="row" style={{ height: "10rem" }}>
        <div
          className={`col-md-2 d-flex align-items-center justify-content-center me-auto`}
          style={{
            borderRadius: "5px 100px 100px 5px",
            backgroundColor: "#E4EDFFE5",
          }}
        >
          <img className="logo" src={logobcablue} alt="" />
        </div>
        <div className={`col-md-8 d-flex align-items-center me-0`}>
          <div className="card-body">
            <h4 className="fw-bold">1234 567 897 890</h4>
            <h5 class="card-subtitle text-body-secondary">RAMADHAN ADI</h5>
            <h3 className="fw-bold text-primary">Rp 10.890.500,00</h3>
          </div>
        </div>
        <div className={`col-md-1 justify-content-end d-flex me-3 pt-2`}>
          <a href="">
            <h5>Ganti</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

CardHorizontal.defaultProps = {
  first: "col-md-4",
  second: "col-md-8",
};

export default { CardVertical, CardTransfer, CardHorizontal };
