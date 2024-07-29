import React, { useState } from "react";
import Layout from "@/layout/Layout";
import { CardMutation } from "@/components/Card";
import FilterDate from "@/components/FilterDate";
import imgEmptyData from "@/assets/img/No data-pana 1.png";
import styles from "@/assets/css/AccountMutation.module.css";
// import "@/pages/MutasiRekening.css";
import { ButtonAlt, ButtonIcon } from "@/components/ButtonAlt";
import { useNavigate } from "react-router-dom";
import DropdownSumberRekening from "@/components/dropdownSumberRekening/Dropdown";

const AccountMutation = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [emptyData, setEmptyData] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected option:", value);
  };

  const handleEmptyData = () => {
    setEmptyData(true);
  };

  const handleButtonBack = () => {
    navigate("/home");
  };

  const options = [
    { value: "action1", label: "Action 1" },
    { value: "action2", label: "Action 2" },
    { value: "action3", label: "Action 3" },
  ];

  return (
    <Layout>
      <div className={`d-flex flex-column ${styles.containerMutation}`}>
        <div className={`d-flex flex-row ${styles.titleMutation}`}>
          <div className={styles.buttonAdroid}>
            <ButtonIcon
              label="Beranda"
              onClick={() => handleButtonBack()}
              variant="btnBack"
            />
          </div>
          <h1 aria-label="Mutasi Rekening">Mutasi Rekening</h1>
        </div>
        <div className={`d-flex flex-row w-100 justify-content-between ${styles.btnSection}`}>
          <div className={styles.buttonWeb}>
            <ButtonIcon
              label="Beranda"
              onClick={() => handleButtonBack()}
              variant="btnBack"
            />
          </div>
          <DropdownSumberRekening
            options={options}
            onOptionSelect={handleOptionSelect}
            title="Sumber Rekening"
            subtitle="1234 5678 8765 99"
            className="dropdownSumberRekening"
          />
        </div>
        <div className={`d-flex flex-row w-100 justify-content-between ${styles.containerFilter}`}>
          <div className={`${styles.section1} justify-content-between w-50 d-flex flex-row`}>
            <ButtonAlt
              label="Hari ini"
              onClick={() => handleEmptyData()}
              variant="btnAltSecondary"
              aria-label="Filter Hari Ini"
            />
            <ButtonAlt
              label="7 Hari"
              onClick={() => console.log("secondary Button")}
              variant="btnAltSecondary"
              aria-label="Filter 7 Hari"
            />
            <ButtonAlt
              label="1 Bulan"
              onClick={() => console.log("secondary Button")}
              variant="btnAltSecondary"
              aria-label="Filter 1 Bulan"
            />
            <FilterDate />
          </div>
          <div className={`${styles.section2}`}>
            {!emptyData ? (
              <>
                <ButtonIcon
                  label="Download"
                  onClick={() => console.log("Solid Download Clicked")}
                  variant="btnDownload2nd"
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={`d-flex flex-column w-100 align-items-center ${styles.containerCard}`}>
          {!emptyData ? (
            <>
              <CardMutation
                color="red"
                dateTXN="7 juli 2024"
                noTXN="121313112343111 DBT4"
                nominal="- Rp. 200.000"
                time="11:12:21 WIB"
                typeTXN="Uang Keluar"
              />
              <CardMutation
                color="red"
                dateTXN="5 juli 2024"
                noTXN="12142332343111 DBT4"
                nominal="- Rp. 100.000"
                time="11:12:21 WIB"
                typeTXN="Uang Keluar"
              />
              <CardMutation
                color="#12D79C"
                dateTXN="1 juli 2024"
                noTXN="531313112343111 DBT4"
                nominal="+ Rp. 2.100.000"
                time="11:12:21 WIB"
                typeTXN="Uang Keluar"
              />
              <div className={styles.btnDownloadAndro}>
                <ButtonAlt 
                  label="Download"
                  onClick={() => console.log("Download")}
                  variant="btnAltPrimary"
                />
              </div>
            </>
          ) : (
            <div className={styles.emptyData}>
              <img src={imgEmptyData} alt="Data Kosong" aria-hidden="true"></img>
              <p aria-label="Oops! Riwayat mutasi kosong">Oops! Riwayat mutasi kosong</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AccountMutation;
