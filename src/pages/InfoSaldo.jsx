// import React from 'react'
import React, { useState } from "react";
import Layout from '@/layout/Layout'
import SumberRekening from '@/components/sumberrekening/SumberRekening'
import CardInfoSaldo from '@/components/cardinfosaldo/CardInfoSaldo'
import ButtonIcon from '@/components/ButtonIcon'
import BtnDropdown from "@/components/dropdown/Dropdwon";


export default function InfoSaldo() {
    return (
        <Layout>
            <div className="d-flex flex-column containerInfoSaldo">
                <h1>Informasi Saldo</h1>
                <div className='d-flex flex-row'>
                    <ButtonIcon
                        label="Beranda"
                        onClick={() => console.log("Outline Add Button Clicked")}
                        variant="btnBack"
                    />
                    <SumberRekening
                        norek="1234 567 897 890"
                        className="dropdown-sumberrekening"
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
