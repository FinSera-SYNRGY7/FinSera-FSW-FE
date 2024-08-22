import './CardInfoSaldoStyle.css'
import gambar1 from "@/assets/logo/logo-bca-half.png"
import mastercard from "@/assets/logo/mastercard.png"
import styles from '@/assets/css/Infobalance.module.css';
import hideIcon from "@/assets/logo/Hide.svg";
import showIcon from "@/assets/logo/Show.svg";
import copyIcon from "@/assets/logo/copy.svg";
import hidePassIcon from "@/assets/logo/hide pass.svg";
import { useState } from 'react';
// import Spinner from "react-bootstrap/Spinner";


function CardInfoSaldo({ profile, saldo, norek, isLoading = false }) {
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    console.log("cek isLoading di infosaldo", isLoading)

    return (
        <div className={`${styles.cardBalance} w-100 d-flex flex-column text-start text-white position-relative`}>
            <img src={gambar1} alt="" className={`${styles.bgLogoBca} position-absolute`} />
            <div className="row">
                <div className="col-10">
                    {
                      isLoading ? 
                      <div className={`px-md-5 px-4 py-md-4 pt-3 ${styles.cardName} placeholder-glow`} role='status'>
                        <h3 className={`${styles.textUser}`}><span aria-label="Hi, ">Hi, </span> <span className='placeholder col-4' aria-label='Loading...' /></h3>
                      </div> : 
                      <div className={`px-md-5 px-4 py-md-4 pt-3 ${styles.cardName}`}>
                          <h3 className={`${styles.textUser}`}><span aria-label={`Hi ${profile}`}>Hi, {profile}</span></h3>
                      </div>
                    }
                    <div className="px-md-5 px-4 py-md-1 py-0">
                        <h6 className={`${styles.text}`}>Saldo Aktif</h6>
                        {
                          isLoading ? 
                          <div className={`${styles.textAmountBalance} d-flex flex-row align-items-center placeholder-glow`} role='status'>
                            <span className="placeholder col-7" style={{
                              height:'50px'
                            }} aria-label="Loading..." />
                          </div> : 
                          <div className={`${styles.textAmountBalance} d-flex flex-row align-items-center`}>
                              {isBalanceVisible ? (
                                  <>
                                      <h2>{saldo}</h2>
                                      <img
                                          src={showIcon}
                                          alt="Sembunyikan saldo"
                                          onClick={toggleBalanceVisibility}
                                          style={{ cursor: 'pointer' }}
                                          className="ms-2"
                                      />
                                  </>
                              ) : (
                                  <div className="hide-icon">
                                      <img
                                          src={hidePassIcon}
                                          alt={`Saldo mu ${saldo}`}
                                          style={{ cursor: 'pointer' }}
                                          // className="hide-saldo"
                                          className={`${styles.hideSaldo}`}
                                      />
                                      <img
                                          src={hideIcon}
                                          alt="lihat saldo"
                                          onClick={toggleBalanceVisibility}
                                          style={{ cursor: 'pointer' }}
                                          className="ms-1 ms-md-2"
                                      />
                                  </div>
                              )}
                          </div>
                        }
                    </div>
                    {
                      isLoading ? 
                      <div className="px-md-5 px-4 d-flex align-items-center placeholder-glow" role='status'>
                        <span className={`${styles.bgLogoMastercard} placeholder col-7 mt-5`} aria-label="Loading..." />
                        <h2 className={`${styles.textNoRek}`}><span className="placeholder col-7" aria-label="Loading..." /></h2>
                      </div> : 
                      <div className="px-md-5 px-4 d-flex align-items-center">
                          <img src={mastercard} alt="" className={`${styles.bgLogoMastercard}`} />
                          <h2 className={`${styles.textNoRek}`}>{norek}</h2>
                      </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default CardInfoSaldo;