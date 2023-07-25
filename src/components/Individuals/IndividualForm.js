import React, { useState } from "react";
import Translate from "../Translate";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import countries from "../../json/nationality.json";
import egyptCategory from "../../json/egypt-category.json";
import otherCategory from "../../json/other-category.json";
import transit from "../../json/transit.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function IndividualForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    /**
     * Todo: set and add individual to store
     */
    // const newIndividual = {
    //   name: nameValue, documentNumber: documentNumberValue, nationality: nationalityValue, date: dateValue, category: categoryValue,
    //   transit:
    //     transitValue === "nothing"
    //       ? "not_exempted"
    //       : transitValue === "diplomatic" || transitValue === "special_needs"
    //       ? "exempted"
    //       : transitValue,
    //   documentFile: documentFileValue,
    // };
    // dispatch(addIndividual(newIndividual));
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

        <div className="container mt-5">
          <div className="row">
            <div className="offset-2 col-3">
              <TextField
                fullWidth
                id="outlined-basic"
                label={<Translate sentence={"name"} file={"individual_name"} />}
                variant="outlined"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="offset-1 col-3">
              <TextField
                fullWidth
                id="outlined-basic"
                label={
                  <Translate sentence={"doc_number"} file={"document_number"} />
                }
                variant="outlined"
                name="documentNumber"
                value={inputs.documentNumber || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-1 mt-2">
              <Button fullWidth variant="contained" component="label">
                <FontAwesomeIcon icon={faPaperclip} size="xl" />
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  name="documentFile"
                  value={inputs.documentFile || ""}
                  onChange={handleChange}
                />
              </Button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="offset-2 col-3">
              <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  <Translate sentence={"nationality"} file={"nationality"} />
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  name="nationality"
                  value={inputs.nationality || ""}
                  onChange={handleChange}
                  label={
                    <Translate sentence={"nationality"} file={"nationality"} />
                  }
                >
                  {countries.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      <Translate
                        sentence={country.value}
                        file={"nationality"}
                      />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="offset-1 col-3"></div>
          </div>
          <div className="row mt-3">
            <div className="offset-2 col-3">
              <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  <Translate sentence={"category"} file={"category"} />
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  name="category"
                  value={inputs.category || ""}
                  onChange={handleChange}
                  label={<Translate sentence={"category"} file={"category"} />}
                >
                  {inputs.nationality === "egypt"
                    ? egyptCategory.map((egyptCategory) => (
                        <MenuItem
                          key={egyptCategory.value}
                          value={egyptCategory.value}
                        >
                          <Translate
                            sentence={egyptCategory.value}
                            file={"category"}
                          />
                        </MenuItem>
                      ))
                    : otherCategory.map((otherCategory) => (
                        <MenuItem
                          key={otherCategory.value}
                          value={otherCategory.value}
                        >
                          <Translate
                            sentence={otherCategory.value}
                            file={"category"}
                          />
                        </MenuItem>
                      ))}
                </Select>
              </FormControl>
            </div>
            <div className="col-1 mt-2">
              <Button fullWidth variant="contained" component="label">
                <FontAwesomeIcon icon={faPaperclip} size="xl" />
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  name="categoryFile"
                  value={inputs.categoryFile || ""}
                  onChange={handleChange}
                />
              </Button>
            </div>
            <div className="col-3">
            <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                <Translate sentence={"transit_class"} file={"transit"} />
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  name="transit"
                  value={inputs.transit || ""}
                  onChange={handleChange}
                  label={
                    <Translate sentence={"transit_class"} file={"transit"} />
                  }
                >
                  {transit.map((transit) => (
                    <MenuItem key={transit.value} value={transit.value}>
                      <Translate
                        sentence={transit.value}
                        file={"transit"}
                      />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        {/* <label>
          <Translate sentence={"name"} file={"individual_name"} />{" "}
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </label> */}
        {/* <label>
          <Translate sentence={"doc_number"} file={"document_number"} />{" "}
          <input
            type="text"
            name="documentNumber"
            value={inputs.documentNumber || ""}
            onChange={handleChange}
          />
        </label> */}
        {/* <label>
          <FontAwesomeIcon icon={faPaperclip} size="xl" />{" "}
          <input
            type="file"
            name="documentFile"
            value={inputs.documentFile || ""}
            accept="image/*"
            onChange={handleChange}
          />
        </label> */}
        {/* <label>
          <Translate sentence={"nationality"} file={"nationality"} />
          <select
            name="nationality"
            value={inputs.nationality || ""}
            onChange={handleChange}
          >
            <option value="">
              --{" "}
              <Translate sentence={"choose_nationality"} file={"nationality"} />{" "}
              --
            </option>
            {countries.map((countries) => (
              <option key={countries.value} value={countries.value}>
                <Translate sentence={countries.value} file={"nationality"} />
              </option>
            ))}
          </select>
        </label> */}
        {/* <label>
          <Translate sentence={"birth_date"} file={"birth_date"} />
          <DatePicker
            name="birthDate"
            value={inputs.birthDate || ""}
            onChange={handleChange}
            maxDate={new Date(new Date().getFullYear() - 2, 11, 31)}
            dateFormat="dd/MM/yyyy"
            showMonthDropdown
            yearDropdownItemNumber={120}
            scrollableYearDropdown
            showYearDropdown
          />
        </label> */}
        {/* <label>
          <Translate sentence={"category"} file={"category"} />
          {inputs.nationality === "egypt" ? (
            <select
              name="category"
              value={inputs.category || ""}
              onChange={handleChange}
            >
              <option value="">
                -- <Translate sentence={"choose_category"} file={"category"} />{" "}
                --
              </option>
              {egyptCategory.map((egyptCategory) => (
                <option key={egyptCategory.value} value={egyptCategory.value}>
                  <Translate sentence={egyptCategory.value} file={"category"} />
                </option>
              ))}
            </select>
          ) : (
            <select
              name="category"
              value={inputs.category || ""}
              onChange={handleChange}
            >
              <option value="">
                -- <Translate sentence={"choose_category"} file={"category"} />{" "}
                --
              </option>
              {otherCategory.map((otherCategory) => (
                <option key={otherCategory.value} value={otherCategory.value}>
                  <Translate sentence={otherCategory.value} file={"category"} />
                </option>
              ))}
            </select>
          )}
        </label> */}
        {/* <label>
          <FontAwesomeIcon icon={faPaperclip} size="xl" />{" "}
          <input
            type="file"
            name="fileDoc"
            value={inputs.fileDoc || ""}
            accept="image/*"
            onChange={handleChange}
          />
        </label> */}
        {/* <label>
          <Translate sentence={"transit_class"} file={"transit"} />
          <select
            name="class"
            value={inputs.class || ""}
            onChange={handleChange}
          >
            <option value="">
              --{" "}
              <Translate sentence={"choose_transit_class"} file={"transit"} />{" "}
              --
            </option>
            {transit.map((transit) => (
              <option key={transit.value} value={transit.value}>
                <Translate sentence={transit.value} file={"transit"} />
              </option>
            ))}
          </select>
        </label>
        <label>
          <FontAwesomeIcon icon={faPaperclip} size="xl" />{" "}
          <input
            type="file"
            name="fileDoc"
            value={inputs.fileDoc || ""}
            accept="image/*"
            onChange={handleChange}
          />
        </label> */}
        {/* <label>Enter your age: <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} /></label> */}

        <input type="submit" />
      </form>
    </>
  );
}

export default IndividualForm;
