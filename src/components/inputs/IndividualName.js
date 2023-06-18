import React from "react";

export default function IndividualName({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="name">الأسم</label>
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
            يرجى إدخال قيمة صحيحة تحتوي على أحرف عربية وإنجليزية فقط ومسافات،
            ولا تتجاوز 200 حرف
          </p>
        )}
      </div>
    </>
  );
}
