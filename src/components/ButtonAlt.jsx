import React from "react";



const ButtonAlt = ({label, onClick, variant}) => {

  const ButtonAltStyle = {
    containerButton : {
      width: "100%",
    },
    btnPrimary: {
      backgroundColor: "#0066AE",
      color: "white",
      width: "80%",
      padding: "12px 0",
      borderRadius: "16px",
    },
    btnSecondary: {
      padding: "12px 0",
      backgroundColor: "white",
      color: "#0066AE",
      borderRadius: "16px",
      border: "2px solid #0066AE",
      width: "80%",
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
      width: "80%",
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
    <div style={ButtonAltStyle.containerButton}>
      <button className="btn" style={ButtonAltStyle[variant]} onClick={onClick}>
      <p style={ButtonAltStyle.text}>{label}</p>
    </button>
    </div>
  )
}

export default ButtonAlt;