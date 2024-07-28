import Card from 'react-bootstrap/Card';
import './CardInfoSaldoStyle.css'
import gambar1 from "@/assets/logo/logo-bca-half.png"
import mastercard from "@/assets/logo/mastercard.png"
// import styles from '@/assets/css/Infobalance.module.css';


// import LogoBcaHalf from '../assets/logo/logo-bca-half.png';

function CardInfoSaldo({ profile, saldo, norek }) {
    return (
        <div className="w-100 d-flex flex-column bg-saldo text-start text-white card-saldo position-relative">
            <img src={gambar1} alt="" className="position-absolute bg-logo-bca" />
            <div className="row">
                <div className="col-10">
                    <div className="px-md-5 px-4 py-md-4 pt-3">
                        <h3 className="text-user">Hi, {profile}</h3>
                    </div>
                    <div className="px-md-5 px-4 py-md-1 py-0">
                        <h6 className="text-saldo">Saldo Aktif</h6>
                        <h2 className="text-jumlah-saldo">Rp. {saldo}</h2>
                    </div>
                    <div className="px-md-5 px-4 d-flex align-items-center">
                        <img src={mastercard} alt="" className="bg-logo-mastercard" />
                        <h2 className="text-no-rek">{norek}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardInfoSaldo;