import React from "react";
import styles from "@/assets/css/ButtonAlt.module.css";

const ButtonAlt = ({ label, onClick, variant, isLoading = false, isLoadingDownload = false }) => {
  return (
    <>
    {isLoading ?
      <div className={styles.containerButtonAlt}>
        <button
          className={`${styles[variant]}`}
          aria-label="Loading..."
        >
          <span className="placeholder col-6" style={{height:'15px'}} aria-label="Loading..." />
        </button>
      </div> :
      <div className={styles.containerButtonAlt}>
      <button
        className={`${styles[variant]}`}
        onClick={onClick}
        aria-label={label}
      >
        {isLoadingDownload ?
      <>
        <div className="spinner-border spinner-border-sm" role="status"></div>
      </> :
      <>
        <p>{label}</p>
      </>}
      </button>
    </div> }
    </>
  );
};

const ButtonIcon = ({ label, onClick, variant, isLoading = false, isLoadingDownload = false }) => {
  const containerClassButton =
    variant === "btnAdd"
      ? `${styles.containerButton} ${styles.btnAdd}`
      : variant === "btnShare"
      ? `${styles.containerButton} ${styles.default} justify-content-end`
      : `${styles.containerButton} ${styles.default}`;

  const getIconClass = (variant) => {
    switch (variant) {
      case "btnDownload2nd":
      case "btnDownload1st":
        return "fa fa-download";
      case "btnAdd":
        return "fa fa-plus";
      case "btnShare":
        return "fa fa-share-alt";
      case "btnBack":
        return "fa fa-arrow-left";
      default:
        return "";
    }
  };

  return (
    <>
    {isLoading ?
    <div className={`d-flex ${containerClassButton} placeholder-glow`}>
      <button
        className={`d-flex flex-row justify-content-center align-items-center ${styles[variant]}`}
        aria-label="Loading..."
      >
       <span className="placeholder col-12" style={{height:'auto'}} aria-label="Loading..." />
      </button>
    </div> :
    <div className={`d-flex ${containerClassButton}`}>
    <button
      className={`d-flex flex-row justify-content-center align-items-center ${styles[variant]}`}
      onClick={onClick}
      aria-label={label}
    >
      {isLoadingDownload ?
      <>
        <div className="spinner-border spinner-border-sm" role="status"></div>
      </> :
      <>
        <i
          className={`${getIconClass(variant)} ${styles.icon}`}
          aria-hidden="true"
        ></i>
        <p className={styles.textLabel}>{label}</p> 
      </>}
    </button>
    </div>}
  </>
  );
};

export { ButtonAlt, ButtonIcon };
