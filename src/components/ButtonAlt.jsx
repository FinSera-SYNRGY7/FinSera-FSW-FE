import React from "react";
import styles from "@/assets/css/ButtonAlt.module.css"



const ButtonAlt = ({label, onClick, variant}) => {

  return (
    <div className={styles.containerButtonAlt}>
      <button className={`${styles[variant]}`} onClick={onClick} aria-label={label}>
      <p>{label}</p>
    </button>
    </div>
  )
}

const ButtonIcon = ({ label, onClick, variant }) => {
  const containerClassButton = variant === "btnAdd" ? styles.containerButton + " " + styles.btnAdd : styles.containerButton + " " + styles.default;

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
  }

  return (
    <div className={`d-flex ${containerClassButton}`}>
      <button className={`d-flex flex-row justify-content-center align-items-center ${styles[variant]}`} onClick={onClick} aria-label={label}>
      <i className={`${getIconClass(variant)} ${styles.icon}`} aria-hidden="true"></i>
      <p className={styles.textLabel}>{label}</p>
    </button>
    </div>
  )
}


export {
  ButtonAlt,
  ButtonIcon,
};