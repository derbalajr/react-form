import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BirthDate({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="documentNumber">تاريخ الميلاد</label>
      </div>
      <div className="col-3 zero-padding date">
        <DatePicker
          selected={value}
          onChange={changeHandler}
          onBlur={blurHandler}
          maxDate={new Date(new Date().getFullYear() - 2, 11, 31)}
          dateFormat="dd/MM/yyyy"
          showMonthDropdown // Enable month dropdown
          yearDropdownItemNumber={120} // Display 5 years per row
          scrollableYearDropdown // Enable scrollable year dropdown
          showYearDropdown
          className={`${classes} input-field`}
        />
        {hasError && <p className="error">يرجي إدخال التاريخ</p>}
      </div>
    </>
  );
}
