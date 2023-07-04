import React from "react";

export default function OtherCategory({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  return (
    <>
      <div className="col-1 zero-padding">
        <label htmlFor="category">التصنيف</label>
      </div>
      <div className="col-3 zero-padding">
        <select
          className={`${classes} form-select input-field`}
          id="category"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        >
          <option value="">-- اختر التصنيف --</option>
          <option value="جنسيات اخري">جنسيات اخري</option>
        </select>
        {hasError && <p className="error">يرجى إختيار التصنيف</p>}
      </div>
    </>
  );
}
