import Card from 'react-bootstrap/Card';
// import CardInfoSaldoStyle from './cardinfosaldo/CardInfoSaldoStyle.css'
import styles from "@/cardinfosaldo/CardInfoSaldoStyle.css";

// import LogoBcaHalf from '../assets/logo/logo-bca-half.png';

function CardInfoSaldo({ profile, saldo, norek }) {
    return (
        // <Card className="bg-dark text-white">
        //     {/* <img className="header-icon" src={LogoBcaHalf} alt="Card image 21" /> */}
        //     <Card.ImgOverlay>
        //         <Card.Title>Hi, {profile}</Card.Title>
        //         <p>Saldo Aktif</p>
        //         <Card.Text>{saldo}</Card.Text>
        //         <span>
        //             <img src="{LogoBcaHalf}" alt="logo mastercard" />
        //         </span>
        //         <Card.Text>{norek}</Card.Text>
        //     </Card.ImgOverlay>
        // </Card>
        <div className="d-flex flex-column align-items-start" style={styles.Container}>
            <h2 style={styles.profile}>{profile}</h2>
            <div className="containerCard d-flex flex-row" style={styles.containecard}>
                <div className="content1 d-flex flex-column align-items-start">
                    <h2 style={styles.norek}>{norek}</h2>
                    {/* <p style={styles.text}>{typeTXN}</p> */}
                </div>
                <div className="content2 d-flex flex-column align-items-end">
                    <h2 style={styles.saldo}>{saldo}</h2>
                    {/* <p style={styles.text}>{time}</p> */}
                </div>
            </div>
        </div>
    );
}

export default CardInfoSaldo;