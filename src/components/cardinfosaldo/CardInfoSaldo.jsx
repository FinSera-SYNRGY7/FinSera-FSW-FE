import Card from 'react-bootstrap/Card';
// import styles from "@/cardinfosaldo/CardInfoSaldoStyle.css";
import "./CardInfoSaldoStyle.css"

// import LogoBcaHalf from '../assets/logo/logo-bca-half.png';

function CardInfoSaldo({ profile, saldo, norek }) {
    return (
        <div className="d-flex flex-column align-items-start Container" >
            <h2>{profile}</h2>
            <div className="containerCard d-flex flex-row containecard">
                <div className="content1 d-flex flex-column align-items-start">
                    <h2>{norek}</h2>
                </div>
                <div className="content2 d-flex flex-column align-items-end">
                    <h2>{saldo}</h2>
                </div>
            </div>
        </div>
    );
}

export default CardInfoSaldo;