import React from 'react';
import { browserName } from 'react-device-detect';
import Layout from "@/layout/Layout";
import styles from "@/assets/css/Profile.module.css";
import profilePic from "@/assets/img/photo.png";
import backButton from "@/assets/logo/back.svg";
import editButton from "@/assets/logo/edit.svg";
import { useProfile } from "@/features/auth/useProfile";
import { useNavigate } from 'react-router-dom';
import { genderReplace } from '@/lib/utils'
import Spinner from "react-bootstrap/Spinner";

const Profile = () => {
  const navigate = useNavigate();

  const handleButtonBack = () => {
    navigate("/home");
  };

  const { data: dataProfile, isLoading: isLoadingProfile } = useProfile()

  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <button className={styles.backButton}> <img src={backButton} alt="Back" className={styles.backButton} onClick={() => handleButtonBack()} /> </button>
            <div className={styles.profilePicContainer}>
              <img src={profilePic} alt="Profile" className={styles.profilePic} />
              <button className={styles.editPicButton}><button className={styles.editPic2Button}><img src={editButton} alt="Edit" className={styles.editPic} /></button></button>
          </div>
        </header>
        <div className={styles.contentSection}>
          {isLoadingProfile ? (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
          ) : (
            <>
              <h1 className={styles.name}>{dataProfile.name}</h1>

              <form className={styles.form}>
                <div className={styles.formGroup} data-value={dataProfile.phone}>
                  <label htmlFor="handphone">No Handphone</label>
                  <input type="text" id="handphone" readOnly />
                </div>

                <div className={styles.formGroup} data-value={dataProfile.email}>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" readOnly />
                </div>

                <div className={styles.formGroup} data-value={genderReplace(dataProfile.gender)}>
                  <label htmlFor="gender">Gender</label>
                  <input type="text" id="gender" readOnly />
                </div>

                <div className={styles.formGroup} data-value={`Browser ${browserName}`}>
                  <label htmlFor="device">Perangkat Tertaut</label>
                  <input type="text" id="device" readOnly />
                </div>

                <div className={styles.formGroup} data-value="1.0.0">
                  <label htmlFor="appVersion">Versi Aplikasi</label>
                  <input type="text" id="appVersion" readOnly />
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;