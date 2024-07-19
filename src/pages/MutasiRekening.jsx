import React, { useState } from "react";
import Layout from "@/layout/Layout";
import ButtonIcon from "@/components/ButtonIcon";
import ButtonAlt from "@/components/ButtonAlt";
import CardMutation from "@/components/CardMutation";
import BtnDropdown from "@/components/dropdown/Dropdwon";
import FilterDate from "@/components/filterDate/FilterDate";
import imgEmptyData from "@/assets/img/No data-pana 1.png";
import "@/pages/MutasiRekening.css";

const MutasiRekening = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [emptyData, setEmptyData] = useState(false);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected option:", value);
  };

  const handleEmptyData = () => {
    setEmptyData(true);
  };

  const options = [
    { value: "action1", label: "Action 1" },
    { value: "action2", label: "Action 2" },
    { value: "action3", label: "Action 3" },
  ];

  return (
    <Layout>
      <div className="d-flex flex-column containerMutation">
        <h1>Mutasi Rekening</h1>
        <div className="d-flex flex-row btnSection">
          <ButtonIcon
            label="Beranda"
            onClick={() => console.log("Outline Add Button Clicked")}
            variant="btnBack"
          />
          <BtnDropdown
            options={options}
            onOptionSelect={handleOptionSelect}
            title="No Rekening"
          />
        </div>
        <div className="d-flex flex-row containerFilter">
          <div className="section1 d-flex flex-row">
            <ButtonAlt
              label="Hari ini"
              onClick={() => handleEmptyData()}
              variant="btnSecondary"
            />
            <ButtonAlt
              label="7 Hari"
              onClick={() => console.log("secondary Button")}
              variant="btnSecondary"
            />
            <ButtonAlt
              label="1 Bulan"
              onClick={() => console.log("secondary Button")}
              variant="btnSecondary"
            />
            <FilterDate />
          </div>
          <div className="section2">
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
        <div className="d-flex flex-column containerCard">
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
            </>
          ) : (
            <div className="emptyData">
              <img src={imgEmptyData} alt="Data Kosong"></img>
              <p>Oops! Riwayat mutasi kosong</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MutasiRekening;
