import React, { Children } from "react";
import "./style.css";

function Button({ children, className, type, action, ...rest }) {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={action}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
