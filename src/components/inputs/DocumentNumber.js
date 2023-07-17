import React from "react";
import Translate from "../Translate";

export default function DocumentNumber({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  return (
    <>
      <div className="col-1 offset-1 zero-padding">
        <label htmlFor="doc_number">
          <Translate sentence={"doc_number"} file={"document_number"} />
        </label>
      </div>
      <div className="col-3 zero-padding">
        <input
          type="text"
          className={`${classes} input-field`}
          id="documentNumber"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
          placeholder=""
        />
        {hasError && (
          <p className="error">
            <Translate sentence={"doc_number_error"} file={"document_number"} />
          </p>
        )}
      </div>
    </>
  );
}
