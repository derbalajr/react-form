import React from "react";

import IndividualInformation from "./IndividualInformation";

import IndividualsTable from "./IndividualsTable";

import { useSelector } from "react-redux";

import { Localization } from "react-localization";

import en from "../../translation/en.json";
import ar from "../../translation/ar.json";

import "./css/Individuals.css";

export default function Individuals() {
  const localization = new Localization({
    en: en,
    ar: ar,
  });

  const individuals = useSelector((state) => state.individuals);
  return (
    <>
      <div className="header">
        <h2>{localization.translate("individuals_screen")}</h2>
      </div>
      <IndividualInformation />
      <div className="container">
        {individuals.length !== 0 && <IndividualsTable />}
      </div>
    </>
  );
}
