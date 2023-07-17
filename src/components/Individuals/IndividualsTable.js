import React from "react";
import IndividualRow from "./IndividualRow";
import Translate from "../Translate";
import "./css/IndividualsTable.css";
import Print from "../Print";
import Pay from "../Pay";

export default function IndividualsTable() {
  return (
    <>
      <div className="individuals-table">
        <h4>
          <Translate sentence={"transients_list"} file={"individuals_table"} />
        </h4>
        <table className="table table-striped table-dark custom-table">
          <thead>
            <tr>
              <th>
                <Translate sentence={"name"} file={"individuals_table"} />
              </th>
              <th>
                <Translate sentence={"doc_number"} file={"individuals_table"} />
              </th>
              <th>
                <Translate
                  sentence={"nationality"}
                  file={"individuals_table"}
                />
              </th>
              <th>
                <Translate sentence={"birth_date"} file={"individuals_table"} />
              </th>
              <th>
                <Translate sentence={"category"} file={"individuals_table"} />
              </th>
              <th>
                <Translate
                  sentence={"exemption_status"}
                  file={"individuals_table"}
                />
              </th>
              <th>
                <Translate
                  sentence={"attachments"}
                  file={"individuals_table"}
                />
              </th>
              <th>
                <Translate sentence={"collect"} file={"individuals_table"} />
              </th>
              <th>
                <Translate sentence={"print"} file={"individuals_table"} />
              </th>
            </tr>
          </thead>
          <tbody>
            <IndividualRow />
          </tbody>
        </table>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-1 no-padding">
              <Print />
            </div>
            <div className="col-1 no-padding">
              <Pay />
            </div>
        </div>
      </div>
    </>
  );
}
