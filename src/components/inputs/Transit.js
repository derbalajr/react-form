import React from "react";

import Translate from "../Translate";

export default function Transit({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="transit_class">
          <Translate sentence={"transit_class"} />
        </label>
      </div>
      <div className="col-3 zero-padding">
        <select
          className={`${classes} form-select input-field`}
          id="transitClass"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        >
          <option value="">
            -- <Translate sentence={"choose_transit_class"} /> --
          </option>
          <option value="nothing">
            <Translate sentence={"nothing"} />
          </option>
          <option value="diplomatic">
            <Translate sentence={"diplomatic"} />
          </option>
          <option value="special_needs">
            <Translate sentence={"special_needs"} />
          </option>
        </select>
        {hasError && (
          <p className="error">
            <Translate sentence={"transit_class_error"} />
          </p>
        )}
      </div>
    </>
  );
}
