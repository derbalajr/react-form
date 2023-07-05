import React from "react";

import { Localization } from "react-localization";

import en from "../../translation/en.json";
import ar from "../../translation/ar.json";

export default function Nationality({
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
        <label htmlFor="nationality">
          {localization.translate("nationality")}
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
            -- {localization.translate("choose_nationality")} --
          </option>
          <option value="libya">{localization.translate("libya")}</option>
          <option value="egypt">{localization.translate("egypt")}</option>
          <option value="sudan">{localization.translate("sudan")}</option>
        </select>
        {hasError && (
          <p className="error">{localization.translate("nationality_error")}</p>
        )}
      </div>
    </>
  );
}
