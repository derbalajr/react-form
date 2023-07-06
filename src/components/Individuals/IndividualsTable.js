import React from "react";
import IndividualRow from "./IndividualRow";
import Translate from "../Translate";
import "./css/IndividualsTable.css";

export default function IndividualsTable() {
  return (
    <>
      <div className="individuals-table">
        <h4>
          <Translate sentence={"transients_list"} />
        </h4>
        <table className="table table-striped table-dark custom-table">
          <thead>
            <tr>
              <th>
                <Translate sentence={"name"} />
              </th>
              <th>
                <Translate sentence={"doc_number"} />
              </th>
              <th>
                <Translate sentence={"nationality"} />
              </th>
              <th>
                <Translate sentence={"birth_date"} />
              </th>
              <th>
                <Translate sentence={"category"} />
              </th>
              <th>
                <Translate sentence={"exemption_status"} />
              </th>
            </tr>
          </thead>
          <tbody>
            <IndividualRow />
          </tbody>
        </table>
      </div>
    </>
  );
}
