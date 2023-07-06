import React from "react";
import Translate from "../Translate";

export default function EgyptCategory({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="category">
          <Translate sentence={"category"} />
        </label>
      </div>
      <div className="col-3 zero-padding">
        <select
          className={`${classes} form-select input-field`}
          id="category"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        >
          <option value="">
            -- <Translate sentence={"choose_category"} /> --
          </option>
          <option value="rest_provinces">
            <Translate sentence={"rest_provinces"} />
          </option>
          <option value="matrouh_residents">
            <Translate sentence={"matrouh_residents"} />
          </option>
        </select>
        {hasError && (
          <p className="error">
            <Translate sentence={"category_error"} />
          </p>
        )}
      </div>
    </>
  );
}
