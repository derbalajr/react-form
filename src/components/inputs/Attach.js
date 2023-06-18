import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

export default function Attach() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  return (
    <>
      <div className="col-1 zero-padding">
        <label className="zero-padding" htmlFor="fileInput">
          <a className="attach btn">
            <FontAwesomeIcon icon={faPaperclip} size="xl" />
          </a>
        </label>

        <input id="fileInput" type="file" onChange={handleFileChange} />
      </div>
    </>
  );
}
