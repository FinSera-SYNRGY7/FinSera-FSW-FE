import React, { Children } from "react";

function Button({ children, className, type, event, ...rest }) {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={event}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
