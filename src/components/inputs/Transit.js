
import React from "react";

export default function Transit({classes, value, changeHandler, blurHandler, hasError}) {
  return (
    <>
      <div className="col-1 zero-padding">
      <label htmlFor="transitClass">فئة العابر</label>
          </div>
          <div className="col-3 zero-padding">
            <select
              className={`${classes} form-select input-field`}
              id="transitClass"
              value={value}
              onChange={changeHandler}
              onBlur={blurHandler}
            >
              <option value="nothing">لا يوجد</option>
              <option value="diplomat">دبلوماسي</option>
              <option value="specialNeeds">ذوي احتياجات</option>
            </select>
            {hasError && (
          <p className="error">يرجى إختيار فئة العابر</p>
        )}
          </div>
    </>
  );
}