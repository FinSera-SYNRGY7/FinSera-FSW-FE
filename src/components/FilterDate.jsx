import { useState } from "react";
import styles from "@/assets/css/FilterDate.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterDate = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.containerDate}>
      <div className={`d-flex flex-column ${styles.filterDate}`}>
      <button className={styles.exampleCustomInput} onClick={handleClick} aria-haspopup="true" aria-expanded={isOpen} aria-controls="datePicker">
        <p aria-label="Tanggal">{name} <i className={`fa fa-chevron-${isOpen ? "up" : "down"} ${isOpen ? styles.faChevronUp : ""}`}></i></p>
      </button>
      {isOpen && (
        <div className={styles.datePicker}>
          <div id="datePicker" className={styles.formDate1}>
            <p>Dari : </p>
            <DatePicker selected={startDate} onChange={onStartDateChange} inline />
          </div>
          <div id="datePicker" className={styles.formDate2}>
            <p>Sampai : </p>
            <DatePicker selected={endDate} onChange={onEndDateChange} inline />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default FilterDate;
