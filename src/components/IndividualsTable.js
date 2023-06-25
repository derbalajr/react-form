import React from "react";
import IndividualRow from "./IndividualRow";
import "./css/IndividualsTable.css";

export default function IndividualsTable() {
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
        
          <IndividualRow />
        </tbody>
      </table>
    </div>
  );
}
