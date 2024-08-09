import React, { useState } from "react";
import styles from "@/assets/css/FormInput.module.css";
import Select from 'react-select';

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

const FormChooseBank = ({options, value, onChange, placeholder, ariaLabel}) => {
  return (
    <>
      <Select
      className={styles.selectBank}
        options={options}
        value={value}
        onChange={(selectedOption) => onChange(selectedOption ? selectedOption.value : '')}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    </>
  );
};

export { FormInput, SearchInput, FormChooseBank };
