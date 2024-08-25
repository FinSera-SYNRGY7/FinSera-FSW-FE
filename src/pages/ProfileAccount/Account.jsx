import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInfoAmount } from "@/features/infoAmount/useInfoAmount";
import { PopUp } from "@/components/PopUp";
import styles from "@/assets/css/Account.module.css";
import Layout from "@/layout/Layout";
import ProfileAccount from "@/assets/img/photo.png";
import ProfileAccountSmall from "@/assets/logo/profileAccountSmall.svg";
import ChangePIN from "@/assets/logo/changePIN.svg";
import Notification from "@/assets/logo/notification.svg";
import Accessibility from "@/assets/logo/accessibility.svg";
import Terms from "@/assets/logo/terms.svg";
import Help from "@/assets/logo/help.svg";
import Logout from "@/assets/logo/logout.svg";
import Click from "@/assets/logo/click.svg";
import Nav from "react-bootstrap/Nav";
import Spinner from "react-bootstrap/Spinner";

const Account = () => {
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const navigate = useNavigate();
    
    const name = localStorage.getItem('name') ?? 'User';
    const { data: dataAmount, isLoading: isLoadingAmount } = useInfoAmount()

    const handleLogoutClick = (e) => {
        e.preventDefault();
        setShowLogoutPopup(true);
    };

    const handleClosePopup = () => {
        setShowLogoutPopup(false);
    };

    const handleConfirmLogout = () => {
        const pinAppLock = localStorage.getItem('pin_app_lock')
        localStorage.removeItem("auth_token");
        if (pinAppLock != null) { 
        navigate('/relog')
        } else {
        navigate("/login");
        }
        setShowLogoutPopup(false);
    };

    return (
        <Layout>
            <div className={styles.container}>
                <header className={styles.header}>
                {isLoadingAmount ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <>
                        <div className={styles.profileIconContainer}>
                            <div className={styles.profileIcon}>
                                <img src={ProfileAccount} alt="Profile" />
                            </div>
                        </div>
                        <div className={styles.profileInfo}>
                            <div className={styles.name}>{dataAmount.name}</div>
                            <div className={styles.accountNumber}>{dataAmount.accountNumber}</div>
                            
                        </div>
                    </>
                )}
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Akun</h2>
                    <a href="/profile" className={styles.menuItem}>
                        <div className={styles.menuItemText}>
                            <img src={ProfileAccountSmall} alt="Data Diri" className={styles.menuItemIcon} />
                            Data Diri
                        </div>
                        <img src={Click} alt="click" className={styles.click} />
                    </a>
                    <a href="/ubah-pin" className={styles.menuItem}>
                        <div className={styles.menuItemText}>
                            <img src={ChangePIN} alt="Ubah PIN" className={styles.menuItemIcon} />
                            Ubah PIN
                        </div>
                        <img src={Click} alt="click" className={styles.click} />
                    </a>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Preferensi</h2>
                    <Nav.Link href="/notification" className={styles.menuItem}>
                        <div className={styles.menuItemText}>
                            <img src={Notification} alt="Notifikasi" className={styles.menuItemIcon} />
                            Notifikasi
                        </div>
                        <img src={Click} alt="click" className={styles.click} />
                    </Nav.Link>
                    <a href="#" className={styles.menuItem}>
                        <div className={styles.menuItemText}>
                            <img src={Accessibility} alt="Aksesibilitas" className={styles.menuItemIcon} />
                            Aksesibilitas
                        </div>
                        <img src={Click} alt="click" className={styles.click} />
                    </a>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Privasi</h2>
                    <a href="#" className={styles.menuItem}>
                        <div className={styles.menuItemText}>
                            <img src={Terms} alt="Syarat dan Ketentuan" className={styles.menuItemIcon} />
                            Syarat dan Ketentuan
                        </div>
                        <img src={Click} alt="click" className={styles.click} />
                    </a>

                </section>

                <section className={styles.lastSection}>
                    <a href="#" className={styles.lastMenuItem}>
                        <div className={styles.menuItemText}>
                            <img src={Help} alt="Pusat Bantuan" className={styles.menuItemIcon} />
                            Pusat Bantuan
                        </div>
                        <img src={Click} alt="click" className={styles.click} />
                    </a>
                </section>
                <button className={styles.logoutButton} onClick={handleLogoutClick}>
                    <img src={Logout} alt="Logout" className={styles.logoutIcon} />
                    Logout
                </button>
                {showLogoutPopup && (
                    <PopUp handleClosePopup={handleClosePopup} handleConfirmLogout={ handleConfirmLogout } />
                )}
            </div>
        </Layout>
    );
};

export default Account;