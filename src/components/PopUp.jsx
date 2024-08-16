import styles from "@/assets/css/PopUp.module.css";
import { useState } from "react";
import Select from "react-select";

const PopUp = ({ handleClosePopup, handleConfirmLogout }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h5>Konfirmasi</h5>
        <p>Apakah anda yakin ingin keluar dari aplikasi ini ?</p>
        <div className="d-flex flex-row justify-content-between w-100">
          <button className={styles.btnSecondary} onClick={handleClosePopup}>
            Tidak
          </button>
          <button className={styles.btnPrimary} onClick={handleConfirmLogout}>
            Ya
          </button>
        </div>
      </div>
    </div>
  );
};

const PopupDate = ({
  options,
  value,
  onChange,
  handleClosePopup,
  handleConfirmDate,
}) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startMonth, setStartMonth] = useState();
  const [endMonth, setEndMonth] = useState();
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDateChange = (event, setDate) => {
    let inputValue = event.target.value;
    inputValue = inputValue.slice(0, 2);
    if (inputValue.length === 1) {
      inputValue = `0${inputValue}`;
    }
    setDate(inputValue);
  };

  const handleYearChange = (event, setYear) => {
    let inputValue = event.target.value;
    inputValue = inputValue.slice(0, 4);
    setYear(inputValue);
  };

  const handleSubmit = () => {
    if (startDate === endDate && startMonth === endMonth && startYear === endYear) {
      setErrorMessage("Tanggal awal dan tanggal akhir harus berbeda.");
    } else {
      setErrorMessage("");
      handleConfirmDate({ startDate, startMonth, startYear, endDate, endMonth, endYear });
    }
  };


  return (
    <div className={styles.overlay}>
      <div className={styles.popup1}>
        <div className={styles.buttonClose}>
          <button className="btn-close" onClick={handleClosePopup}></button>
        </div>
        <h5>Tanggal Awal</h5>
        <div className={styles.formInputDate}>
          <input
            className={styles.inputDate}
            type="text"
            maxLength="2"
            inputMode="numeric"
            placeholder="Tanggal"
            onWheel={(e) => e.target.blur()}
            onInput={(e) => handleDateChange(e, setStartDate)}
          />
          <Select
            className="selectMonth"
            placeholder="Bulan"
            options={options}
            value={startMonth}
            onChange={setStartMonth}
          />
          <input
            className={styles.inputDate}
            type="text"
            maxLength="4"
            inputMode="numeric"
            placeholder="Tahun"
            onWheel={(e) => e.target.blur()}
            onInput={(e) => handleYearChange(e, setStartYear)}
          />
        </div>
        <hr />
        <h5>Tanggal Akhir</h5>
        <div className={styles.formInputDate}>
          <input
            className={styles.inputDate}
            maxLength="2"
            type="text"
            inputMode="numeric"
            placeholder="Tanggal"
            onWheel={(e) => e.target.blur()}
            onInput={(e) => handleDateChange(e, setEndDate)}
          />
          <Select
            className="selectMonth"
            placeholder="Bulan"
            options={options}
            value={endMonth}
            onChange={setEndMonth}
          />
          <input
            className={styles.inputDate}
            maxLength="4"
            type="text"
            placeholder="Tahun"
            inputMode="numeric"
            onWheel={(e) => e.target.blur()}
            onInput={(e) => handleYearChange(e, setEndYear)}
          />
        </div>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <button className={styles.btnPrimary} onClick={handleSubmit}>
          Filter
        </button>
      </div>
    </div>
  );
};

export { PopUp, PopupDate };
