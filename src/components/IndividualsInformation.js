import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IndividualName from "./inputs/IndividualName";
import DocumentNumber from "./inputs/DocumentNumber";
import useInput from "../hooks/use-input";
import "./IndividualsInformation.css";
import Attach from "./inputs/Attach";
import Nationality from "./inputs/Nationalaity";

export default function IndividualsInformation() {
  const {
    value: nameValue,
    valid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => {
    const regex = /^[\u0621-\u064Aa-zA-Z\s]{0,200}$/;
    return value.trim() !== "" && regex.test(value);
  });

  const {
    value: documentNumberValue,
    valid: documentNumberIsValid,
    hasError: documentNumberHasError,
    valueChangeHandler: documentNumberChangeHandler,
    inputBlurHandler: documentNumberBlurHandler,
    reset: resetDocumentNumber,
  } = useInput((value) => {
    const regex = /^[a-zA-Z0-9]{5,15}$/;
    return regex.test(value);
  });

  //   const {
  //     value: nationalityValue,
  //     valid: nationalityIsValid,
  //     valueChangeHandler: nationalityChangeHandler,
  //     inputBlurHandler: nationalityBlurHandler,
  //     reset: resetNationality,
  //   } = useInput('');

  let formIsValid = false;
  if (nameIsValid && documentNumberIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid && !documentNumberIsValid) {
      return;
    }
    console.log(nameValue);
    resetName();

    console.log(documentNumberValue);
    resetDocumentNumber();

    // console.log(nationalityValue);
    // resetNationality();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";

  const documentNumberClasses = documentNumberHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <form
        className="container individualInformation"
        onSubmit={formSubmissionHandler}
      >
        <div className="row form-group">
          <div className="col-1"></div>
          <IndividualName
            classes={nameClasses}
            value={nameValue}
            changeHandler={nameChangeHandler}
            blurHandler={nameBlurHandler}
            hasError={nameHasError}
          />
          <div className="col-1"></div>
          <DocumentNumber
            classes={documentNumberClasses}
            value={documentNumberValue}
            changeHandler={documentNumberChangeHandler}
            blurHandler={documentNumberBlurHandler}
            hasError={documentNumberHasError}
          />

          <Attach />
          <div className="col-1"></div>
        </div>
        {/* <div className="row form-group">
          <div className="col-1"></div>
          
          <div className="col-1"></div>
          <div className="col-1 zero-padding">
            <label htmlFor="documentNumber">تاريخ الميلاد</label>
          </div>
          <div className="col-3 zero-padding date">
            <DatePicker
              selected={birthDate}
              onChange={handleBirthDateChange}
              maxDate={maxSelectableDate}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown // Enable month dropdown
              yearDropdownItemNumber={120} // Display 5 years per row
              scrollableYearDropdown // Enable scrollable year dropdown
              showYearDropdown
              className="form-control input-field"
            />
          </div>
          <div className="col-1"></div>
        </div> */}
        {/*<div className="row form-group"> 
           <div className="col-1"></div>
          <div className="col-1 zero-padding">
            <label htmlFor="category">التصنيف</label>
          </div>
          <div className="col-3 zero-padding">
            <select
              className="form-select input-field"
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="restProvinces">باقي المحافظات</option>
              <option value="matrouh">أبناء مطروح</option>
              <option value="otherNationalities">جنسيات اخري</option>
            </select>
          </div>
          <div className="col-1 zero-padding">
            <button type="button" className="attach btn">
              <label className="zero-padding" htmlFor="fileInput">
                <img id="icon" src="icons/32x32.png" />
              </label>
            </button>
            <input id="fileInput" type="file" />
          </div>
          <div className="col-1 zero-padding">
            <label htmlFor="transitClass">فئة العابر</label>
          </div>
          <div className="col-3 zero-padding">
            <select
              className="form-select input-field"
              id="transitClass"
              value={transitClass}
              onChange={handleTransitClassChange}
            >
              <option value="nothing">لا يوجد</option>
              <option value="diplomat">دبلوماسي</option>
              <option value="specialNeeds">ذوي احتياجات</option>
            </select>
          </div>
          <div className="col-1 zero-padding">
            <button type="button" className="attach btn">
              <label className="zero-padding" htmlFor="fileInput">
                <img id="icon" src="icons/32x32.png" />
              </label>
            </button>

            <input id="fileInput" type="file" />
          </div> 
        </div>*/}
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="form-actions col-1 zero-padding">
              <button disabled={!formIsValid}>اضافة</button>
            </div>
          </div>
        </div>
      </form>

      {/* <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Document Number</th>
              <th>Nationality</th>
              <th>Birth Date</th>
              <th>Category</th>
              <th>Transit Class</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.documentNumber}</td>
                <td>{entry.nationality}</td>
                <td>{entry.birthDate?.toLocaleDateString()}</td>
                <td>{entry.category}</td>
                <td>{entry.transitClass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}
