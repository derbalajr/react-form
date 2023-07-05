import React from "react";
import IndividualRow from "./IndividualRow";

import { Localization } from "react-localization";

import en from "../../translation/en.json";
import ar from "../../translation/ar.json";

import "./css/IndividualsTable.css";

export default function IndividualsTable() {
  const localization = new Localization({
    en: en,
    ar: ar,
  });
  return (
    <>
      <div className="individuals-table">
        <h4>{localization.translate('transients_list')}</h4>
        <table className="table table-striped table-dark custom-table">
          <thead>
            <tr>
              <th>{localization.translate('name')}</th>
              <th>{localization.translate('doc_number')}</th>
              <th>{localization.translate('nationality')}</th>
              <th>{localization.translate('birth_date')}</th>
              <th>{localization.translate('category')}</th>
              <th>{localization.translate('exemption_status')}</th>
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
