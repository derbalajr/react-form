import React from "react";

import { Localization } from "react-localization";

import en from "../../translation/en.json";
import ar from "../../translation/ar.json";

export default function Transit({
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
        <label htmlFor="transit_class">{localization.translate("transit_class")}</label>
      </div>
      <div className="col-3 zero-padding">
        <select
          className={`${classes} form-select input-field`}
          id="transitClass"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        >
          <option value="">-- {localization.translate("choose_transit_class")} --</option>
          <option value="nothing">{localization.translate("nothing")}</option>
          <option value="diplomatic">{localization.translate("diplomatic")}</option>
          <option value="special_needs">{localization.translate("special_needs")}</option>
        </select>
        {hasError && <p className="error">{localization.translate("transit_class_error")}</p>}
      </div>
    </>
  );
}
