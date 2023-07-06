import React from "react";
import { useTranslation } from 'react-i18next';

export default function Translate({sentence}) {
  const { t } = useTranslation();
  return (
    <>
      {t(sentence)}
    </>
  );
}
