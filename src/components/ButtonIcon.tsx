import React from "react";

interface ButtonIconProps {
  label: string,
  color: string,
  icon: string,
  onClick: () => void,
  variant: "solid" | "outline"
}

const ButtonIcon:React.FC<ButtonIconProps> = ({label, color, icon, onClick, variant}) => {

  const ButtonIconStyle: { [key: string]: React.CSSProperties }  = {
    button: {
      padding: "14px 32px",
      backgroundColor: variant === "solid" ? color : "white",
      color: variant === "solid" ? "white" : color,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      border: variant === "outline" ? `2px solid ${color}` : "none",
      borderRadius: "16px",
    },
    icon: {
      width: "15px",
    },
    text: {
      margin: "0 0 0 20px",
      fontWeight: 700,
      fontSize: "16px",
    }
  }


  return (
    <button className="btn" style={ButtonIconStyle.button} onClick={onClick}>
      <i className={icon} style={ButtonIconStyle.icon}></i>
      <p style={ButtonIconStyle.text}>{label}</p>
    </button>
  )
}

export default ButtonIcon;