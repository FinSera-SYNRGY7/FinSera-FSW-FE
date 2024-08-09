import React, { useState } from "react";
import styles from "@/assets/css/FormInput.module.css";

const FormInput = ({ className, children, ...props }) => {
  return (
    <div className={`form-group ${className}`} {...props}>
      {children}
    </div>
  );
};

const SearchInput = ({ onSearch }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [query, setQuery] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <div className={styles.containerSearch}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        aria-label="Toggle tombol Search"
      />
      <div
        className={`${styles.mainbox} ${
          isChecked ? styles.mainboxChecked : ""
        }`}
      >
        <div className={styles.iconContainer} aria-label="Search" tabIndex={0}>
          <i className={`fa fa-search ${styles.faSearch}`}></i>
        </div>
        <input
          className={styles.searchInput}
          placeholder="Cari Disini ..."
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          aria-label="Search input : cari disini.."
        />
      </div>
    </div>
  );
};

const FormChooseBank = ({ label, selectedValue, options, onChange }) => {
  return (
    <>
      <select
        className={`form-select py-3 ps-sm-5 ${styles.selectBank}`}
        name="bank"
        id="bank"
        aria-label={`Pilih bank ${label}`}
        onChange={onChange}
        value={selectedValue}
      >
        <option value="" disabled selected hidden>
          {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} aria-label={option.ariaLabel || option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export { FormInput, SearchInput, FormChooseBank };
