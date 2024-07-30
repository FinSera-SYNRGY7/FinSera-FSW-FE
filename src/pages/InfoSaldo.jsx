// import React from 'react'
import React, { useState } from "react";
import Layout from '@/layout/Layout'
import SumberRekening from '@/components/sumberrekening/SumberRekening'
import CardInfoSaldo from '@/components/cardinfosaldo/CardInfoSaldo'
import { ButtonIcon } from "@/components/ButtonAlt";
import DropdownSumberRekening from "@/components/dropdownSumberRekening/Dropdown";
import styles from "@/assets/css/Infobalance.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



export default function InfoSaldo() {
    const navigate = useNavigate();
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

    const handleButtonBack = () => {
        navigate("/home");
      };

    return (
        <Layout>
            <div className={`d-flex flex-column ${styles.containerInfoSaldo}`}>
                <div className={`d-flex w-100 align-items-center mb-5 mt-5`}>
                    <a href="/home" className="text-black d-inline d-md-none" aria-label="Back">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </a>
                    <h1 className="flex-grow-1 text-md-start text-center p-0 m-0"> <span aria-label="Informasi Saldo">Informasi Saldo</span></h1>
                </div>
                <div className={`d-flex flex-row w-100 ${styles.btnSection}`}>
                    <div className={`w-100 ${styles.btnWeb}`}>
                        <ButtonIcon
                            label="Beranda"
                            onClick={() => handleButtonBack()}
                            variant="btnBack"
                            className="d-none d-md-inline-block"
                            style={{ display: "none" }}
                            aria-label="Beranda"
                        />
                    </div>
                    <DropdownSumberRekening
                        options={options}
                        onOptionSelect={handleOptionSelect}
                        title="Sumber Rekening"
                        subtitle="1234 5678 8765 99"
                        className="dropdownSumberRekening"
                        aria-labelledby="dropdownSumberRekeningTitle"
                    />
                </div>

                <CardInfoSaldo
                    profile="Ramadhan"
                    norek="1234 567 897 890"
                    saldo="10.000.000"
                    aria-label="Informasi Saldo Akun"
                >
                    <span id="profileName">Ramadhan</span>
                    <span id="accountNumber">1234 567 897 890</span>
                    <span id="accountBalance">10.000.000</span>
                </CardInfoSaldo>
            </div>
        </Layout>
    )
}
