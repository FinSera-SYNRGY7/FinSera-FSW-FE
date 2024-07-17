import React, { useState } from "react";
import Layout from "../layout/Layout";
import ButtonIcon from "../components/ButtonIcon";
import ButtonAlt from "../components/ButtonAlt";
import CardMutation from "../components/CardMutation";
import BtnDropdown from "../components/dropdown/Dropdwon";
import "./MutasiRekening.css";

const MutasiRekening: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    console.log("Selected option:", value);
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
            label="Back Button"
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
              onClick={() => console.log("secondary Button")}
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
            <BtnDropdown
              options={options}
              onOptionSelect={handleOptionSelect}
              title="Tanggal"
            />
          </div>
          <div className="section2">
            <ButtonIcon
              label="Download"
              onClick={() => console.log("Solid Download Clicked")}
              variant="btnDownload2nd"
            />
          </div>
        </div>
        <div className="d-flex flex-column">
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
        </div>
      </div>
    </Layout>
  );
};

export default MutasiRekening;
