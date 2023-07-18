import React,{ useState } from "react";
import Translate from "../Translate";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import countries from "../../json/nationality.json";
import egyptCategory from "../../json/egypt-category.json";
import otherCategory from "../../json/other-category.json";
import transit from "../../json/transit.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



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
      <label><Translate sentence={"nationality"} file={"nationality"} />
        <select name="nationality" value={inputs.nationality || ""} onChange={handleChange} >
            <option value="">
                -- <Translate sentence={"choose_nationality"} file={"nationality"} /> --
            </option>
            {countries.map((countries) => (
                <option key={countries.value} value={countries.value}>
                    <Translate sentence={countries.value} file={"nationality"} />
                </option>
            ))}
        </select>
      </label>
      <label><Translate sentence={"birth_date"} file={"birth_date"} /><DatePicker
          name="birthDate" value={inputs.birthDate || ""} onChange={handleChange}
          maxDate={new Date(new Date().getFullYear() - 2, 11, 31)}
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          yearDropdownItemNumber={120}
          scrollableYearDropdown
          showYearDropdown
        /></label>
      <label><Translate sentence={"category"} file={"category"} />
      {inputs.nationality === "egypt" ? (
        <select name="category" value={inputs.category || ""} onChange={handleChange} >
            <option value="">
                -- <Translate sentence={"choose_category"} file={"category"} /> --
            </option>
            {egyptCategory.map((egyptCategory) => (
                <option key={egyptCategory.value} value={egyptCategory.value}>
                    <Translate sentence={egyptCategory.value} file={"category"} />
                </option>
            ))}
        </select>
          ) : (
            <select name="category" value={inputs.category || ""} onChange={handleChange} >
            <option value="">
                -- <Translate sentence={"choose_category"} file={"category"} /> --
            </option>
            {otherCategory.map((otherCategory) => (
                <option key={otherCategory.value} value={otherCategory.value}>
                    <Translate sentence={otherCategory.value} file={"category"} />
                </option>
            ))}
        </select>
          )}
          </label>
          <label><FontAwesomeIcon icon={faPaperclip} size="xl"  /> <input type="file" name="fileDoc" value={inputs.fileDoc || ""} accept="image/*" onChange={handleChange} /></label>
          <label><Translate sentence={"transit_class"} file={"transit"} />
            <select name="class" value={inputs.class || ""} onChange={handleChange} >
            <option value="">
                -- <Translate sentence={"choose_transit_class"} file={"transit"} /> --
            </option>
                {transit.map((transit) => (
                    <option key={transit.value} value={transit.value}>
                        <Translate sentence={transit.value} file={"transit"} />
                    </option>
                ))}
            </select>
        </label>
        <label><FontAwesomeIcon icon={faPaperclip} size="xl"  /> <input type="file" name="fileDoc" value={inputs.fileDoc || ""} accept="image/*" onChange={handleChange} /></label>
      {/* <label>Enter your age: <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} /></label> */}
      <input type="submit" />
    </form>
    </>
  );
}

export default IndividualForm;
