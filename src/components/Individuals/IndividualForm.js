import React,{ useState } from "react";
import Translate from "../Translate";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function IndividualForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    /**
     * Todo: set and add individual to store
     */

  };

  return (
    <>
    <form onSubmit={handleSubmit} className="container individualInformation">
      {/* <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label> */}
      <label><Translate sentence={"name"} file={"individual_name"} /> <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} /></label>
      <label><Translate sentence={"doc_number"} file={"document_number"} /> <input type="text" name="documentNumber" value={inputs.documentNumber || ""} onChange={handleChange} /></label>
      <label><FontAwesomeIcon icon={faPaperclip} size="xl"  /> <input type="file" name="fileDoc" value={inputs.fileDoc || ""} accept="image/*" onChange={handleChange} /></label>
      {/* <label>Enter your age: <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} /></label> */}
      {/* <label>Enter your age: <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} /></label> */}
      <input type="submit" />
    </form>
    </>
  );
}

export default IndividualForm;
