import React from "react";

import { useSelector } from "react-redux";
import Translate from "../Translate";

export default function IndividualRow() {
  const individuals = useSelector((state) => state.individuals);
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };
  return (
    <>
      {individuals.map((individual, index) => (
        <tr key={index}>
          <td>{individual.name}</td>
          <td>{individual.documentNumber}</td>
          <td>
            <Translate sentence={individual.nationality} file={"individual_row"} />
          </td>
          <td>{formatDate(individual.date)}</td>
          <td>
            <Translate sentence={individual.category} file={"individual_row"} />
          </td>
          <td>
            <Translate sentence={individual.transit} file={"individual_row"} />
          </td>
        </tr>
      ))}
    </>
  );
}
