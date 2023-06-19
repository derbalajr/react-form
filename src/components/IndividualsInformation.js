import React, { useState, useEffect } from "react";

import IndividualName from "./inputs/IndividualName";
import DocumentNumber from "./inputs/DocumentNumber";
import useInput from "../hooks/use-input";
import "./IndividualsInformation.css";
import Attach from "./inputs/Attach";
import Nationality from "./inputs/Nationality";
import BirthDate from "./inputs/BirthDate";
import Category from "./inputs/Category";

import Transit from "./inputs/Transit";

export default function IndividualsInformation() {

  //name
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

  //document number
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

  //nationality
  const {
    value: nationalityValue,
    valid: nationalityIsValid,
    valueChangeHandler: nationalityChangeHandler,
    inputBlurHandler: nationalityBlurHandler,
    hasError: nationalityHasError,
    reset: resetNationality,
  } = useInput((value) => value.trim() !== "");

  //date
  const {
    value: dateValue,
    valid: dateIsValid,
    inputBlurHandler: dateBlurHandler,
    hasError: dateHasError,
    reset: resetDate,
    handleBirthDateChange,
  } = useInput((value) => {
    return !!value;
  });

  //category
  const {
    value: categoryValue,
    valid: categoryIsValid,
    valueChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
    hasError: categoryHasError,
    reset: resetCategory,
  } = useInput((value) => value.trim() !== "");

  //transit
  const {
    value: transitValue,
    valid: transitIsValid,
    valueChangeHandler: transitChangeHandler,
    inputBlurHandler: transitBlurHandler,
    hasError: transitHasError,
    reset: resetTransit,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    nameIsValid &&
    documentNumberIsValid &&
    nationalityIsValid &&
    dateIsValid &&
    categoryIsValid &&
    transitIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (
      !nameIsValid &&
      !documentNumberIsValid &&
      !nationalityIsValid &&
      !dateIsValid &&
      categoryIsValid &&
      transitIsValid
    ) {
      return;
    }
    
    console.log(nameValue);
    resetName();

    console.log(documentNumberValue);
    resetDocumentNumber();

    console.log(nationalityValue);
    resetNationality();

    console.log(dateValue);
    resetDate();

    console.log(categoryValue);
    resetCategory();

    console.log(transitValue);
    resetTransit();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";

  const documentNumberClasses = documentNumberHasError
    ? "form-control invalid"
    : "form-control";

  const nationalityClasses = nationalityHasError
    ? "form-control invalid"
    : "form-control";

  const dateClasses = dateHasError ? "form-control invalid" : "form-control";

  const categoryClasses = categoryHasError
    ? "form-control invalid"
    : "form-control";

    const transitClasses = categoryHasError
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
        <div className="row form-group">
          <div className="col-1"></div>
          <Nationality
            classes={nationalityClasses}
            value={nationalityValue}
            changeHandler={nationalityChangeHandler}
            blurHandler={nationalityBlurHandler}
            hasError={nationalityHasError}
          />
          <div className="col-1"></div>
          <BirthDate
            classes={dateClasses}
            value={dateValue}
            changeHandler={handleBirthDateChange}
            blurHandler={dateBlurHandler}
            hasError={dateHasError}
          />
          <div className="col-1"></div>
        </div>
        <div className="row form-group">
          <div className="col-1"></div>
          <Category
            classes={categoryClasses}
            value={categoryValue}
            changeHandler={categoryChangeHandler}
            blurHandler={categoryBlurHandler}
            hasError={categoryHasError}
          />
          <Attach />
          <Transit
            classes={transitClasses}
            value={transitValue}
            changeHandler={transitChangeHandler}
            blurHandler={transitBlurHandler}
            hasError={transitHasError}
          />
          <Attach />
        </div>
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
