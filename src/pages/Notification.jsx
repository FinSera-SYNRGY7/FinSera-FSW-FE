import React from 'react';
import styles from "@/assets/css/Notification.module.css";
import Layout from '@/layout/Layout'
import Button from "@/components/Button/index";
import { Link } from "react-router-dom";
import back from "@/assets/logo/back.svg";
import backBlack from "@/assets/logo/backBlack.svg";
import bell from "@/assets/logo/bell.svg";
import notifTransaction from "@/assets/img/notifTransaction.png";
import notifInfo from "@/assets/img/notifInfo.svg";
import noNotification from "@/assets/img/noNotification.svg";

const Notification = () => {
  const notifications = [
    {
      type: 'Transaksi',
      date: '11 Juli 2024 14:04',
      title: 'Transfer ke Putri Eka telah berhasil!',
      description: 'Transfer senilai Rp100.000 ke nomor rekening 434355465745',
    },
    {
      type: 'Transaksi',
      date: '20 Juni 2024 00:04',
      title: 'Transfer ke Putra Ardiansyah telah berhasil!',
      description: 'Transfer senilai Rp100.000 ke nomor rekening 4257618919010',
    },
    {
      type: 'Info',
      date: '11 Juni 2024 14:04',
      title: 'Lupa PIN Finsera? Langsung bikin baru!',
      description: 'Ubah PIN kamu dengan mudah dari Finsera',
    },
    {
      type: 'Transaksi',
      date: '02 Juni 2024 00:04',
      title: 'Topup ke Shopeepay Anda telah berhasil!',
      description: 'Topup senilai Rp200.000 ke nomor +6285672*****',
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Info':
        return <img src={notifInfo} className ={styles.icon}/>;
      case 'Transaksi':
        return <img src={notifTransaction} className ={styles.icon}/>;
      default:
        return null;
    }
  };

  return (
    <Layout>
        <div className={styles.container}>
      <header className={styles.header}>
        <h1>Notifikasi</h1>
        <Button
                className="d-sm-none p-0"
                type="button"
                aria-label="kembali ke halaman sebelumnya">
                <img src={backBlack} alt="Kembali ke halaman sebelumnya" className={styles.back} />
            </Button>
            <Link
                to="/home"
                className={styles.backButton}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
                aria-label="kembali ke halaman sebelumnya"
                role="button"
                    >
                <Button
                    className={
                    "d-none d-sm-block flex-grow-1 base-color w-100 text-sm-start d-flex shadow-hover"
                    }
                    type="button"
                    aria-label="kembali ke halaman sebelumnya"
                >
                    <img src={back} alt="Kembali ke halaman sebelumnya" />
                    <span className="ms-20">Beranda</span>
                </Button>
            </Link>      
      </header>
      <div className={styles.notificationList}>
        {notifications != null && notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className={`${styles.notificationItem} ${index % 2 === 0 ? styles.blue : styles.white}`}>
              <img src={bell} className={styles.bell}/>
              <div className={styles.content}>
                <div className={styles.type}>{notification.type}</div>
                <div className={styles.date}>{notification.date}</div>
                <div className={styles.title}>{notification.title}</div>
                <div className={styles.description}>{notification.description}</div>
              </div>
              {getTypeIcon(notification.type)}
            </div>
          ))
        ) : (
          <div className={styles.noNotification}>
            <img src={noNotification} alt="No Notification" className={styles.noNotificationImage} />
            <h3 className={styles.noNotificationTitle}>
              Belum ada informasi!
            </h3>
            <h4 className={styles.noNotificationDescription}>
              Silakan cek notifikasi lainnya atau mulai lakukan transaksi
            </h4>
          </div>
         )}
      </div>
    </div>
    </Layout>
  );
};

export default Notification;