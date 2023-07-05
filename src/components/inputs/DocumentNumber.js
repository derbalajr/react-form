import React from "react";

import { useTranslation } from 'react-i18next';


export default function DocumentNumber({
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
        <label htmlFor="doc_number">
          {t("doc_number")}
        </label>
      </div>
      <div className="col-3 zero-padding">
        <input
          type="text"
          className={`${classes} input-field`}
          id="documentNumber"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
          placeholder=""
        />
        {hasError && (
          <p className="error">{t("doc_number_error")}</p>
        )}
      </div>
    </>
  );
}
