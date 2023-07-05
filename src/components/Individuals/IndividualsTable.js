import React from "react";
import IndividualRow from "./IndividualRow";
import { useTranslation } from 'react-i18next';

import "./css/IndividualsTable.css";

export default function IndividualsTable() {
  const { t } = useTranslation();
  return (
    <>
      <div className="individuals-table">
        <h4>{t('transients_list')}</h4>
        <table className="table table-striped table-dark custom-table">
          <thead>
            <tr>
              <th>{t('name')}</th>
              <th>{t('doc_number')}</th>
              <th>{t('nationality')}</th>
              <th>{t('birth_date')}</th>
              <th>{t('category')}</th>
              <th>{t('exemption_status')}</th>
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
