
import React from "react";

export default function Category({classes, value, changeHandler, blurHandler, hasError}) {
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
              <option value="restProvinces">باقي المحافظات</option>
              <option value="matrouh">أبناء مطروح</option>
              <option value="otherNationalities">جنسيات اخري</option>
            </select>
            {hasError && (
          <p className="error">يرجى إختيار التصنيف</p>
        )}
          </div>
    </>
  );
}







