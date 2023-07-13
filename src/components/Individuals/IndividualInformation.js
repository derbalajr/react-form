import React from "react";

import IndividualName from "../inputs/IndividualName";
import DocumentNumber from "../inputs/DocumentNumber";
import Attach from "../inputs/Attach";
import Nationality from "../inputs/Nationality";
import BirthDate from "../inputs/BirthDate";
import OtherCategory from "../inputs/OtherCategory";
import EgyptCategory from "../inputs/EgyptCategory";
import Transit from "../inputs/Transit";
import Translate from "../Translate";

import useInput from "../../hooks/use-input";

import { addIndividual } from "../../store/individualsSlice";

import { useDispatch } from "react-redux";

import "./css/IndividualsInformation.css";

export default function IndividualInformation() {
  const dispatch = useDispatch();

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

  //document file attach

  // const checkFileExtension = (fileName) => {
  //   const allowedExtensions = [".pdf", ".doc", ".docx"];
  //   const fileExtension = fileName.substr(fileName.lastIndexOf("."));
  //   return allowedExtensions.includes(fileExtension);
  // };

  const validateFileInput = (file) => {
    if (!file || file.length === 0) {
      return "Please select a file.";
    }

    return "";
  };
  const {
    fileValue: documentFileValue,
    valid: documentFileIsValid,
    handleFileChange: documentFileChangeHandler,
    inputBlurHandler: documentFileBlurHandler,
    hasError: documentFileHasError,
    reset: resetDocumentFile,
  } = useInput(validateFileInput);

  let formIsValid = false;
  if (
    nameIsValid &&
    documentNumberIsValid &&
    nationalityIsValid &&
    dateIsValid &&
    categoryIsValid &&
    transitIsValid &&
    documentFileIsValid
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
      !categoryIsValid &&
      !transitIsValid &&
      !documentFileIsValid
    ) {
      return;
    }

    const newIndividual = {
      name: nameValue,
      documentNumber: documentNumberValue,
      nationality: nationalityValue,
      date: dateValue,
      category: categoryValue,
      transit:
        transitValue === "nothing"
          ? "not_exempted"
          : transitValue === "diplomatic" || transitValue === "special_needs"
          ? "exempted"
          : transitValue,
      documentFile: documentFileValue,
    };

    dispatch(addIndividual(newIndividual));

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

    console.log(documentFileValue);
    resetDocumentFile();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";

  const documentNumberClasses = documentNumberHasError
    ? "form-control invalid"
    : "form-control";

  const documentFileClasses = documentFileHasError
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
          <Attach
            classes={documentFileClasses}
            value={documentFileValue}
            changeHandler={documentFileChangeHandler}
            blurHandler={documentFileBlurHandler}
            hasError={documentFileHasError}
          />
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
          {nationalityValue === "egypt" ? (
            <EgyptCategory
              classes={categoryClasses}
              value={categoryValue}
              changeHandler={categoryChangeHandler}
              blurHandler={categoryBlurHandler}
              hasError={categoryHasError}
            />
          ) : (
            <OtherCategory
              classes={categoryClasses}
              value={categoryValue}
              changeHandler={categoryChangeHandler}
              blurHandler={categoryBlurHandler}
              hasError={categoryHasError}
            />
          )}

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
            <div className="form-actions col-1 zero-padding submit">
              <button disabled={!formIsValid}>
                <Translate sentence={"add"} file={"individual_information"} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
