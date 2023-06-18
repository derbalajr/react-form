
import React from "react";

export default function Nationality({classes, value, changeHandler, blurHandler}) {
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
              <option value="libya">ليبيا</option>
              <option value="egypt">مصر</option>
              <option value="sudan">السودان</option>
            </select>
          </div>
    </>
  );
}






