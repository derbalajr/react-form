import React from "react";
import { useSelector } from "react-redux";
import "./IndividualsTable.css";

export default function IndividualsTable() {
  const individuals = useSelector((state) => state.individuals);
  console.log(individuals);
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };
  return (
    <div className="individuals-table">
    <table className="table table-striped table-dark custom-table">
      <thead>
        <tr>
          <th>الاسم</th>
          <th>رقم الوثيقة</th>
          <th>الجنسية</th>
          <th>تاريخ الميلاد</th>
          <th>التصنيف</th>
          <th>فئة العابر</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
    </div>
  );
}
