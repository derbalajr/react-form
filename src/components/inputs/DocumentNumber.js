import React from "react";

export default function DocumentNumber({classes, value, changeHandler, blurHandler, hasError}) {
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="documentNumber">رقم الوثيقة</label>
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
          <p className="error">يرجى إدخال رقم الوثيقة المكون من 5-15 حروف وأرقام فقط</p>
        )}
      </div>
    </>
  );
}
