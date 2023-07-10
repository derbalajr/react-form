import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Translate from "../Translate";

export default function Attach({
  classes,
  value,
  changeHandler,
  blurHandler,
  hasError,
}) {
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };
  return (
    <>
      <div className="col-1 zero-padding">
        <label className="zero-padding" htmlFor="fileInput">
          <a className="attach btn">
            <FontAwesomeIcon icon={faPaperclip} size="xl" />
          </a>
        </label>

        <input className={`${classes} form-select input-field`} id="fileInput" value={value} type="file" onChange={changeHandler} onBlur={blurHandler} />
        {hasError && (
          <p className="error">
            <Translate sentence={"category_error"} file={"category"} />
          </p>
        )}
      </div>
    </>
  );
}
