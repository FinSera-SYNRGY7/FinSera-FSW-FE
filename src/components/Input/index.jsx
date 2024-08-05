import React, { forwardRef } from "react";
import "./style.css";

function Label({ children, to, ...rest }) {
  return (
    <>
      <label htmlFor={to} {...rest}>
        {children}
      </label>
    </>
  );
}

export const Input = forwardRef(({ className, name, type, ...rest }, ref) => {
  return (
      <>
        <input
          className={`form-control ${className}`}
          type={type}
          name={name}
          id={name}
          ref={ ref}
          {...rest}
        />
      </>
    );
})

function Select({ className, name, dataOption, ...rest }) {
  return (
    <select
      className={`form-select py-3 ps-sm-5 ${className}`}
      name={name}
      id={name}
    >
      {dataOption.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export const TextArea = forwardRef(({ className, name, ...rest }, ref) => {
  return (
    <textarea
      className={`form-control py-sm-3 ps-sm-5 d-flex align-items-center ${className}`}
      name={name}
      id={name}
      ref={ ref}
      {...rest}
    />
  );
})

function InputForm({ children, className, ...rest }) {
  return (
    <div className={`form-group ${className}`} {...rest}>
      {children}
    </div>
  );
}

InputForm.Label = Label;
InputForm.Input = Input;
InputForm.Select = Select;
InputForm.TextArea = TextArea;

export default InputForm;
