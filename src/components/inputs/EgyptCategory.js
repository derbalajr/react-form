import React from "react";

import { Localization } from "react-localization";

import en from "./translation/en.json";
import ar from "./translation/ar.json";

export default function EgyptCategory({
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
        <label htmlFor="category">{localization.translate("category")}</label>
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
            -- {localization.translate("choose_category")} --
          </option>
          <option value="rest_provinces">
            {localization.translate("rest_provinces")}
          </option>
          <option value="matrouh_residents">
            {localization.translate("matrouh_residents")}
          </option>
        </select>
        {hasError && (
          <p className="error">{localization.translate("category_error")}</p>
        )}
      </div>
    </>
  );
}
