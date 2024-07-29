import React, { useState } from "react";
import Layout from "@/layout/Layout";
import { ButtonIcon } from "../components/ButtonAlt";
import CardTransfer from "@/components/CardTransfer";
import profile from "@/assets/img/profile.png";
import notransferdata from "@/assets/img/notransferdata.png";
import { useNavigate } from "react-router-dom";

// ini masih data dummy ngarang aja
let dataLastTf = [
  {
    id: 1,
    name: "Putri Eka",
    bankName: "Bank BCA",
    accountNumber: "4257618919010",
  },
  {
    id: 2,
    name: "Putra Ardiansyah Saputra",
    bankName: "Bank BNI",
    accountNumber: "0022345666",
  },
  {
    id: 3,
    name: "Perdi Santoso",
    bankName: "Bank BCA",
    accountNumber: "4257618965432",
  },
  {
    id: 4,
    name: "Putu Adi",
    bankName: "Bank BSI",
    accountNumber: "5526677784444444444444444444",
  },
];

// const lastTfXl = dataLastTf.slice(0, 4);

const dataSavedList = [
  // {
  //   id: 1,
  //   name: "Putri Eka",
  //   bankName: "Bank BCA",
  //   accountNumber: "4257618919010",
  // },
  // {
  //   id: 2,
  //   name: "Putra Ardiansyah Saputra",
  //   bankName: "Bank BNI",
  //   accountNumber: "0022345666",
  // },
];

const TransferAntarBank = () => {
  const navigate = useNavigate();

  const handleButtonBack = () => {
    navigate("/home");
  };

  return (
    <Layout>
      <>
        <div
          className="d-flex flex-column"
          style={{
            paddingLeft: "64px",
            paddingRight: "64px",
            margin: "80px 0",
            gap: "70px",
            width: "100%"
          }}
        >
          {/* transfer antar bank */}
          <div className="d-flex flex-column gap-3 w-100">
            <div className=" d-flex align-items-start">
              <h2 style={{ fontWeight: 700, fontSize: "28px" }}>
                Transfer Antar Bank
              </h2>
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{ height: "50px" }}
            >
              <ButtonIcon
                label="Beranda"
                onClick={() => handleButtonBack()}
                variant="btnBack"
              />
              <ButtonIcon
                label="Tambah Penerima Baru"
                onClick={() => console.log("Outline Add Button Clicked")}
                variant="btnAdd"
              />
            </div>
          </div>

          {/* transfer terakhir */}
          <div className="d-flex flex-column" style={{ gap: "60px" }}>
            <div className="d-flex flex-column gap-3">
              <div className=" d-flex align-items-start">
                <h3 style={{ fontWeight: 700, fontSize: "24px" }}>
                  Transfer Terakhir
                </h3>
              </div>
              {dataLastTf.length > 0 ? (
                <div className="d-flex flex-row gap-3">
                  {dataLastTf.map((data) => (
                    <div
                      className="flex-item"
                      style={{ flexBasis: "24%" }}
                      key={data.id}
                    >
                      <CardTransfer
                        profile={profile}
                        tfName={data.name}
                        bankName={data.bankName}
                        accountNumber={data.accountNumber}
                        cardWidth="290px"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <h3 style={{ fontWeight: 400, fontSize: "24px" }}>
                  Belum ada data transfer
                </h3>
              )}
            </div>

            {/* daftar tersimpan */}
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start">
                <h3 style={{ fontWeight: 700, fontSize: "24px" }}>
                  Daftar Tersimpan
                </h3>
              </div>
              {dataSavedList.length > 0 ? (
                <div className="d-flex flex-column gap-3">
                  {dataSavedList.map((data) => (
                    <div className="flex-item" key={data.id}>
                      <CardTransfer
                        profile={profile}
                        tfName={data.name}
                        bankName={data.bankName}
                        accountNumber={data.accountNumber}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="d-flex flex-column gap-3 align-items-center"
                  style={{ marginTop: "40px" }}
                >
                  <img src={notransferdata} alt="No Data" width={"260px"} />
                  <div style={{ width: "650px" }}>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "24px",
                        color: "#0066AE",
                        lineHeight: "33px",
                      }}
                    >
                      Belum Ada Daftar Tersimpan
                    </h3>
                    <h4
                      style={{
                        fontWeight: 400,
                        fontSize: "20px",
                        color: "#8A8A8A",
                        lineHeight: "28px",
                      }}
                    >
                      Tambah penerima ke daftar tersimpan agar transaksi ke
                      orang terdekat lebih mudah
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default TransferAntarBank;
