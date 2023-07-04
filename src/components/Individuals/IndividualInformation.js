import React from "react";

import IndividualName from "../inputs/IndividualName";
import DocumentNumber from "../inputs/DocumentNumber";
import Attach from "../inputs/Attach";
import Nationality from "../inputs/Nationality";
import BirthDate from "../inputs/BirthDate";
import OtherCategory from "../inputs/OtherCategory";
import EgyptCategory from "../inputs/EgyptCategory";
import Transit from "../inputs/Transit";

import useInput from "../../hooks/use-input";

import { addIndividual } from "../../store";

import { useDispatch } from "react-redux";

import { Localization } from "react-localization";

import en from "./translation/en.json";
import ar from "./translation/ar.json";

import "./css/IndividualsInformation.css";

export default function IndividualInformation() {
  const dispatch = useDispatch();

  const localization = new Localization({
    en: en,
    ar: ar,
  });

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

    const newIndividual = {
      name: nameValue,
      documentNumber: documentNumberValue,
      nationality: nationalityValue,
      date: dateValue,
      category: categoryValue,
      transit:
        transitValue === "nothing"
          ? localization.translate("not_exempted")
          : transitValue === "diplomatic" || transitValue === "special_needs"
          ? localization.translate("exempted")
          : transitValue,
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
            <div className="form-actions col-1 zero-padding">
              <button disabled={!formIsValid}>
                {localization.translate("add")}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
