import Card from 'react-bootstrap/Card';
import './CardInfoSaldoStyle.css'
import gambar1 from "@/assets/logo/logo-bca-half.png"
import mastercard from "@/assets/logo/mastercard.png"


// import LogoBcaHalf from '../assets/logo/logo-bca-half.png';

function CardInfoSaldo({ profile, saldo, norek }) {
    return (
        // <div className="d-flex flex-column align-items-start Container">
        //     <div className="containerCard d-flex flex-column containecard">
        //         <div className="content1 d-flex flex-column justify-content-start">
        //             <h2>{profile}</h2>
        //         </div>
        //         <div className="content1 d-flex flex-column">
        //             <h2>{norek}</h2>
        //         </div>
        //         <div className="content2 d-flex flex-column">
        //             <h2>{saldo}</h2>
        //         </div>
        //     </div>
        // </div>
        <div className="w-100 d-flex flex-column bg-saldo text-start text-white card-saldo">
            <div className="row">
                <div className="col-10">
                    <div className="px-5 py-4">
                        <h3 className="text-user">Hi, {profile}</h3>
                    </div>
                    <div className="px-5 py-1">
                        <h6 className="text-saldo">Saldo Aktif</h6>
                        <h2 className="text-jumlah-saldo">Rp. {saldo}</h2>
                    </div>
                    <div className="px-5 d-flex align-items-center">
                        <img src={mastercard} alt="" />
                        <h2 className="text-no-rek">{norek}</h2>
                    </div>
                </div>
                <div className="col-2">
                    <img src={gambar1} alt="" className="img-fluid bg-logo-bca" />
                </div>
            </div>
        </div>
    );
}

export default CardInfoSaldo;