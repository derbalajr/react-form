import React from "react";

import { useTranslation } from "react-i18next";

export default function OtherCategory({
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
        <label htmlFor="category">{t("category")}</label>
      </div>
      <div className="col-3 zero-padding">
        <select
          className={`${classes} form-select input-field`}
          id="category"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        >
          <option value="">-- {t("choose_category")} --</option>
          <option value="other_nationalities">{t("category")}</option>
        </select>
        {hasError && <p className="error">{t("category_error")}</p>}
      </div>
    </>
  );
}
