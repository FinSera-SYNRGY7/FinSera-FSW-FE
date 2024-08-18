import React, { useRef } from "react";
import Layout from "@/layout/Layout";
import Button from "@/components/Button/index";
import { CardHorizontal } from "@/components/Card/index";
import { useNavigate, Link } from "react-router-dom";
import styles from "@/assets/css/Transfer.module.css";
import notransferdata from "@/assets/img/notransferdata.png";

function Ewallet() {
  const navigate = useNavigate();

  const listContacts = localStorage.getItem("list_contact_e-wallets");

  const lastTransfers = localStorage.getItem("last_transfer_e-wallets");

  return (
    <Layout className="haveStyle">
      <div className="d-flex align-items-baseline pt-5">
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
            className="d-sm-none p-0"
            type="button"
            aria-label="kembali ke halaman sebelumnya"
          >
            <i className="fa fa-arrow-left" />
          </Button>
        </Link>
        <h1 className="fw-bold col-12 text-center text-sm-start">
          <span role="label" aria-label="E-Wallet">
            E-Wallet
          </span>
        </h1>
      </div>
      <div className="d-flex justify-content-end justify-content-sm-between gap-5 mb-sm-4">
        <Link
          to="/home"
          className={styles.backButton}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          aria-label="kembali ke halaman sebelumnya"
          role="button"
        >
          <Button
            className={
              "d-none d-sm-block flex-grow-1 base-color w-100 text-sm-start d-flex shadow-hover"
            }
            type="button"
            aria-label="kembali ke halaman sebelumnya"
          >
            <i className="fa fa-arrow-left"></i>
            <span className="ms-20">Beranda</span>
          </Button>
        </Link>
        <Link
          to="/e-wallet/pilih"
          className="m-0"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          role="button"
          aria-label="Tambah penerima baru"
        >
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
        {lastTransfers != null ? (
          JSON.parse(lastTransfers)
            .filter((item, index) => index <= 3)
            .map((value, index) => (
              <>
                {index >= 0 && index <= 1 ? (
                  <div className="flex-fill">
                    <CardHorizontal
                      type={value.ewallet_name.toLowerCase()}
                      className={"shadow p-0 border-0 outline"}
                      aria-label="akun transfer terakhir"
                      data={{
                        name_recipient: value.ewallet_account_name,
                        bank_name: value.ewallet_name,
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}
                {index == 2 ? (
                  <div className="d-none d-md-block flex-fill">
                    <CardHorizontal
                      type={value.ewallet_name.toLowerCase()}
                      className={"shadow p-0 border-0 outline"}
                      aria-label="akun transfer terakhir"
                      data={{
                        name_recipient: value.ewallet_account_name,
                        bank_name: value.ewallet_name,
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}
                {index == 3 ? (
                  <div className="d-none d-lg-block flex-fill">
                    <CardHorizontal
                      type={value.ewallet_name.toLowerCase()}
                      className={"shadow p-0 border-0 outline"}
                      aria-label="akun transfer terakhir"
                      data={{
                        name_recipient: value.ewallet_account_name,
                        bank_name: value.ewallet_name,
                      }}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))
        ) : (
          <></>
        )}
      </div>
      <h4 className="fw-bold mb-3">Daftar Tersimpan</h4>
      {listContacts != null ? (
        JSON.parse(listContacts).map((value, index) => (
          <CardHorizontal
            type={value.ewallet_name.toLowerCase()}
            key={index}
            className={"shadow p-0 border-0 mb-3 outline"}
            role="button"
            aria-label="akun transfer tersimpan"
            data={{
              name_recipient: value.ewallet_account_name,
              bank_name: value.ewallet_name,
            }}
            onClick={() => {
              navigate("/e-wallet/form-input", {
                state: {
                  ewallet_name: value.ewallet_name,
                  ewallet_account_name: value.ewallet_account_name,
                  ewallet_account: value.ewallet_account,
                  ewallet_account_id: value.ewallet_id,
                },
              });
            }}
          />
        ))
      ) : (
        <div
          className="d-flex flex-column gap-3 align-items-center"
          style={{ marginTop: "40px" }}
        >
          <img src={notransferdata} className="img-fluid" alt="No Data" />
          <div style={{ width: "70%" }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "18px",
                color: "#0066AE",
                lineHeight: "33px",
              }}
            >
              Belum Ada Daftar Tersimpan
            </h3>
            <h4
              style={{
                fontWeight: 400,
                fontSize: "18px",
                color: "#8A8A8A",
                lineHeight: "28px",
              }}
            >
              Tambah penerima ke daftar tersimpan agar transaksi ke orang
              terdekat lebih mudah
            </h4>
          </div>
        </div>
      )}
      {/* <CardHorizontal
        className={"shadow p-0 border-0 mb-3 outline"}
        aria-label="akun transfer tersimpan"
        data={{
          name_recipient: "Kusuma Dewi",
          bank_name: "Bank BCA",
        }}
      />
      <CardHorizontal
        className={"shadow p-0 border-0 mb-3 outline"}
        aria-label="akun transfer tersimpan"
        data={{
          name_recipient: "Kusuma Dewi",
          bank_name: "Bank BCA",
        }}
      /> */}
      <div className="mb-5"></div>
    </Layout>
  );
}

export default Ewallet;
