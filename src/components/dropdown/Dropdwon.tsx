import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./DropdownStyle.css"

interface Option {
  value: string;
  label: string;
}

interface BtnDropdownProps {
  options: Option[];
  onOptionSelect: (value: string) => void;
  title: string;
}

const BtnDropdown: React.FC<BtnDropdownProps> = ({
  options,
  onOptionSelect,
  title,
}) => {
  return (
    <Dropdown style={{ display: "flex" }}>
      <Dropdown.Toggle
        variant="outline-primary"
        id="dropdown-basic"
        style={{
          border: "2px solid #0066AE",
          borderRadius: "16px",
          color: "#0066AE",
          fontWeight: 700,
          fontSize: "16px",
          fontFamily: "calibri",
          padding: "12px 28px",
        }}
      >
        {title} <i className="fa fa-chevron-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            as="button"
            key={option.value}
            onClick={() => onOptionSelect(option.value)}
            className="custom-dropdown-item"
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BtnDropdown;
