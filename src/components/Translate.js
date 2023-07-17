import { useTranslation } from 'react-i18next';
import React from "react";

export default function Translate({sentence, file}) {
  const { t } = useTranslation(file);
  return (
    <>
      {t(sentence)}
    </>
  );
}
