import './CardInfoSaldoStyle.css'
import gambar1 from "@/assets/logo/logo-bca-half.png"
import mastercard from "@/assets/logo/mastercard.png"
import styles from '@/assets/css/Infobalance.module.css';


function CardInfoSaldo({ profile, saldo, norek }) {
    return (
        <div className={`${styles.cardBalance} w-100 d-flex flex-column text-start text-white position-relative`}>
            <img src={gambar1} alt="" className={`${styles.bgLogoBca} position-absolute`} />
            <div className="row">
                <div className="col-10">
                    <div className="px-md-5 px-4 py-md-4 pt-3">
                        <h3 className={`${styles.textUser}`}><span aria-label="Hi {profile}">Hi, {profile}</span></h3>
                    </div>
                    <div className="px-md-5 px-4 py-md-1 py-0">
                        <h6 className={`${styles.text}`}>Saldo Aktif</h6>
                        <h2 className={`${styles.textAmountBalance}`}>Rp. {saldo}</h2>
                    </div>
                    <div className="px-md-5 px-4 d-flex align-items-center">
                        <img src={mastercard} alt="" className={`${styles.bgLogoMastercard}`} />
                        <h2 className={`${styles.textNoRek}`}>{norek}</h2>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CardInfoSaldo;