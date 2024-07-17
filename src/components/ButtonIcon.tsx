import React from "react";

interface ButtonIconProps {
  label: string,
  onClick: () => void,
  variant: "btnDownload2nd" | "btnDownload1st" | "btnAdd" | "btnShare" | "btnBack"
}

const ButtonIcon: React.FC<ButtonIconProps> = ({label, onClick, variant}) => {

  const ButtonIconStyle: { [key: string]: React.CSSProperties }  = {
    btnDownload2nd: {
      padding: "12px 41px",
      backgroundColor: "white",
      color: "#0066AE",
      width: "182px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      border: "2px solid #0066AE",
      borderRadius: "16px",
    },
    btnDownload1st: {
      padding: "12px 0",
      backgroundColor: "#0066AE",
      color: "white",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "16px",
      width: "27%"
    },
    btnShare: {
      padding: "12px 0",
      backgroundColor: "#0066AE",
      color: "white",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "16px",
      width: "27%"
    },
    btnBack: {
      padding: "12px 0 12px 25px",
      backgroundColor: "#0066AE",
      color: "white",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      border: "none",
      borderRadius: "16px",
      width: "888px"
    },
    btnAdd: {
      padding: "12px 22px",
      backgroundColor: "white",
      color: "#0066AE",
      width: "235px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid #0066AE",
      borderRadius: "16px",
    },
    icon: {
      width: "15px",
    },
    text: {
      margin: "0 0 0 20px",
      fontWeight: 700,
      fontSize: "16px",
      fontFamily:"calibri"
    }
  }

  const getIconClass = (variant: string) => {
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
    <button className="btn" style={ButtonIconStyle[variant]} onClick={onClick}>
      <i className={getIconClass(variant)} style={ButtonIconStyle.icon}></i>
      <p style={ButtonIconStyle.text}>{label}</p>
    </button>
  )
}

export default ButtonIcon;