import React from "react";

import { Localization } from "react-localization";

import en from "./translation/en.json";
import ar from "./translation/ar.json";

export default function IndividualName({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  const localization = new Localization({
    en: en,
    ar: ar,
  });
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="name">{localization.translate("name")}</label>
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
          {localization.translate("name_error")}
          </p>
        )}
      </div>
    </>
  );
}
