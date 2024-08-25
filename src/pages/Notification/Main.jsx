import styles from "@/assets/css/Notification.module.css";
import Layout from '@/layout/Layout'
import Button from "@/components/Button/index";
import back from "@/assets/logo/back.svg";
import backBlack from "@/assets/logo/backBlack.svg";
import bell from "@/assets/logo/bell.svg";
import notifTransaction from "@/assets/img/notifTransaction.png";
import notifInfo from "@/assets/img/notifInfo.svg";
import noNotification from "@/assets/img/noNotification.svg";
import { Link } from "react-router-dom";
import { useNotification } from "@/features/notification/useNotification";

const Notification = () => {

  const {
    data: dataNotification, 
    isLoading: isLoadingNotification,
    isError: isErrorNotification 
  } = useNotification()
  
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

  const renderLoadingDataNotification = () => {
    const loopDataLoading =  [1, 2, 3, 4, 5]
    return loopDataLoading.map((item, index) => {
      return (
        <>
          <div key={index} className={`${styles.notificationItem} ${index % 2 === 0 ? styles.blue : styles.white} placeholder-glow`} role='status'>
            <span className={`${styles.bell} placeholder col-7`} aria-label="Loading..." />
            <div className={styles.content}>
              <div><span className='placeholder col-6' aria-label='Loading...' /></div>
              <div><span className='placeholder col-6' aria-label='Loading...' /></div>
              <div><span className='placeholder col-6' aria-label='Loading...' /></div>
              <div><span className='placeholder col-6' aria-label='Loading...' /></div>
            </div>
            <span className={`${styles.icon} placeholder col-7`} aria-label="Loading..." />
          </div>
        </>
      )
    })
  }

  const renderDataNotification = () => {
    return dataNotification?.map((notification, index) => {
      return (
        <>
          <div key={index} className={`${styles.notificationItem} ${index % 2 === 0 ? styles.blue : styles.white}`}>
            <img src={bell} className={styles.bell}/>
            <div className={styles.content}>
              <div className={styles.type}>{notification.typeNotification}</div>
              <div className={styles.date}>{notification.createdDate}</div>
              <div className={styles.title}>{notification.tittle}</div>
              <div className={styles.description}>{notification.description}</div>
            </div>
            {getTypeIcon(notification.typeNotification)}
          </div>
        </>
      )
    })
  }

  return (
    <Layout>
        <div className={styles.container}>
      <header className={styles.header}>
        <h1>Notifikasi</h1>
        <Link
          to="/home"
          className={styles.backButton}
          style={{
              textDecoration: "none",
              color: "inherit",
          }}
          aria-label="kembali ke halaman sebelumnya"
          role="button">
          <Button
              className="d-sm-none p-0"
              type="button"
              aria-label="kembali ke halaman sebelumnya">
              <img src={backBlack} alt="Kembali ke halaman sebelumnya" className={styles.back} />
          </Button>
        </Link>
        <Link
          to="/home"
          className={styles.backButton}
          style={{
              textDecoration: "none",
              color: "inherit",
          }}
          aria-label="kembali ke halaman sebelumnya"
          role="button">
          <Button
            className={
            "d-none d-sm-block flex-grow-1 base-color w-100 text-sm-start d-flex shadow-hover"
            }
            type="button"
            aria-label="kembali ke halaman sebelumnya">
            <img src={back} alt="Kembali ke halaman sebelumnya" />
            <span className="ms-20">Beranda</span>
          </Button>
        </Link>      
      </header>
      <div className={styles.notificationList}>
      {isLoadingNotification ? (
        renderLoadingDataNotification()
      ) : (
        !isErrorNotification ? (
          renderDataNotification()
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
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Notification;