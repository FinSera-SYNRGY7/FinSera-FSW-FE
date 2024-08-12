import styles from "@/assets/css/Header.module.css";

const PopUp = ({handleClosePopup, handleConfirmLogout}) => {
  return(
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h5>Konfirmasi</h5>
        <p>Apakah anda yakin ingin keluar dari aplikasi ini ?</p>
        <div className="d-flex flex-row justify-content-between w-100">
          <button
            className={styles.btnSecondary}
            onClick={handleClosePopup}
          >
            Tidak
          </button>
          <button
            className={styles.btnPrimary}
            onClick={handleConfirmLogout}
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  )
}

export { PopUp }