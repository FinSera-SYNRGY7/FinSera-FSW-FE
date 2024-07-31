import React from 'react';
import Layout from "@/layout/Layout";
import styles from "@/assets/css/Profile.module.css";
import profilePic from "@/assets/img/photo.png";
import backButton from "@/assets/logo/back.svg";
import editButton from "@/assets/logo/edit.svg";

const Profile = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <button className={styles.backButton}> <img src={backButton} alt="Back" className={styles.backButton} /> </button>
          <div className={styles.profileSection}>
            <div className={styles.profilePicContainer}>
              <img src={profilePic} alt="Profile" className={styles.profilePic} />
              <button className={styles.editPicButton}><button className={styles.editPic2Button}><img src={editButton} alt="Edit" className={styles.editPic} /></button></button>
            </div>
          </div>
        </header>

        <div className={styles.contentSection}>
          <h1 className={styles.name}>RAMADHAN ADI</h1>

          <form className={styles.form}>
            <div className={styles.formGroup} data-value="+628679022789">
              <label htmlFor="handphone">No Handphone</label>
              <input type="text" id="handphone" readOnly />
            </div>

            <div className={styles.formGroup} data-value="ramadhanadi@gmail.com">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" readOnly />
            </div>

            <div className={styles.formGroup} data-value="Laki - laki">
              <label htmlFor="gender">Gender</label>
              <input type="text" id="gender" readOnly />
            </div>

            <div className={styles.formGroup} data-value="Iphone 13">
              <label htmlFor="device">Perangkat Tertaut</label>
              <input type="text" id="device" readOnly />
            </div>

            <div className={styles.formGroup} data-value="1.0.0">
              <label htmlFor="appVersion">Versi Aplikasi</label>
              <input type="text" id="appVersion" readOnly />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;