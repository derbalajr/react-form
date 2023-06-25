import IndividualsInformation from "./IndividualsInformation";
import IndividualsTable from "./IndividualsTable";
import React from "react";
import { useSelector } from "react-redux";

import "./css/Individuals.css";

export default function Individuals() {
  const individuals = useSelector((state) => state.individuals);
  return (
    <>
      <div className="header">
        <h2>شاشة الأفراد</h2>
      </div>
      <IndividualsInformation />
      <div className="container">
      {individuals.length !== 0 && (<IndividualsTable />)}
        
      </div>
    </>
  );
}
