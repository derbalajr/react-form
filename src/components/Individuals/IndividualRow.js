import React from "react";

import { useSelector } from "react-redux";

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
          <td>{individual.nationality}</td>
          <td>{formatDate(individual.date)}</td>
          <td>{individual.category}</td>
          <td>{individual.transit}</td>
        </tr>
      ))}
    </>
  );
}
