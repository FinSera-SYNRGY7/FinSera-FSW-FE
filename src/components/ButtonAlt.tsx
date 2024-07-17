import React from "react";


interface ButtonAltProps {
  label: string,
  onClick: () => void,
  variant: "btnPrimary" | "btnSecondary" | "btnSecondaryIcon"
}

const ButtonAlt: React.FC<ButtonAltProps> = ({label, onClick, variant}) => {

  const ButtonAltStyle : { [key: string]: React.CSSProperties } = {
    btnPrimary: {
      backgroundColor: "#0066AE",
      color: "white",
      borderRadius: "16px",
    },
    btnSecondary: {
      padding: "12px 0",
      backgroundColor: "white",
      color: "#0066AE",
      borderRadius: "16px",
      border: "2px solid #0066AE",
      width: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    btnSecondaryIcon: {
      padding: "12px 0",
      backgroundColor: "white",
      color: "#0066AE",
      borderRadius: "16px",
      border: "2px solid #0066AE",
      width: "120px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      margin: "0",
      fontWeight: 700,
      fontSize: "16px",
      fontFamily:"calibri"
    }
  }

  return (
    <button className="btn" style={ButtonAltStyle[variant]} onClick={onClick}>
      <p style={ButtonAltStyle.text}>{label}</p>
    </button>
  )
}

export default ButtonAlt;