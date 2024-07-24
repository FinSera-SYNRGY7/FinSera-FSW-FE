import React from "react";

function Label({ children, to }) {
  return (
    <>
      <label htmlFor={to}>{children}</label>
    </>
  );
}

function Input({ className, name, type, ...rest }) {
  return (
    <>
      <input
        className={`form-control ${className}`}
        type={type}
        name={name}
        id={name}
        {...rest}
      />
    </>
  );
}

function Select({ className, name, dataOption, ...rest }) {
  return (
    <select className={`form-select ${className}`} name={name} id={name}>
      {dataOption.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

function TextArea({ className, name, ...rest }) {
  return (
    <textarea
      className={`form-control ${className}`}
      name={name}
      id={name}
      {...rest}
    />
  );
}

function InputForm({ children, className }) {
  return <div className={`form-group ${className}`}>{children}</div>;
}

InputForm.Label = Label;
InputForm.Input = Input;
InputForm.Select = Select;
InputForm.TextArea = TextArea;

export default InputForm;
