import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./DropdownStyle.css"

const DropdownSumberRekening = ({
    options,
    onOptionSelect,
    title,
    subtitle,
}) => {
    return (
        <Dropdown style={{ display: "flex" }}>
            <Dropdown.Toggle
                variant="outline-primary"
                id="dropdown-basic"
                style={{
                    border: "2px solid #0066AE",
                    borderRadius: "16px",
                    fontWeight: 700,
                    fontSize: "14px",
                    fontFamily: "calibri",
                    padding: "3px 28px",
                }}
                className="dropdown-sumber-rekening"
            >
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <div className="title">
                            {title}
                        </div>
                        <div className="subtitle">
                            {subtitle}
                        </div>
                    </div>
                    <i className="fa fa-chevron-down text-black dropdownRek"></i>
                </div>
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

export default DropdownSumberRekening;
