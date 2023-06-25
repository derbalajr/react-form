import React from "react";
import { useSelector } from "react-redux";

export default function IndividualRow() {
  const individuals = useSelector((state) => state.individuals);
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
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
