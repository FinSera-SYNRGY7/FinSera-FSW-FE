import React from 'react';
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
import { useInfoAmount } from "@/features/infoAmount/useInfoAmount";
import Spinner from "react-bootstrap/Spinner";

const Account = () => {
    const { data: dataAmount, isLoading: isLoadingAmount } = useInfoAmount()

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
                    <a href="#" className={styles.menuItem}>
                        <div className={styles.menuItemText}>
                            <img src={Notification} alt="Notifikasi" className={styles.menuItemIcon} />
                            Notifikasi
                        </div>
                        <img src={Click} alt="click" className={styles.click} />
                    </a>
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
                <button className={styles.logoutButton}>
                    <img src={Logout} alt="Logout" className={styles.logoutIcon} />
                    Logout
                </button>
            </div>
        </Layout>
    );
};

export default Account;