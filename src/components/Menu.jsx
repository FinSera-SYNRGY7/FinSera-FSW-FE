import React from "react";
import styles from "@/assets/css/Menu.module.css";

const ServiceMenu = ({ label, color, navigation, icon, ...props }) => {
  return (
    <a
      style={{ textDecoration: "none", color: "black" }}
      href={navigation}
      aria-label={label}
      {...props}
    >
      <div
        className={`${styles.containerServiceMenu} d-flex flex-column justify-content-center align-items-center`}
      >
        <div
          className={`${styles.logoMenu} ${color} d-flex flex-column justify-content-center align-items-center mb-3`}
        >
          <img src={icon} alt={label} />
        </div>
        <p>{label}</p>
      </div>
    </a>
  );
};

export { ServiceMenu };
