import React from "react";

export default function Attach() {
  return (
    <>
      <div className="col-1 zero-padding">
            <button type="button" className="attach btn">
              <label className="zero-padding" htmlFor="fileInput">
              <img id="icon" src="icons/32x32.png" alt="img" />
              </label>
            </button>

            <input id="fileInput" type="file" />
          </div>
    </>
  );
}
