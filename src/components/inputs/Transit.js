import React from "react";

import { useTranslation } from "react-i18next";

export default function Transit({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  const { t } = useTranslation();
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="transit_class">{t("transit_class")}</label>
      </div>
      <div className="col-3 zero-padding">
        <select
          className={`${classes} form-select input-field`}
          id="transitClass"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        >
          <option value="">-- {t("choose_transit_class")} --</option>
          <option value="nothing">{t("nothing")}</option>
          <option value="diplomatic">{t("diplomatic")}</option>
          <option value="special_needs">{t("special_needs")}</option>
        </select>
        {hasError && <p className="error">{t("transit_class_error")}</p>}
      </div>
    </>
  );
}
