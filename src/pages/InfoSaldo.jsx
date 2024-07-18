import React from 'react'
import Layout from '../layout/Layout'
import SumberRekening from '../components/SumberRekening'
import CardInfoSaldo from '../components/cardinfosaldo/CardInfoSaldo'
import ButtonIcon from '../components/ButtonIcon'
import CardMutation from '../components/CardMutation'

export default function InfoSaldo() {
    return (
        <Layout>
            <div className="d-flex flex-column containerMutation">
                <h1>Informasi Saldo</h1>
                {/* <button> Beranda </button>
                <p>This is the content of the main page.</p> */}
                {/* <Button /> */}
                {/* <Back /> */}
                <ButtonIcon
                    label="Beranda"
                    onClick={() => console.log("Outline Add Button Clicked")}
                    variant="btnBack"
                />
                <SumberRekening />

                <CardMutation
                    profile="Ramadhan"
                    color="black"
                    noTXN="1234 567 897 890"
                    nominal="Rp. 10.000.000"
                    time="11:12:21 WIB"
                    typeTXN="Saldo Aktif"
                />
                <CardInfoSaldo
                    profile="Ramadhan"
                    norek="123 456 789 000"
                    saldo="***********"
                />

                {/* <CardInfoSaldo /> */}
            </div>

            {/* <div className="d-flex flex-column align-items-start" style={cardInfoSaldoStyle.Container}>
                <h2 style={cardInfoSaldoStyle.title}>{dateTXN}</h2>
                <div className="containerCard d-flex flex-row" style={cardInfoSaldoStyle.containecard}>
                    <div className="content1 d-flex flex-column align-items-start">
                        <h2 style={cardInfoSaldoStyle.txn}>{norek}</h2>
                        <p style={cardInfoSaldoStyle.text}>{typeTXN}</p>
                    </div>
                    <div className="content2 d-flex flex-column align-items-end">
                        <h2 style={cardInfoSaldoStyle.price}>{saldo}</h2>
                        <p style={cardInfoSaldoStyle.text}>{time}</p>
                    </div>
                </div>
            </div> */}
        </Layout>
    )
}
