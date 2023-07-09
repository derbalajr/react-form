import React from "react";

import Translate from "../Translate";

export default function IndividualName({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="name">
          <Translate sentence={"name"} file={"individual_name"} />
        </label>
      </div>
      <div className="col-3 zero-padding">
        <input
          type="text"
          className={`${classes} input-field`}
          id="name"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
          placeholder=""
        />
        {hasError && (
          <p className="error">
            <Translate sentence={"name_error"} file={"individual_name"} />
          </p>
        )}
      </div>
    </>
  );
}
