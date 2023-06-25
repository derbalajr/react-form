import IndividualsInformation from "./IndividualsInformation";
import React from "react";
import "./Individuals.css";


export default function Individuals() {
  return (
    <>
      <div className="header">
        <h2>شاشة الأفراد</h2>
      </div>
      <IndividualsInformation />
    </>
  );
}
