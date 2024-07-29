import { useState } from "react";
import styles from "@/assets/css/FilterDate.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
    console.log(startDate);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.containerDate}>
      <div className={`d-flex flex-column ${styles.filterDate}`}>
      <button className={styles.exampleCustomInput} onClick={handleClick} aria-haspopup="true" aria-expanded={isOpen} aria-controls="datePicker">
        <p aria-label="Tanggal">Tanggal <i className={`fa fa-chevron-${isOpen ? "up" : "down"} ${isOpen ? styles.faChevronUp : ""}`}></i></p>
      </button>
      {isOpen && (
        <div id="datePicker" className="formDate">
          <DatePicker selected={startDate} onChange={handleChange} inline />
        </div>
      )}
    </div>
    </div>
  );
};

export default FilterDate;
