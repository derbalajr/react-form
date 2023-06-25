
import React from "react";

export default function Nationality({classes, value, changeHandler, blurHandler, hasError}) {
  return (
    <>
      <div className="col-1 zero-padding">
            <label htmlFor="nationality">الجنسية</label>
          </div>
          <div className="col-3 zero-padding">
            <select
              className={`${classes} form-select input-field`}
              id="nationality"
              value={value}
              onChange={changeHandler}
              onBlur={blurHandler}
            >
              <option value="ليبيا">ليبيا</option>
              <option value="مصر">مصر</option>
              <option value="السودان">السودان</option>
            </select>
            {hasError && (
          <p className="error">يرجى إختيار البلد</p>
        )}
          </div>
    </>
  );
}




