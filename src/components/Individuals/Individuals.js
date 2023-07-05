import React from "react";

import IndividualInformation from "./IndividualInformation";

import IndividualsTable from "./IndividualsTable";

import { useSelector } from "react-redux";

import { useTranslation } from 'react-i18next';


import "./css/Individuals.css";

export default function Individuals() {
  const { t } = useTranslation();

  const individuals = useSelector((state) => state.individuals);
  return (
    <>
      <div className="header">
        <h2>{t("individuals_screen")}</h2>
      </div>
      <IndividualInformation />
      <div className="container">
        {individuals.length !== 0 && <IndividualsTable />}
      </div>
    </>
  );
}
