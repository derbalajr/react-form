import React from "react";

import Translate from "../Translate";

export default function Nationality({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="nationality">
          <Translate sentence={"nationality"} file={"nationality"} />
        </label>
      </div>
      <div className="col-3 zero-padding">
        <select
          className={`${classes} form-select input-field`}
          id="nationality"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        >
          <option value="">
            -- <Translate sentence={"choose_nationality"} file={"nationality"} /> --
          </option>
          <option value="libya">
            <Translate sentence={"libya"} file={"nationality"} />
          </option>
          <option value="egypt">
            <Translate sentence={"egypt"} file={"nationality"} />
          </option>
          <option value="sudan">
            <Translate sentence={"sudan"} file={"nationality"} />
          </option>
        </select>
        {hasError && (
          <p className="error">
            <Translate sentence={"nationality_error"} file={"nationality"} />
          </p>
        )}
      </div>
    </>
  );
}
