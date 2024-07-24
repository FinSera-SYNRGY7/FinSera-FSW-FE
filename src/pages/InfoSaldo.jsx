// import React from 'react'
import React, { useState } from "react";
import Layout from '@/layout/Layout'
import SumberRekening from '@/components/sumberrekening/SumberRekening'
import CardInfoSaldo from '@/components/cardinfosaldo/CardInfoSaldo'
import ButtonIcon from '@/components/ButtonIcon'
import DropdownSumberRekening from "@/components/dropdownSumberRekening/Dropdown";



export default function InfoSaldo() {

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
            <div className="d-flex flex-column containerInfoSaldo">
                <h1>Informasi Saldo</h1>
                {/* <div className='d-flex flex-row'>
                    <ButtonIcon
                        label="Beranda"
                        onClick={() => console.log("Outline Add Button Clicked")}
                        variant="btnBack"
                    />
                    <SumberRekening
                        norek="1234 567 897 890"
                        className="dropdown-sumberrekening"
                    />
                </div> */}

                <div className="d-flex flex-row btnSection">
                    <ButtonIcon
                        label="Beranda"
                        onClick={() => console.log("Outline Add Button Clicked")}
                        variant="btnBack"
                    />
                    <DropdownSumberRekening
                        options={options}
                        onOptionSelect={handleOptionSelect}
                        title="Sumber Rekening"
                        subtitle="1234 5678 8765 99"
                        className="dropdownSumberRekening"
                    />
                </div>

                <CardInfoSaldo
                    profile="Ramadhan"
                    norek="1234 567 897 890"
                    saldo="10.000.000"
                />
            </div>
        </Layout>
    )
}
