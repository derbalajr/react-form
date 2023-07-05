import React from "react";

import { useTranslation } from "react-i18next";


export default function IndividualName({
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
        <label htmlFor="name">{t("name")}</label>
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
          {t("name_error")}
          </p>
        )}
      </div>
    </>
  );
}
