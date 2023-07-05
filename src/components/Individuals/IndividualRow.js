import React from "react";

import { useSelector } from "react-redux";

import { useTranslation } from 'react-i18next';


export default function IndividualRow() {
  const { t } = useTranslation();
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
          <td>{t(individual.nationality)}</td>
          <td>{formatDate(individual.date)}</td>
          <td>{t(individual.category)}</td>
          <td>{t(individual.transit)}</td>
        </tr>
      ))}
    </>
  );
}
