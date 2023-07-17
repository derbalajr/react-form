import React from "react";

// import IndividualInformation from "./IndividualInformation";
import IndividualForm from "./IndividualForm";

import IndividualsTable from "./IndividualsTable";

import { useSelector } from "react-redux";

import LanguageSwitcher from "../LanguageSwitcher";
import Translate from "../Translate";

import "./css/Individuals.css";

export default function Individuals() {
  const individuals = useSelector((state) => state.individuals);
  return (
    <>
      <div className="header">
        <h2>
          <Translate sentence={"individuals_screen"} file={"individuals"} />
        </h2>
      </div>
      <LanguageSwitcher />
      {/* <IndividualInformation /> */}
      <IndividualForm />
      <div className="container">
        {individuals.length !== 0 && <IndividualsTable />}
      </div>
    </>
  );
}
