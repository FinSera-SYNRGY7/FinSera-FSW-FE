import { useState } from "react";
import "./FilterDateStyle.css";
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
    <div className="containerDate">
      <dic className="d-flex flex-column filterDate">
      <button className="example-custom-input" onClick={handleClick}>
        <p>Tanggal  <i className={`fa fa-chevron-${isOpen ? "up" : "down"}`}></i></p>
      </button>
      {isOpen && (
        <div className="formDate">
          <DatePicker selected={startDate} onChange={handleChange} inline />
        </div>
      )}
    </dic>
    </div>
  );
};

export default FilterDate;
