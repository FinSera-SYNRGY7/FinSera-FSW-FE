import styles from "@/assets/css/PopUp.module.css";
import Success from "@/assets/img/Success.svg";

const PopUpChangePinSuccess = ({handleNavigateHome}) => {
  return(
    <div className={styles.overlay}>
      <div className={styles.popup}>
      <img
          className="m-auto my-3 w-20"
          src={Success}
          alt="Transfer Success"
        />
        <h5>PIN Berhasil Diubah</h5>
        <p>Gunakan PIN baru untuk login</p>
        <div className="d-flex flex-row justify-content-center w-100">
          <button
            className={`${styles.btnPrimary} w-75 py-2`}
            onClick={handleNavigateHome}
          >
            Kembali ke Aplikasi
          </button>
        </div>
      </div>
    </div>
  )
}

export { PopUpChangePinSuccess }