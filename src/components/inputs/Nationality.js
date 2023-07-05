import React from "react";

import { useTranslation } from "react-i18next";

export default function Nationality({
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
        <label htmlFor="nationality">
          {t("nationality")}
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
            -- {t("choose_nationality")} --
          </option>
          <option value="libya">{t("libya")}</option>
          <option value="egypt">{t("egypt")}</option>
          <option value="sudan">{t("sudan")}</option>
        </select>
        {hasError && (
          <p className="error">{t("nationality_error")}</p>
        )}
      </div>
    </>
  );
}
